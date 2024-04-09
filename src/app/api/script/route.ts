// https://github.com/Kakulukian/youtube-transcript/issues/19
import { NextRequest, NextResponse } from "next/server";
import { parse } from "node-html-parser";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env["ANTHROPIC_API_KEY"],
});

export async function POST(req: NextRequest) {
  const reqObj = await req.json();

  const PAGE = await fetch(reqObj.url)
    .then((res) => res.text())
    .then((html) => parse(html));

  const scripts = PAGE.getElementsByTagName("script");
  const playerScript = scripts.find((script) =>
    script.textContent.includes("var ytInitialPlayerResponse = {")
  );

  const dataString = playerScript.textContent
    ?.split("var ytInitialPlayerResponse = ")?.[1]
    ?.slice(0, -1);
  const data = JSON.parse(dataString.trim());
  const captionsUrl =
    data.captions.playerCaptionsTracklistRenderer.captionTracks[0].baseUrl;

  const resXML = await fetch(captionsUrl)
    .then((res) => res.text())
    .then((xml) => parse(xml));

  let transcript;
  const chunks = resXML.getElementsByTagName("text");
  for (const chunk of chunks) {
    transcript += chunk.textContent;
  }

  const res = await anthropic.messages.create({
    model: "claude-3-opus-20240229",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `Given the following video script,here is the video script ${transcript}, generate a compelling email to viewers. The YouTuber is a programming lessons tutor on his channel, teaching everything about programming and about programmers. He wants to make a newsletter to his followers. Can you plz give me the email only using the words in the video script . DO NOT INCLUDE ANY WORDS OTHER THAN THE WORDS USED IN THE VIDEO.Plz make it basically as long as the video script itself but just remove the grammatical errors , filler words.`,
      },
      { role: "assistant", content: "" },
    ],
  });

  const text = res.content[0].text;
  return NextResponse.json({ text });
}

// https://github.com/Kakulukian/youtube-transcript/issues/19
import { NextRequest, NextResponse } from "next/server";
import { parse } from "node-html-parser";
import Anthropic from "@anthropic-ai/sdk";
import AnthropicBedrock from "@anthropic-ai/bedrock-sdk";

const anthropic = new Anthropic({
  apiKey: "my_api_key", // defaults to process.env["ANTHROPIC_API_KEY"]
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

  console.log("transcript", transcript); // :)

  //   const message = await anthropic.messages.create({
  //     model: "claude-3-opus-20240229",
  //     max_tokens: 100000,
  //     messages: [
  //       {
  //         role: "user",
  //         content: `Given the following video script,here is the video script ${transcript}, generate a compelling email to viewers. The YouTuber is a programming lessons tutor on his channel, teaching everything about programming and about programmers. He wants to make a newsletter to his followers. Can you plz give me the email only using the words in the video script . DO NOT INCLUDE ANY WORDS OTHER THAN THE WORDS USED IN THE VIDEO.Plz make it basically as long as the video script itself but just remove the grammatical errors , filler words.`,
  //       },
  //       { role: "assistant", content: "" },
  //     ],
  //   });
  //   console.log(message);

  //   return NextResponse.json({ transcript });

  const client = new AnthropicBedrock({
    awsAccessKey: process.env.awsAccessKey,
    awsSecretKey: process.env.awsSecretKey,
    awsSessionToken: process.env.awsSessionToken,
    awsRegion: process.env.awsRegion,
  });

  //   async function main() {
  //     const message = await client.messages.create(
  //     //   //   model: "anthropic.claude-3-sonnet-20240229-v1:0",
  //     //   model: "anthropic.claude-v2:1",
  //     //   max_tokens: 256,
  //     //   messages: [{ role: "user", content: "Hello, world" }],
  //     {
  //         "modelId": "anthropic.claude-v2:1",
  //         "contentType": "application/json",
  //         "accept": "*/*",
  //         "body": "{\"prompt\":\"\\n\\nHuman: Hello world\\n\\nAssistant:\",\"max_tokens_to_sample\":300,\"temperature\":0.5,\"top_k\":250,\"top_p\":1,\"stop_sequences\":[\"\\n\\nHuman:\"],\"anthropic_version\":\"bedrock-2023-05-31\"}"
  //       }
  //     );
  //     console.log("message", message);

  //   }
  //   main().catch(console.error);

  const anthropic = new Anthropic();

  //   const res = await anthropic.messages.create({
  //     model: "claude-3-opus-20240229",
  //     max_tokens: 1024,
  //     messages: [{ role: "user", content: "Hello, world" }],
  //   });

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

  console.log("res111", res);

  return null;

  // https://www.youtube.com/watch?v=cjJWYaFj5dk
}

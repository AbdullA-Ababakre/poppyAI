import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { supabaseClient } from "@/utils/supabaseClient";
import { cleanObjectValues } from "@/utils";
import { CreatorDetail } from "@/types";
export async function POST(req: NextRequest) {
  const { data: creators, error } = await supabaseClient
    .from("creators")
    .select();

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  // Function to generate OpenAI embeddings for a given text
  async function generateOpenAIEmbeddings(profile: any) {
    const response = await openai.embeddings.create({
      model: "text-embedding-3-large",
      input: profile,
    });
    return response.data[0].embedding;
  }

  try {
    if (creators) {
      const processedDataArray = await Promise.all(
        creators.map(async (item: CreatorDetail) => {
          const cleanedItem = cleanObjectValues(item);
          const AboutOnePerson = `This UGC(User generated content)'s name is ${cleanedItem.name},This UGC creators' email is ${cleanedItem.email},
          This UGC creator's website is ${cleanedItem.website},
          This UGC creator's tiktok followers are ${cleanedItem.tiktok_followers},
          This UGC creator's Instagram followers are ${cleanedItem.instagram_followers},
          This UGC creator's is based in ${cleanedItem.location},
          This UGC creator's gender is ${cleanedItem.gender},
          This is the UGC creator's description: ${cleanedItem.description},and this is the UGC creator is in these industries: ${cleanedItem.industry},and this UGC creator can speak this languages : ${cleanedItem.language}`;
          const embeddings = await generateOpenAIEmbeddings(AboutOnePerson);

          const { data, error } = await supabaseClient
            .from("creators")
            .update({ embeddings: embeddings })
            .eq("id", item.id)
            .select();

          // Check for errors
          if (error) {
            return NextResponse.json({
              success: false,
              status: 500,
              result: error,
            });
          }

          return NextResponse.json({
            success: true,
            status: 200,
            result: data,
          });
        })
      );

      // Check if any insertions failed
      const hasError = processedDataArray.some((result) => !result.ok);

      if (hasError) {
        return NextResponse.json({
          error: "One or more insertions failed",
          status: 500,
        });
      }

      return NextResponse.json({
        status: 200,
        success: true,
        results: processedDataArray,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      success: false,
      results: error,
      message: "Internal Server Error",
    });
  }
}

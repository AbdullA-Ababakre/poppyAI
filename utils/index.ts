import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import OpenAI from "openai";
import { CreatorDetail } from "@/types";
import _ from "lodash";
import { supabaseClient } from "@/utils/supabaseClient";
import { json } from "stream/consumers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

// Function to generate OpenAI embeddings for a given text
export async function embedCreatorProfile(profile: any) {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-large",
    input: profile,
  });
  return response.data[0].embedding;
}

export function cleanObjectValues(inputObject: {
  [key: string]: any;
}): CreatorDetail {
  const cleanedObject: CreatorDetail | {} = {};

  Object.keys(inputObject).forEach((key) => {
    const value = inputObject[key];
    // Check if the value is a string
    if (typeof value === "string") {
      // Remove all newline characters and extra spaces
      (cleanedObject as { [key: string]: any })[key] = value
        .replace(/\n/g, "")
        .replace(/\s+/g, " ")
        .trim();
    } else {
      // Leave non-string values as is
      (cleanedObject as { [key: string]: any })[key] = value;
    }
  });

  return cleanedObject as CreatorDetail;
}

export function isBlankStr(value: any): boolean {
  return (
    value === "" ||
    value === "\n" ||
    /^[\s]*$/.test(_.toString(value)) || // Use _.toString to safely convert value
    value === null ||
    value === undefined
  );
}

// Fetch all creators from the database
export const fetchCreators = async (): Promise<CreatorDetail[]> => {
  try {
    let { data, error } = await supabaseClient.from("creators").select("*");
    if (error) throw error;

    return data as CreatorDetail[];
  } catch (error: any) {
    console.error("fetchCreators error:", error.message);
    return [];
  }
};

// Perform a semantic search for creators based on a search term
export const fetchSemanticSearch = async (
  searchTerm: string
): Promise<CreatorDetail[]> => {
  try {
    const response = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchTerm }),
    });

    if (!response.ok) throw new Error("Network response was not ok.");

    const jsonResponse = await response.json();

    return jsonResponse.data as CreatorDetail[];
  } catch (error: any) {
    console.error("fetchSemanticSearch error:", error.message);
    return [];
  }
};

export const getScript = async (url: string) => {
  try {
    const response = await fetch("/api/script", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) throw new Error("Network response was not ok.");

    const jsonResponse = await response.json();

    return jsonResponse.transcript;
  } catch (error: any) {
    // console.error("fetchSemanticSearch error:", error.message);
    // return [];
  }
};

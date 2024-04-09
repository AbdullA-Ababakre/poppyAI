import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { supabaseClient } from "@/utils/supabaseClient";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const body = await request.json();

  const query = body.searchTerm;

  if (!query) {
    return NextResponse.json({ error: "Empty query" });
  }

  // Create Embedding
  const openAiEmbeddings = await openai.embeddings.create({
    model: "text-embedding-3-large",
    input: query,
  });

  const [{ embedding }] = openAiEmbeddings.data;

  // Search Supabase
  const { data, error } = await supabaseClient.rpc("creators_vector_search", {
    query_embedding: embedding,
    similarity_threshold: 0.2,
    match_count: 5,
  });

  if (data) {
    return NextResponse.json({ data });
  }

  return NextResponse.json({ error });
}

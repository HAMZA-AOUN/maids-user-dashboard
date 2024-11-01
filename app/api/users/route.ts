import { NextResponse } from "next/server";
import axios from "axios";

const BASE_URL = "https://reqres.in/api";
const cache = new Map<string, { data: unknown; expiresAt: number }>();
const CACHE_DURATION = 60 * 1000;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || "1";
  const cacheKey = `users-page-${page}`;

  const cachedData = cache.get(cacheKey);
  if (cachedData && Date.now() < cachedData.expiresAt) {
    return NextResponse.json(cachedData.data);
  }

  try {
    const response = await axios.get(`${BASE_URL}/users?page=${page}`);
    const data = response.data;

    cache.set(cacheKey, { data, expiresAt: Date.now() + CACHE_DURATION });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch users", error: (error as Error).message },
      { status: 500 }
    );
  }
}

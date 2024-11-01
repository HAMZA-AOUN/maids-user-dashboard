import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const BASE_URL = "https://reqres.in/api";
const cache = new Map<string, { data: unknown; expiresAt: number }>();
const CACHE_DURATION = 60 * 1000; // 1 minute

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json(
      { message: "User ID is required" },
      { status: 400 }
    );
  }

  const cacheKey = `user-${id}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData && Date.now() < cachedData.expiresAt) {
    return NextResponse.json(cachedData.data);
  }

  try {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    const data = response.data;

    cache.set(cacheKey, { data, expiresAt: Date.now() + CACHE_DURATION });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch user", error: (error as Error).message },
      { status: 500 }
    );
  }
}

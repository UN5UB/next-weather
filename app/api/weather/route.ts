import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const lat = 51.5074;
    const lon = 0.1278;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const res = await axios.get(url);
    console.log(url);

    return NextResponse.json(res.data);
  } catch (error) {
    console.log("Error fetching data");
    return new Response("Error fetching data", { status: 500 });
  }
}

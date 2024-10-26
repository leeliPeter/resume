import { NextResponse } from 'next/server';
import { education } from "@/data";

export async function GET() {
    return NextResponse.json(education, { status: 200 });
}

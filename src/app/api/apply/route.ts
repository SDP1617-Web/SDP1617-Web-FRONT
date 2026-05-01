import { NextResponse } from "next/server";
import { ENV_CONSTANTS } from "@/constants/EnvConstants";

const API_URL = ENV_CONSTANTS.API_URL;

// TODO: 관련 API 엔드포인트 수정이 필요할 수 있음
export const POST = async (request: Request) => {
    const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify(request.body),
    });
    const data = await response.json();
    return NextResponse.json(data);
};
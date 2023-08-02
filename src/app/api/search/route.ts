import { getMovie } from "@/app/actions/getTrending";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
    try {
        const input = await req.json();

        if(!input)
            return new NextResponse("Missing information", { status: 400 });
        
        const result = getMovie(input.id, 10);
        console.log(result.id)

        if (!result)
            return new NextResponse("No results", { status: 404 });
        
        return NextResponse.json(result);

    } catch (error: any) {
        console.log(error, "Search error");
        return new NextResponse("Search error", { status: 500 });
    }
    
}
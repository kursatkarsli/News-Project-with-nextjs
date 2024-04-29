import { NextResponse } from "next/server";

//this" name is also reserved
export function middleware(request){
    console.log(request)
    return NextResponse.next()
}
export const config = {
    matcher: '/news' // matcher configuration in documantation
}
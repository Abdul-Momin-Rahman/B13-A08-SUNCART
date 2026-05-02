import dns from "node:dns"
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export const proxy = async (request) => {

    const { pathname } = request.nextUrl;

    const session = await auth.api.getSession({
        headers: await headers()
    })
    // console.log(session)

    // const isLoggedIn = true;

    if (pathname === '/products') {
        return NextResponse.next();
    }

    if (!session) return NextResponse.redirect(new URL('/login', request.url))

    return NextResponse.next();
}

export const config = {
    matcher: ["/myprofile", "/products/:path*"],
}
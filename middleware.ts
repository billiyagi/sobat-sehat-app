import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { withAuth } from "next-auth/middleware"
import { cookies } from 'next/headers'
import { jwtDecode } from "jwt-decode";


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // const token: any = cookies().get('token');
    // console.log(jwtDecode(token.value))
    // return NextResponse.redirect(new URL('/', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/dashboard/:path*',
}
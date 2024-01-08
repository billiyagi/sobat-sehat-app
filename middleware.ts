import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { withAuth } from "next-auth/middleware"
import { cookies } from 'next/headers'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { Cipher } from 'crypto';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest, response: NextResponse) {
    const token: any = cookies().get('token');

    const allowedRoles = ['admin', 'kontributor'];


    if (token) {
        const user: any = jwtDecode(token.value);
        // Check if user not authenticated
        const tokenExpired = user.exp < Date.now() / 1000;


        // Check if user not admin or kontributor
        if (allowedRoles.includes(user.user.role)) {
            return NextResponse.next()
        } else {
            return NextResponse.redirect(new URL('/', request.url))
        }
    } else {
        return NextResponse.redirect(new URL('/', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/dashboard/:path*',
}
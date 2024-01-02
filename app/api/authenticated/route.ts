import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import axios from 'axios';

export async function GET(request: Request) {
    cookies().delete('token');
    const response: any = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + cookies().get('token')?.value
        }
    })

    if (response.status != 200) {
        console.log('redirectting');
        // return new Response(null, {
        //     status: 302,
        //     headers: {
        //         'Location': ,
        //         'Set-Cookie': `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
        //     }
        // })
        return redirect(`${process.env.APP_URL}`)
    }
}
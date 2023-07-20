import { NextResponse} from "next/server";

// @ts-ignore
export function middleware(req: any): NextResponse {
    let verifyCookie = req.cookies.get('accessToken');
    let url = req.nextUrl.pathname;

    if(!verifyCookie && url.includes('/dashboard')) {
        return NextResponse.redirect('/');
    }

    if(verifyCookie && url === '/') {
        return NextResponse.redirect('/dashboard');
    }
}

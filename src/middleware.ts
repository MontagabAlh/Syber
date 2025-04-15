import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.url;

    if (url.includes('data:image/png;base64,')) {
        return NextResponse.json({ error: 'منع عرض الصورة' }, { status: 403 });
    }


    return NextResponse.next();
}

export const config = {
    matcher: '/',
};

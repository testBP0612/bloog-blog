import { NextResponse, NextRequest } from 'next/server';

import { getRawArticleBySlug } from '@lib/blog';

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const postParam = searchParams.get('post');
		
		const article = getRawArticleBySlug(postParam ?? '');

		return NextResponse.json(article);
	} catch (error: any) {
		return NextResponse.json({ message: error.message });
	}
}
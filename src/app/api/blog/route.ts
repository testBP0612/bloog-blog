import { NextResponse, NextRequest } from 'next/server';

import { getAllSlugs, getArticleBySlug } from '@lib/blog';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const fieldsParam = searchParams.getAll('fields');
    const fields = Array.isArray(fieldsParam) ? fieldsParam : [fieldsParam];

    const articles = (
      await Promise.all(
        getAllSlugs().map(async (articleSlug) => {
          return getArticleBySlug(articleSlug, fields);
        })
      )
    ).sort((article1, article2) => (article1.date > article2.date ? -1 : 1));

    return NextResponse.json(articles);
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}

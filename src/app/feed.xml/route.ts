import RSS from 'rss';
import path from 'path';

import { getArtistList, getArticleBySlug } from '@lib/blog';
import { type Article } from 'types/blog';

const feed = new RSS({
  title: 'Bloop Blog | RSS Feed',
  description: '分享有關 Web 開發技術的見解。',
  feed_url: 'https://testbp.xyz/feed.xml',
  site_url: 'https://testbp.xyz',
  copyright: `${new Date().getFullYear()} Bloop Blog`,
  language: 'zh-TW',
  pubDate: new Date(),
});

async function processArticle(article: Article): Promise<RSS.ItemOptions> {
  const { data: frontMatter } = await getArticleBySlug(article.slug);

  return {
    title: frontMatter.title,
    description: frontMatter.description,
    url: `https://testbp.xyz/blog/${article.slug}`,
    date: new Date(frontMatter.date),
		author: 'Bloop',
		categories: frontMatter.tags,
  };
}

export async function GET() {
  const articles: Article[] = await getArtistList();

	const feedItems = await Promise.all(articles.map(processArticle));

	feedItems.forEach((item) => feed.item(item));

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}

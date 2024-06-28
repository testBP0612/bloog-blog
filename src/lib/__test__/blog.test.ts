import { getAllSlugs, getRawArticleBySlug } from '@lib/blog';

test('文章標題', () => {
  const slugs = getAllSlugs();
  expect(slugs).toEqual([
    'cursor-experience.mdx',
    'docker-learning.mdx',
    'nextjs-in-docker-with-nginx.mdx',
    'redux-toolKit-async-note.mdx',
    'typescript-api-codegen.mdx',
    'use-svgr-in-nextjs.mdx',
    'vercel-image-cache.mdx',
  ]);
});

test('文章原始資料', () => {
	const fileContents = getRawArticleBySlug('cursor-experience');
	const { data, content } = fileContents;
	console.log(content);
	expect(data.title).toBe('Cursor —— 一個為 AI 而生的編輯器使用心得');
})
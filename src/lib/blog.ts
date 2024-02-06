import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime, { type ReadTimeResults } from 'reading-time';

import { type BlogArticle, Article } from 'types/blog';

const articlesDirectory = path.join(process.cwd(), 'src/posts');

export const getAllSlugs = (): string[] => fs.readdirSync(articlesDirectory);

export const getRawArticleBySlug = (slug: string): matter.GrayMatterFile<string> => {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return matter(fileContents);
};

export const getArticleBySlug = async (slug: string, fields: string[] = []): Promise<BlogArticle> => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const { data, content } = getRawArticleBySlug(realSlug);
  const timeReading: ReadTimeResults = readingTime(content);
  const items: BlogArticle = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (field === 'timeReading') {
      items[field] = JSON.stringify(timeReading);
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return items;
};

export async function getArtistList(search: string = '') {
  const params = new URLSearchParams();
  ['coverImage', 'date', 'description', 'excerpt', 'slug', 'tags', 'title', 'timeReading', 'ogImage', 'thumbnailUrl'].forEach((key) =>
    params.append('fields', key)
  );
  const artists: Article[] = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog?${params.toString()}`).then(
    (res) => res.json()
  );

  const filteredArtists = artists.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.description + frontMatter.tags.join(' ');
    return searchContent.toLowerCase().includes(search.toLowerCase());
  });

  return search ? filteredArtists : artists;
}

export async function getArtistBySlug(post: string) {
  const artist: matter.GrayMatterFile<string> = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog/slug?post=${post}`
  ).then((res) => res.json());

  return artist;
}

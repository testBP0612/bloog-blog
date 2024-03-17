import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime, { type ReadTimeResults } from 'reading-time';

import { type BlogArticle } from 'types/blog';
import { BASE_API_URL } from '@constants/env';

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

  return items;
};

export async function getArtistList(search: string = '') {
  const params = new URLSearchParams();
  [
    'coverImage',
    'date',
    'description',
    'excerpt',
    'slug',
    'tags',
    'title',
    'timeReading',
    'ogImage',
    'thumbnailUrl',
  ].forEach((key) => params.append('fields', key));

  try {
    const response = await fetch(`${BASE_API_URL}/api/blog?${params.toString()}`, {
      cache: 'no-store',
    });
    const artists = await response.json();

    if (!Array.isArray(artists)) {
      throw new TypeError("Expected an array of artists, but did not receive one.");
    }

    const filteredArtists = artists.filter((frontMatter) => {
      const searchContent = frontMatter.title + frontMatter.description + frontMatter.tags.join(' ');
      return searchContent.toLowerCase().includes(search.toLowerCase());
    });

    return search ? filteredArtists : artists;
  } catch (error) {
    console.error('Error fetching artist list:', error);
    return [];  // 在錯誤情況下返回空陣列
  }
}

export async function getArtistBySlug(post: string) {
  try {
    const response = await fetch(`${BASE_API_URL}/api/blog/slug?post=${post}`);
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }
    const artist = await response.json();
    return artist;
  } catch (error) {
    console.error('Error fetching artist by slug:', error);
    return null;  // 在錯誤情況下返回null
  }
}

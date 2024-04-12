import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

function getAllMdxFilePaths(directory: string): string[] {
  const fileNames = fs.readdirSync(directory);
  const filePaths = fileNames.map((fileName) => {
    const filePath = path.join(directory, fileName);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      return getAllMdxFilePaths(filePath);
    } else {
      return filePath;
    }
  });

  return Array.prototype.concat(...filePaths);
}

const baseUrl = 'https://www.testbp.xyz';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogDirectory = path.join(process.cwd(), 'src/posts');

  const mdxFilePaths = getAllMdxFilePaths(blogDirectory);

  const postSitemap = mdxFilePaths.map((filePath) => {
    const slug = path.basename(filePath, '.mdx');
    const url = `${baseUrl}/blog/${slug}`;
    const lastModified = fs.statSync(filePath).mtime;
    return {
      url,
      lastModified,
    };
  });

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
		...postSitemap,
  ];
}

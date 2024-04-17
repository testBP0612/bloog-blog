import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

import { articlesDirectory, getAllArticleFilePaths } from '@lib/blog';

const baseUrl = 'https://www.testbp.xyz';

export default function sitemap(): MetadataRoute.Sitemap {
  const mdxFilePaths = getAllArticleFilePaths(articlesDirectory);

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

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.testbp.xyz",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.testbp.xyz/about",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.testbp.xyz/blog",
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}

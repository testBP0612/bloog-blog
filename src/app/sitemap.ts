import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/about`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.6,
		}
	]
}
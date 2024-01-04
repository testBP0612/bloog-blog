export type BlogArticle = {
  [key: string]: string | Array<string>;
}

export type Article = ArticleFrontMatter & {
  slug: string;
  coverImage: string;
  author: string;
  excerpt: string;
  timeReading: string;
  ogImage?: {
    url: string;
  };
  content?: string;
}

export type ArticleFrontMatter = {
  title: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  tags: string[];
};
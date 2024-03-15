import Link from 'next/link';
import Image from 'next/image';
import { type ReadTimeResults } from 'reading-time';

import Tag from '@components/Tag';

import { getArtistList } from '@lib/blog';

import { type Article } from 'types/blog';

interface ArticleItemProps {
  article: Article;
}

const ArticleItem = async ({ article }: ArticleItemProps) => {
  const timeReading: ReadTimeResults = JSON.parse(article.timeReading);

  return (
    <div className="space-y-2 xl:grid xl:grid-cols-6 xl:items-start xl:space-y-0">
      <Link className="flex flex-col space-y-2 xl:col-span-1 items-center" href={`/blog/${article.slug}`}>
        <Image src={article.thumbnailUrl} alt={article.title} width={200} height={200} className="rounded-lg" />
      </Link>
      <dl className="xl:col-span-1 flex flex-col items-center">
        <dt className="sr-only">Published on</dt>
        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime={article.date}>{article.date}</time>
        </dd>
        <dt className="sr-only">Reading time estimation</dt>
        <dl>
          <span className="text-xs">{timeReading.text}</span>
        </dl>
      </dl>
      <div className="space-y-3 xl:col-span-4">
        <div>
          <h3 className="text-2xl font-bold tracking-tight mb-1">
            <Link href={`/blog/${article.slug}`} className="text-gray-900 dark:text-gray-100">
              {article.title}
            </Link>
          </h3>
          <div className="flex flex-wrap">
            {article.tags.map((tag: string) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>
        <div className="prose max-w-none text-gray-500 dark:text-gray-400">{article.description}</div>
      </div>
    </div>
  );
};

interface ArticleListProps {
  search?: string;
}

const ArticleList = async ({ search }: ArticleListProps) => {
  const articles = await getArtistList(search);

  return (
    <ul className="divide-y-2 divide-gray-200 dark:divide-gray-700">
      {articles.map((article) => (
        <li key={article.slug} className="py-8">
          <ArticleItem article={article} />
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;

import Link from 'next/link';
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
    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime={article.date}>{article.date}</time>
        </dd>
        <dt className="sr-only">Reading time estimation</dt>
        <dl>
          <span className="text-xs">{timeReading.text}</span>
        </dl>
      </dl>
      <div className="space-y-3 xl:col-span-3">
        <div>
          <h3 className="text-2xl font-bold leading-10 tracking-tight}">
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

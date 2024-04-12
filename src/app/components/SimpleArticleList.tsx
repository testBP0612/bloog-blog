import Link from 'next/link';

import { getArtistList } from '@lib/blog';

const SimpleArticleList = async () => {
  const articles = await getArtistList();
  const firstFive = articles.slice(0, 5);

  return (
    <ul className="divide-y-2 divide-gray-200 dark:divide-gray-700">
      {firstFive.map((article) => (
        <li key={article.slug} className="py-8">
          <div className="md:space-y-2 space-y-1">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={article.date}>{article.date}</time>
              </dd>
            </div>
            <div>
              <h3 className="font-bold leading-8 tracking-tight text-lg md:text-xl">
                <Link href={`/blog/${article.slug}`} className="text-gray-900 dark:text-gray-100">
                  {article.title}
                </Link>
              </h3>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SimpleArticleList;

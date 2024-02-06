import Link from 'next/link';

import MainContainer from '@components/layout/MainContainer';
import SimpleArticleList from '@app/components/SimpleArticleList';

export default function Home() {
  return (
    <MainContainer>
      <section
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
        }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to My Portfolio
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                I&apos;m a Frontend Developer with a passion for building user-friendly and accessible web applications.
              </p>
            </div>
          </div>
        </div>
        <SimpleArticleList />
        {/* Read more */}
        <div className="flex justify-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center px-4 py-2 text-lg font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
          >
            Read more 
          </Link>
        </div>
      </section>
    </MainContainer>
  );
}

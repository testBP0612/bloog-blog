import Link from 'next/link';
import Image from 'next/image';

import MainContainer from '@components/layout/MainContainer';
import SimpleArticleList from '@app/components/SimpleArticleList';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-8 py-10 px-5 md:px-0">
        <div className="flex flex-col items-center space-y-4">
          <div className="space-y-2">
            <div className="w-52 sm:w-64 md:w-full md:max-w-sm xl:max-w-md mb-10 md:mb-20">
              <div className="text-3xl font-bold tracking-tighter text-left sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
                Hi, I&apos;m&nbsp;
                <span className="text-primary-600">Bojun</span>
              </div>
              <div className="text-3xl font-bold tracking-tighter text-right sm:text-4xl md:text-5xl lg:text-6xl/none mb-4 text-primary-600">
                Huang
                <span className="text-gray-700 dark:text-gray-100">.</span>
              </div>
            </div>
            <p className="mx-auto max-w-lg text-gray-500 md:text-xl dark:text-gray-400">
              A Frontend Developer with a passion for building user-friendly and accessible web applications.
            </p>
            <p className="mx-auto max-w-lg text-gray-500 md:text-xl dark:text-gray-400">
              Additionally, I have four years of experience as an instructor in web technologies, enhancing my expertise
              in creating user-friendly and accessible applications.
            </p>
          </div>
        </div>
        <Image src="/images/photo.svg" width={600} height={600} alt="photo" />
      </div>
      <MainContainer>
        <section className="w-full bg-cover bg-center">
          <SimpleArticleList />
          <div className="flex justify-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center px-4 py-2 text-lg font-medium text-white bg-primary-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700"
            >
              Read more
            </Link>
          </div>
        </section>
      </MainContainer>
    </>
  );
}

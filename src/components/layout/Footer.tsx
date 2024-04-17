import Link from 'next/link';

import Heading from '@components/UI/Heading';
import { GitHubIcon, LinkedInIcon, RSSIcon } from '@components/icon';
import { containerClassName } from '@components/layout/MainContainer';

export default function Footer() {
  return (
    <footer className={containerClassName}>
      <div className="grid grid-cols-2 gap-y-4 py-10 md:py-16 md:grid-cols-4 md:gap-0">
        <div className="col-span-2 text-sm text-gray-500 dark:text-gray-300 m-auto md:m-0">
          <Heading level="h5">Bojun Huang</Heading>
          <span>{`© ${new Date().getFullYear()}`}</span>
          &nbsp;
          <span>
            powered by <Link href="https://nextjs.org/">Next.js</Link>. All rights reserved.
          </span>
        </div>
        <div className="flex flex-col text-sm text-gray-500 dark:text-gray-300 items-center md:items-end">
          <div>
            <span className="block text-gray-500 dark:text-gray-300 opacity-60 mb-1.5">Pages</span>
            <Link className="block mb-1 hover:underline" href="/about">About</Link>
            <Link className="block mb-1 hover:underline" href="/blog">Blog</Link>
          </div>
        </div>
        <div className="flex flex-col text-sm text-gray-500 dark:text-gray-300 items-center md:items-end">
          <div>
            <span className="block text-gray-500 dark:text-gray-300 opacity-60 mb-1.5">Link</span>
            <Link className="relative flex items-center mb-1 hover:underline" target="_blank" href="https://www.linkedin.com/in/%E6%9F%8F%E9%88%9E-%E9%BB%83-731848154/">
              <LinkedInIcon className="absolute -left-5 w-4 h-4 fill-slate-500 dark:fill-slate-200" />
              <span>LinkedIn</span>
            </Link>
            <Link className="relative flex items-center mb-1 hover:underline" target="_blank" href="https://github.com/testBP0612">
              <GitHubIcon className="absolute -left-5 w-4 h-4 fill-slate-500 dark:fill-slate-200" />
              <span>GitHub</span>
            </Link>
            <Link className="relative flex items-center mb-1 hover:underline" target="_blank" href="/feed.xml">
              <RSSIcon className="absolute -left-5 w-4 h-4 fill-slate-500 dark:fill-slate-200" />
              <span>RSS</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

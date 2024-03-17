import Link from 'next/link';

import Heading from '@components/UI/Heading';
import { GitHubIcon, LinkedInIcon } from '@components/icon';
import { containerClassName } from '@components/layout/MainContainer';

export default function Footer() {
  return (
    <footer className={containerClassName}>
      <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-4 md:gap-0">
        <div className="col-span-2 flex flex-col text-sm text-gray-500 dark:text-gray-300 items-center md:items-start">
          <Heading level="h5">Bojun Huang</Heading>
          <span>{`© ${new Date().getFullYear()}`}</span>
          <span>
            powered by <Link href="https://nextjs.org/">Next.js</Link>. All rights reserved.
          </span>
        </div>
        <div className="flex flex-col text-sm gap-1 text-gray-500 dark:text-gray-300 items-center md:items-end">
          <span className="text-gray-500 dark:text-gray-300 opacity-60 mb-1">Pages</span>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="flex flex-col text-sm gap-1 text-gray-500 dark:text-gray-300 items-center md:items-end">
          <span className="text-gray-500 dark:text-gray-300 opacity-60 mb-1">Social</span>
          <Link className="flex items-center space-x-1" target="_blank" href="https://www.linkedin.com/in/%E6%9F%8F%E9%88%9E-%E9%BB%83-731848154/">
            <LinkedInIcon className="w-4 h-4 fill-slate-500 dark:fill-slate-200" />
            <span>LinkedIn</span>
          </Link>
          <Link className="flex items-center space-x-1" target="_blank" href="https://github.com/testBP0612">
            <GitHubIcon className="w-4 h-4 fill-slate-500 dark:fill-slate-200" />
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

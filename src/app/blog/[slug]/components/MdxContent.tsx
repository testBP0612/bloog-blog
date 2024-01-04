'use client'; // This is required!

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';

import "@styles/theme/prism-puls.css"
import "@styles/theme/prism-darcula.css"

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

const MdxComponents = {
  Card: (props: React.HTMLProps<HTMLDivElement>) => (
    <div className="border rounded-lg p-4 shadow-md my-4 dark:border-gray-700 dark:bg-gray-800" {...props} />
  ),
  Button: (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-primary-700 transition ease-in-out duration-150"
      {...props}
    />
  ),
};

export default function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={MdxComponents} />;
}

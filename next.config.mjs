import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import createMDX from '@next/mdx';

// MDX configuration
const mdxConfig = {
  extension: /\.mdx?$/,
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypeHighlight],
  providerImportSource: '@mdx-js/react',
};

const withMDX = createMDX({ options: mdxConfig });

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config;
  }
};

export default withMDX(nextConfig);

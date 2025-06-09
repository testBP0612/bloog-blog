import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeStringify from 'rehype-stringify';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import CopyButton from './CopyButton';

type MdxContentProps = {
  source: string;
};

const MdxComponents: Components = {
  code: ({ children, className, ...props }) => {
    const { node, ...validProps } = props;
    const match = /language-(\w+)/.exec(className || '');
    const codeText = String(children).replace(/\n$/, '');

    // 如果有語言標識符，使用 SyntaxHighlighter
    if (match) {
      return (
        <div className="code-block-container">
          <SyntaxHighlighter 
            style={dracula} 
            language={match[1]}
            PreTag="div"
            customStyle={{
              margin: 0,
              padding: '1rem',
              fontSize: '0.875rem',
              overflow: 'auto',
            }}
            codeTagProps={{
              style: {
                fontSize: '0.875rem',
                lineHeight: '1.5',
              }
            }}
          >
            {codeText}
          </SyntaxHighlighter>
          <CopyButton text={codeText} />
        </div>
      );
    }

    // 行內程式碼
    return (
      <code 
        className={`${className} px-1 py-0.5 text-sm bg-gray-100 dark:bg-gray-800 rounded text-gray-800 dark:text-gray-200 font-mono`} 
        {...validProps}
      >
        {children}
      </code>
    );
  },

  // 表格相關組件
  table: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <div className="overflow-x-auto my-3 sm:my-4 lg:my-5">
        <table 
          className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm sm:text-base" 
          {...validProps}
        >
          {children}
        </table>
      </div>
    );
  },

  thead: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <thead className="bg-gray-50 dark:bg-gray-800" {...validProps}>
        {children}
      </thead>
    );
  },

  tbody: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return <tbody {...validProps}>{children}</tbody>;
  },

  tr: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors" {...validProps}>
        {children}
      </tr>
    );
  },

  th: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <th 
        className="px-2 py-2 sm:px-4 sm:py-3 text-left font-semibold border border-gray-300 dark:border-gray-600 text-xs sm:text-sm lg:text-base" 
        {...validProps}
      >
        {children}
      </th>
    );
  },

  td: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <td 
        className="px-2 py-2 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 text-xs sm:text-sm lg:text-base" 
        {...validProps}
      >
        {children}
      </td>
    );
  },

  // 連結樣式
  a: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <a
        className="text-secondary-600 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300 transition-colors duration-200 underline decoration-2 underline-offset-2 hover:decoration-4 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 rounded-sm"
        target="_blank"
        {...validProps}
      >
        {children}&#x2398;
      </a>
    );
  },

  // 按鈕
  button: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <button
        type="button"
        className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md sm:rounded-lg text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:bg-primary-700 transition-all duration-150 shadow-sm hover:shadow-md"
        {...validProps}
      >
        {children}
      </button>
    );
  },

  // 引用塊
  blockquote: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <blockquote
        className="border-l-2 sm:border-l-4 border-secondary-500 pl-3 sm:pl-4 md:pl-6 italic my-1 sm:my-2 lg:my-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg bg-gray-50/50 dark:bg-gray-800/30 py-1 sm:py-2 rounded-r-lg"
        {...validProps}
      >
        {children}
      </blockquote>
    );
  },

  // 分隔線
  hr: ({ ...props }) => {
    const { node, ...validProps } = props;
    return (
      <hr 
        className="my-4 sm:my-5 lg:my-6 border-t border-gray-300 dark:border-gray-600 border-t-2" 
        {...validProps} 
      />
    );
  },

  // 圖片
  img: ({ ...props }) => {
    const { node, ...validProps } = props;
    return (
      <img 
        className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 my-3 sm:my-4 lg:my-5 max-w-full h-auto mx-auto block"
        {...validProps} 
      />
    );
  },

  // 標題
  h1: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <h1 
        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-5 mt-6 sm:mt-7 lg:mt-8 text-gray-900 dark:text-gray-100 leading-tight"
        {...validProps}
      >
        {children}
      </h1>
    );
  },

  h2: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <h2 
        className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2 sm:mb-3 lg:mb-4 mt-5 sm:mt-6 lg:mt-7 text-gray-900 dark:text-gray-100 leading-tight"
        {...validProps}
      >
        {children}
      </h2>
    );
  },

  h3: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <h3 
        className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2 sm:mb-3 lg:mb-3 mt-4 sm:mt-5 lg:mt-6 text-gray-900 dark:text-gray-100 leading-snug"
        {...validProps}
      >
        {children}
      </h3>
    );
  },

  h4: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <h4 
        className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium mb-2 mt-3 sm:mt-4 lg:mt-5 text-gray-900 dark:text-gray-100"
        {...validProps}
      >
        {children}
      </h4>
    );
  },

  h5: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <h5 
        className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium mb-2 mt-3 sm:mt-3 text-gray-900 dark:text-gray-100"
        {...validProps}
      >
        {children}
      </h5>
    );
  },

  h6: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <h6 
        className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium mb-2 mt-3 text-gray-900 dark:text-gray-100"
        {...validProps}
      >
        {children}
      </h6>
    );
  },

  // 段落
  p: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <p 
        className="my-1 sm:my-2 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose text-gray-700 dark:text-gray-300"
        {...validProps}
      >
        {children}
      </p>
    );
  },

  // 列表樣式
  ul: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <ul 
        className="list-disc list-inside my-3 sm:my-4 space-y-1 sm:space-y-2 text-sm sm:text-base lg:text-lg pl-2 sm:pl-4"
        {...validProps}
      >
        {children}
      </ul>
    );
  },

  ol: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <ol 
        className="list-decimal list-inside my-3 sm:my-4 space-y-1 sm:space-y-2 text-sm sm:text-base lg:text-lg pl-2 sm:pl-4"
        {...validProps}
      >
        {children}
      </ol>
    );
  },

  li: ({ children, ...props }) => {
    const { node, ...validProps } = props;
    return (
      <li 
        className="leading-relaxed sm:leading-loose text-gray-700 dark:text-gray-300 mb-1 sm:mb-2"
        {...validProps}
      >
        {children}
      </li>
    );
  },
};

export default function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl dark:prose-invert max-w-none px-4 sm:px-6 lg:px-8 mb-3 sm:mb-5">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeStringify]}
        components={MdxComponents}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
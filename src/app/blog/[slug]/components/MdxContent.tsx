import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

import CopyButton from './CopyButton';

import 'highlight.js/styles/vs2015.css';

type MdxContentProps = {
  source: string;
};

// 提取程式碼文字的工具函數
function extractCodeText(children: any): string {
  if (typeof children === 'string') {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(extractCodeText).join('');
  }
  if (children?.props?.children) {
    return extractCodeText(children.props.children);
  }
  return '';
}

const MdxComponents = {
  // 自定義 pre 組件，添加複製按鈕
  pre: ({ children, ...props }: React.HTMLProps<HTMLPreElement>) => {
    const codeText = extractCodeText(children);

    return (
      <div className="code-block-container">
        <pre {...props} className="!bg-transparent">
          {children}
        </pre>
        <CopyButton text={codeText} />
      </div>
    );
  },

  // 表格相關組件
  table: (props: React.HTMLProps<HTMLTableElement>) => (
    <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600" {...props} />
  ),
  thead: (props: React.HTMLProps<HTMLTableSectionElement>) => (
    <thead className="bg-gray-50 dark:bg-gray-800" {...props} />
  ),
  tbody: (props: React.HTMLProps<HTMLTableSectionElement>) => <tbody {...props} />,
  tr: (props: React.HTMLProps<HTMLTableRowElement>) => (
    <tr className="border-b border-gray-200 dark:border-gray-700" {...props} />
  ),
  th: (props: React.HTMLProps<HTMLTableCellElement>) => (
    <th className="!px-4 !py-2 text-left font-semibold border border-gray-300 dark:border-gray-600" {...props} />
  ),
  td: (props: React.HTMLProps<HTMLTableCellElement>) => (
    <td className="!px-4 !py-2 border border-gray-300 dark:border-gray-600" {...props} />
  ),

  //  連結樣式
  a: ({ children, ...props }: React.HTMLProps<HTMLAnchorElement>) => (
    <a
      className="text-secondary-600 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300 transition"
      target="_blank"
      {...props}
    >
      {children}&#x2398;
    </a>
  ),

  // 自定義組件
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

  // 引用塊樣式
  blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-secondary-500 pl-4 italic my-4 text-gray-600 dark:text-gray-300"
      {...props}
    />
  ),

  // 分隔線樣式
  hr: (props: React.HTMLProps<HTMLHRElement>) => (
    <hr className="my-8 border-t border-gray-300 dark:border-gray-600" {...props} />
  ),

  // 圖片樣式
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="rounded-lg shadow-md my-4 max-w-full h-auto" {...props} />
  ),

  // 列表樣式
  ul: (props: React.HTMLProps<HTMLUListElement>) => <ul className="list-disc list-inside my-4 space-y-2" {...props} />,
  ol: (props: React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>) => (
    <ol className="list-decimal list-inside my-4 space-y-2" {...props} />
  ),
  li: (props: React.HTMLProps<HTMLLIElement>) => <li className="leading-relaxed" {...props} />,
};

export default function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight, rehypeStringify]} components={MdxComponents}>
        {source}
      </ReactMarkdown>
    </div>
  );
}

interface SkeletonProps {
  count: number;
}

export default function Skeleton({ count }: SkeletonProps) {
  return [...Array(count)].map((_, index) => (
    <div
      role="status"
      className="w-full my-2 py-7 space-y-4 divide-y-2 divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 dark:border-gray-700"
      key={`skeleton-${index}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="w-24 h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 mb-4"></div>
          <div className="w-40 h-4 bg-gray-300 rounded-full dark:bg-gray-600 mb-3.5"></div>
          <div className="w-12 h-2.5 bg-gray-300 rounded-full dark:bg-gray-500 mb-5"></div>
          <div className="w-72 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  ));
}

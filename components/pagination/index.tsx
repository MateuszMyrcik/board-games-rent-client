interface IPaginationProps {
  pageNumb: number;
  pages: number;
}

export const Pagination: React.FC<IPaginationProps> = ({ pageNumb, pages }) => {
  const items = [...Array(pages).keys()].map((i) => i + 1);

  return (
    <ol className="flex justify-center space-x-1 text-xs font-medium">
      <li>
        <a
          href={`/products/${pageNumb - 1}`}
          className={`inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded ${
            pageNumb === 1
              ? "pointer-events-none cursor-not-allowed bg-gray-400"
              : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
      {items.map((item, index) => (
        <li key={item}>
          <a
            href={`/products/${item}`}
            className={
              item === pageNumb
                ? "block w-8 h-8 leading-8 text-center text-white bg-blue-600 border-blue-600 rounded"
                : "block w-8 h-8 leading-8 text-center border border-gray-100 rounded"
            }
          >
            {item}
          </a>
        </li>
      ))}

      <li>
        <a
          href={`/products/${pageNumb + 1}`}
          className={`inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded ${
            pageNumb === pages
              ? "pointer-events-none cursor-not-allowed bg-gray-400"
              : ""
          } `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ol>
  );
};

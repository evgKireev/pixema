type SearchListType = {
  className: string;
};

const SearchList: React.FC<SearchListType> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 6L19 6M10 12H19M14 18H19"
        stroke="#AFB2B6"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SearchList;

"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface Props {
  currentPage: number;
  onPageChange: (i: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, onPageChange }) => {
  const { totalPages } = useSelector((state: RootState) => state.user);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    if (
      i <= 3 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pageNumbers.push(i);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      pageNumbers.push("...");
    }
  }

  return (
    <div>
      {pageNumbers.map((number, index) => (
        <button
          key={index}
          onClick={() => onPageChange(number as number)}
          disabled={number === "..." || (number as number) === currentPage}
          className={`${
            number === currentPage ? "bg-blue-500 " : ""
          } m-2 md:mx-4 py-1 px-3 bg-blue-300 rounded-sm outline-none `}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

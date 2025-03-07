"use client";

import left from "@/public/icons/arrowLeft.svg";
import right from "@/public/icons/arrowRight.svg";
import usePagination from "./usePagination";
import Link from "next/link";
import Image from "next/image";

export interface PagingProps {
  totalBoards: number;
  currentPage: number;
  pageSize: number;
}

export default function Pagination({
  totalBoards,
  currentPage,
  pageSize,
}: PagingProps) {
  const { startPage, endPage, totalPages, createPageParams } = usePagination({
    totalBoards,
    currentPage,
    pageSize,
  });

  return (
    <div className="w-full flex justify-center items-center gap-1">
      <Link
        className="w-10 h-10 flex justify-center items-center rounded-[40px]border-b border-gray200 bg-white cursor-pointer"
        href={currentPage > 1 ? createPageParams(currentPage - 1) : "#"}
        shallow
        scroll={false}
      >
        <Image
          className={`${currentPage === 1 ? 'opacity-20' : 'opacity-100'}`}
          src={left}
          width={16}
          height={16}
          alt="prev"
        />
      </Link>
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      ).map((page) => (
        <Link
          className={`w-10 h-10 flex justify-center items-center text-Bold16 rounded-[40px] border-b border-gray200 cursor-pointer
          ${currentPage === page ? 'text-gray50 bg-blue' : 'text-gray500 bg-white'}`}        
          key={page}
          href={currentPage !== page ? createPageParams(page) : "#"}
          shallow
          scroll={false}
        >
          {page}
        </Link>
      ))}
      <Link
        className="w-10 h-10 flex justify-center items-center rounded-[40px]border-b border-gray200 bg-white cursor-pointer"
        href={
          currentPage < totalPages ? createPageParams(currentPage + 1) : "#"
        }
        shallow
        scroll={false}
      >
        <Image
          className={`${currentPage === totalBoards ? 'opacity-20' : 'opacity-100'}`}
          src={right}
          width={16}
          height={16}
          alt="next"
        />
      </Link>
    </div>
  );
}

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
// import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { IoFileTrayFullOutline } from "react-icons/io5";
import PerfectScrollbar from "react-perfect-scrollbar";
const TanstackTable = ({
  data,
  columns,
  filter,
  setFilter,
  pageSize,
  noPagination,
}) => {
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFilter,
    initialState: {
      pagination: {
        pageSize: pageSize || 10,
      },
    },
  });

  return (
    <>
      <div className="tasnstack__table overflow-x-auto">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-b border-gray-200/70 bg-[#F6F7FB]"
              >
                {headerGroup.headers.map((header) => (
                  <th
                    onClick={header.column.getToggleSortingHandler()}
                    className="font-Semibold capitalize cursor-pointer px-3 py-2 text-left text-xs text-[#1d1d1d] md:px-5 md:py-3 md:text-sm"
                    key={header.id}
                  >
                    <div className="inline-flex items-center gap-1">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {
                        { asc: <IoChevronUp />, desc: <IoChevronDown /> }[
                          header.column.getIsSorted() ?? null
                        ]
                      }
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                className="border-b border-gray-200/70 even:bg-[#F6F7FB]/50"
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    className="px-3 py-2 text-xs max-w-[200px] text-start  overflow-hidden text-ellipsis font-medium text-[#3c3c3c] md:px-5 md:py-3 md:text-sm"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {data.length === 0 && (
          <div className="py-10 text-center w-full  flex justify-center items-center flex-col">
            <IoFileTrayFullOutline
              size={30}
              className="mt-2 font-medium text-gray-500"
            />
            <p className="mt-2 font-medium text-gray-500">No data found</p>
          </div>
        )}
      </div>
      {!noPagination && (
        <PerfectScrollbar className="overflow-x-auto overflow-y-hidden ">
          <div className="flex justify-between px-3 py-2 md:px-5 md:py-3 ">
            <div className=" gap-1 flex justify-center items-center flex-1 ">
              {new Array(table.getPageCount()).fill().map((_, i) => (
                <button
                  onClick={() => table.setPageIndex(i)}
                  key={i}
                  className={`w-8 h-8 p-0 flex justify-center items-center cursor-pointer rounded-md text-sm font-medium ${
                    table.getState().pagination.pageIndex === i
                      ? "bg-matte/10 "
                      : "hover:bg-matte/5 text-matte/50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </PerfectScrollbar>
      )}
    </>
  );
};

export default TanstackTable;

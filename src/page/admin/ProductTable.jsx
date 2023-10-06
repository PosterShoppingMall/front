import React, { useMemo, useState } from "react";
import { usePagination, useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import styled from "styled-components";

export const ProductTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    pageCount,
    gotoPage,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 5 } },
    usePagination
  );

  // 페이지네이션 버튼 범위 관리 상태
  const [pageRangeStartIndex, setPageRangeStartIndex] = useState(0);

  // 다음 or 이전 페이지 그룹(5페이지씩)으로 이동하는 함수
  function movePageGroup(dir) {
    if (dir === "prev" && pageRangeStartIndex >= 5) {
      setPageRangeStartIndex(pageRangeStartIndex - 5);
    } else if (dir === "next" && pageRangeStartIndex < pageCount - 5) {
      setPageRangeStartIndex(pageRangeStartIndex + 5);
    }
  }

  return (
    <ProductTableStyle>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 페이지네이션 */}
      <div className="pagination">
        {/* 이전 페이지 그룹 버튼 */}
        <button
          onClick={() => movePageGroup("prev")}
          disabled={pageRangeStartIndex === 0}
        >
          {"<"}
        </button>

        {/* 페이징 숫자 목록, 최대 5개의 페이지 번호 생성, 마지막 페이지 그룹에서는 남은 페이지 수만큼만 버튼 생성 */}
        {[...Array(Math.min(5, pageCount - pageRangeStartIndex))].map(
          (x, i) => (
            <button key={i} onClick={() => gotoPage(pageRangeStartIndex + i)}>
              {pageRangeStartIndex + i + 1}
            </button>
          )
        )}

        {/* 다음 페이지 그룹 버튼 */}
        <button
          onClick={() => movePageGroup("next")}
          disabled={pageRangeStartIndex >= pageCount - 5}
        >
          {">"}
        </button>
      </div>
    </ProductTableStyle>
  );
};

const ProductTableStyle = styled.div`
  padding-top: 100px;
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  tr:hover {
    background-color: rgba(51, 51, 51, 0.5);
  }
  th {
    background-color: #04aa6d;
    color: white;
    text-align: center;
  }
`;

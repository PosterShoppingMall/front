import React, { useEffect, useMemo, useState } from "react";
import { usePagination, useTable } from "react-table";
import styled from "styled-components";
import { COLUMNS } from "./columns";

export const ProductTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Axios를 사용하여 데이터를 가져옵니다.
    axios
      .get("https://shoppingmall-9c992-default-rtdb.firebaseio.com/items.json")
      .then((response) => {
        // API에서 받아온 데이터를 객체에서 배열로 변환
        const data = response.data;

        const testData = Object.values(data);

        // 변환한 데이터를 상태(state)에 저장
        setItems(testData[0]);
        console.log("매핑된 데이터", testData);
      })
      .catch((error) => {
        console.error("데이터를 가져오는데 실패했습니다.", error);
      });
  }, []);

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

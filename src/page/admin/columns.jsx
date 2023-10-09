export const COLUMNS = [
  {
    Header: "id",
    accessor: "id",
  },
  {
    Header: "카테고리",
    accessor: "category",
  },
  {
    Header: "이미지",
    accessor: "imgFile1",
    Cell: ({ value }) => (
      <img src={value} alt="preview" width="50" height="50" />
    ),
  },
  {
    Header: "상품명",
    accessor: "productName",
  },
  {
    Header: "사이즈",
    accessor: "productSize",
  },
  {
    Header: "가격",
    accessor: "productPrice",
  },
  {
    Header: "재고량",
    accessor: "stockAmount",
  },
  {
    Header: "판매량",
    accessor: "sellAmount",
  },
  {
    Header: "판매상태",
    accessor: "saleStatus",
  },
  {
    Header: "상품등록일자",
    accessor: "createdAt",
  },
  {
    Header: "상품수정일자",
    accessor: "updatedAt",
  },
  {
    Header: "수정",
    accessor: "수정",
  },
];

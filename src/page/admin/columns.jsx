export const COLUMNS = [
  {
    Header: "번호",
    accessor: "id",
  },
  {
    Header: "카테고리",
    accessor: "category",
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
    accessor: "stockDTO.stockAmount",
  },
  {
    Header: "판매량",
    accessor: "stockDTO.sellAmount",
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
];

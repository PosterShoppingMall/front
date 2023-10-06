export const COLUMNS = [
  {
    Header: "",
    accessor: "product_id",
  },
  {
    Header: "카테고리",
    accessor: "category_name",
  },
  {
    Header: "이미지",
    accessor: "image1",
    Cell: ({ value }) => (
      <img src={value} alt="preview" width="50" height="50" />
    ),
  },
  {
    Header: "상품명",
    accessor: "product_name",
  },
  {
    Header: "사이즈",
    accessor: "product_size",
  },
  {
    Header: "가격",
    accessor: "product_price",
  },
  {
    Header: "재고량",
    accessor: "stock_amount",
  },
  {
    Header: "판매량",
    accessor: "sales_volume",
  },
  {
    Header: "상세설명",
    accessor: "product_contents",
  },
  {
    Header: "수정",
    accessor: "수정",
  },
];

import { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import H3Title from "../listStyledComponent/H3Title";
import AdminSidebar from "../../component/adminLayout/AdminSidebar";

function ProductModification({ history }) {
  // url에서 상품 id 가져옴
  const { id } = useParams();

  // 상품 데이터, 에러, 로딩 상태를 저장하는 state
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // 상품 정보를 로딩하는 비동기 함수
  const loadProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://52.78.184.121:8080/369/product/" + id
      );
      setProduct(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // 상품 수정
  const handleSubmit = async (formData) => {
    try {
      setLoading(true);
      await axios.put("http://52.78.184.121:8080/369/product/" + id, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return <Navigate to="/ProductManagement" replace />;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProduct();
  }, [id]);

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error loading product: {error.message}</div>}
      {product && (
        <ListWrap>
          <AdminSidebar />
          <div>
            <H3Title data-aos="fade-up">상품수정</H3Title>
            <ProductForm
              initialValues={product}
              initialPreview={product.preview} // 이미지 미리보기
              onSubmit={handleSubmit}
            />
          </div>
        </ListWrap>
      )}
    </>
  );
}

export default ProductModification;

const ListWrap = styled.div`
  display: flex;
  padding: 200px 0 0 0;
  width: 1600px;
  margin: 0 auto;
`;

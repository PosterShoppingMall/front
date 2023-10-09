import { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import { Navigate, useParams } from "react-router-dom";

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
      const response = await axios.get("http://localhost:3001/product/" + id);
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
      await axios.put("http://localhost:3001/product/" + id, formData, {
        headers: { "Content-Type": "application/json" },
        // headers: { "Content-Type": "multipart/form-data" },
      });
      history.push(Navigate("/ProductManagement"));
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
        <ProductForm
          initialValues={product}
          initialPreview={product.preview} // 이미지 미리보기
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default ProductModification;

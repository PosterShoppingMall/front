// import { useState, useEffect } from "react";
// import axios from "axios";
// import ProductForm from "./ProductForm";

// function ProductEdit({ match, history }) {
//   const { id } = match.params;

//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const loadProduct = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         "https://api.yourwebsite.com/products/" + id
//       );
//       setProduct(response.data);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (formData) => {
//     // Submit API request to update existing product
//     try {
//       setLoading(true);
//       const response = await axios.put(
//         "https://api.yourwebsite.com/products/" + id,
//         formData
//       );
//       history.push("/products/" + id);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadProduct();
//   }, [id]);

//   return (
//     <>
//       {loading && <div>Loading...</div>}
//       {error && <div>Error loading product: {error.message}</div>}
//       {product && (
//         <ProductForm initialValues={product} onSubmit={handleSubmit} />
//       )}
//     </>
//   );
// }

// export default ProductEdit;

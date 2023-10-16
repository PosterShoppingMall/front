import { useState } from "react";
import FileInput from "./FileInput";
import styled from "styled-components";
import Input from "../../component/common/input";
import Select from "../../component/common/Select";

const ProductFormStyle = styled.form`
  padding: 110px 0 10px 0;
`;

const DetailTextArea = styled.div`
  label {
    font-family: "NanumSquare";
    font-weight: 700;
    font-size: 18px;
    padding: 7px 10px 0 0;
  }
`;

// 입력 필드의 값에 따라 값을 변환해줌
// function sanitize(type, value) {
//   switch (type) {
//     case "number":
//       return Number(value) || 0; // 문자열을 숫자로 변환하거나, 변환이 실패하면 0을 반환

//     default:
//       return value; // 그 외 타입은 원래 값을 그대로 반환
//   }
// }

const INITIAL_VALUES = {
  category: "",
  name: "",
  price: "",
  imgFile1: null,
  imgFile2: null,
  imgFile3: null,
  imgFile4: null,
  imgFile5: null,
  quantity: "",
  salesStatus: "",
  content: "",
};

function ProductForm({
  initialValues = INITIAL_VALUES,
  initialPreview,
  onSubmit,
  onSubmitSuccess,
  onCancel,
}) {
  // 폼 제출 중 여부
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 폼 제출 중 발생한 에러
  const [submittingError, setSubmittingError] = useState(null);

  const [values, setValues] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 폼 데이터 객체 생성, append(필드이름, 필드값)
    const formData = new FormData();
    formData.append("category", values.category);
    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append("imgFile1", values.imgFile1);
    formData.append("imgFile2", values.imgFile2);
    formData.append("imgFile3", values.imgFile3);
    formData.append("imgFile4", values.imgFile4);
    formData.append("imgFile5", values.imgFile5);
    formData.append("quantity", values.quantity);
    formData.append("salesStatus", values.salesStatus);
    formData.append("content", values.content);

    let result;

    try {
      // 에러 처리
      setSubmittingError(null);
      setIsSubmitting(true);
      result = await onSubmit(formData);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }

    const { item } = result;

    // 폼 값을 초기값으로 설정
    setValues(initialValues);

    onSubmitSuccess(item);
  };

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // 이벤트 처리하여 상태 업뎃
  const handleInputChange = (e) => {
    //     const { name, value, type } = e.target;
    //     handleChange(name, sanitize(type, value));
    const { name, value } = e.target;
    handleChange(name, value);
  };

  return (
    <ProductFormStyle onSubmit={handleSubmit}>
      <div>
        <Select
          title="카테고리"
          name="category"
          value={values.category}
          onChange={handleInputChange}
        >
          <option value="">선택</option>
          <option value="일러스트">일러스트</option>
          <option value="명화">명화</option>
          <option value="포토그래피">포토그래피</option>
          <option value="타이포그래피">타이포그래피</option>
        </Select>
      </div>

      <div>
        <Input
          title="상품명"
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <Input
          title="가격"
          type="number"
          name="price"
          value={values.price}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>이미지1</label>
        <FileInput
          name="imgFile1"
          initialPreview={initialPreview}
          value={values.imgFile1 || []}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>이미지2</label>
        <FileInput
          name="imgFile2"
          initialPreview={initialPreview}
          value={values.imgFile2 || []}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>이미지3</label>
        <FileInput
          name="imgFile3"
          initialPreview={initialPreview}
          value={values.imgFile3 || []}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>이미지4</label>
        <FileInput
          name="imgFile4"
          initialPreview={initialPreview}
          value={values.imgFile4 || []}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>이미지5</label>
        <FileInput
          name="imgFile5"
          initialPreview={initialPreview}
          value={values.imgFile5 || []}
          onChange={handleChange}
        />
      </div>

      <div>
        <Input
          title="재고량"
          type="number"
          name="quantity"
          value={values.quantity}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <Select
          title="판매상태"
          name="salesStatus"
          value={values.salesStatus}
          onChange={handleInputChange}
        >
          <option value="">선택</option>
          <option value="판매중">판매중</option>
          <option value="판매완료">판매완료</option>
        </Select>
      </div>

      <div>
        <DetailTextArea>
          <label>상세설명</label>
          <textarea name="content" rows={4} cols={40} />
        </DetailTextArea>
      </div>

      {onCancel && (
        <button type="button" onClick={onCancel}>
          취소
        </button>
      )}
      <button type="submit" disabled={isSubmitting}>
        확인
      </button>

      {submittingError && <p>{submittingError.message}</p>}
    </ProductFormStyle>
  );
}

export default ProductForm;

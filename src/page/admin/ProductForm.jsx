import { useState } from "react";
import FileInput from "./FileInput";
import styled from "styled-components";
import Input from "../../component/common/input";
import Select from "../../component/common/Select";
import axios from "axios";

const ProductFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: flex-start;
  justify-content: center;
  width: 600px;
  margin: auto;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  button {
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    font-size: 18px;
    margin-top: 30px;
  }

  button.submitBtn {
    background: #333;
    color: #fff;
    margin-right: 10px;
  }
`;

const FormListBox = styled.div`
  width: 100%;
  padding-bottom: 10px;
  div.title {
    width: 15%;
  }

  input[type="file"] {
    width: 80%;
  }
`;

const FormFileListBox = styled.div`
  width: 100%;
  padding-bottom: 10px;
  display: flex;
  justify-content: flex-start;

  div.title {
    width: 15%;
    font-size: 18px;
  }

  input[type="file"] {
    padding: 0 0 0 8px;
  }
`;

const DetailTextArea = styled.div`
  padding: 20px 0 0 0;

  label {
    font-family: "NanumSquare";
    font-weight: 700;
    font-size: 18px;
    padding: 7px 10px 0 0;
    display: inline-block;
    width: 15%;
  }

  textarea {
    width: 80%;
    vertical-align: middle;
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
  productName: "",
  productSize: "",
  productPrice: "",
  imgFile1: null,
  imgFile2: null,
  imgFile3: null,
  imgFile4: null,
  imgFile5: null,
  stockAmount: "",
  saleStatus: "",
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

    // // 유효성 검사
    // const requiredFields = [
    //   "category",
    //   "productName",
    //   "productSize",
    //   "productPrice",
    //   "stockAmount",
    //   "saleStatus",
    // ];
    // for (const field of requiredFields) {
    //   if (!values[field]) {
    //     alert(`${field} 값을 채워주세요.`);
    //     return;
    //   }
    // }
    // 폼 데이터 객체 생성, append(필드이름, 필드값)
    const formData = new FormData();
    formData.append("category", values.category);
    formData.append("productName", values.productName);
    formData.append("productSize", values.productSize);
    formData.append("productPrice", values.productPrice);
    formData.append("imgFile1", values.imgFile1);
    formData.append("imgFile2", values.imgFile2);
    formData.append("imgFile3", values.imgFile3);
    formData.append("imgFile4", values.imgFile4);
    formData.append("imgFile5", values.imgFile5);
    formData.append("stockAmount", values.stockAmount);
    formData.append("saleStatus", values.saleStatus);
    formData.append("content", values.content);

    let result;

    try {
      // 엑시오스
      const jsonData = JSON.stringify(values);

      await axios.post("http://localhost:3001/product", jsonData, {
        headers: { "Content-Type": "application/json" },
      });

      alert("Data submitted successfully");
      setValues(INITIAL_VALUES);
      // 에러 처리
      setSubmittingError(null);
      setIsSubmitting(true);
      // result = await onSubmit(formData);
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
    <form onSubmit={handleSubmit}>
      <ProductFormStyle>
        <FormListBox>
          <Select
            title="카테고리"
            name="category"
            value={values.category}
            multiple="multiple"
            onChange={handleInputChange}
          >
            <option value="">선택</option>
            <option value="일러스트">일러스트</option>
            <option value="명화">명화</option>
            <option value="포토그래피">포토그래피</option>
            <option value="타이포그래피">타이포그래피</option>
          </Select>
        </FormListBox>

        <FormListBox>
          <Input
            title="상품명"
            name="productName"
            multiple="multiple"
            value={values.productName}
            onChange={handleInputChange}
          />
        </FormListBox>

        <FormListBox>
          <Input
            title="사이즈"
            name="productSize"
            multiple="multiple"
            value={values.productSize}
            onChange={handleInputChange}
          />
        </FormListBox>

        <FormListBox>
          <Input
            title="가격"
            type="number"
            name="productPrice"
            multiple="multiple"
            value={values.productPrice}
            onChange={handleInputChange}
          />
        </FormListBox>

        <FormFileListBox>
          <div className="title">이미지1</div>
          <FileInput
            name="imgFile1"
            multiple="multiple"
            initialPreview={initialPreview}
            value={values.imgFile1 || []}
            onChange={handleChange}
          />
        </FormFileListBox>

        <FormFileListBox>
          <div className="title">이미지2</div>
          <FileInput
            name="imgFile2"
            multiple="multiple"
            initialPreview={initialPreview}
            value={values.imgFile2 || []}
            onChange={handleChange}
          />
        </FormFileListBox>

        <FormFileListBox>
          <div className="title">이미지3</div>
          <FileInput
            name="imgFile3"
            multiple="multiple"
            initialPreview={initialPreview}
            value={values.imgFile3 || []}
            onChange={handleChange}
          />
        </FormFileListBox>

        <FormFileListBox>
          <div className="title">이미지4</div>
          <FileInput
            name="imgFile4"
            multiple="multiple"
            initialPreview={initialPreview}
            value={values.imgFile4 || []}
            onChange={handleChange}
          />
        </FormFileListBox>

        <FormFileListBox>
          <div className="title">이미지5</div>
          <FileInput
            name="imgFile5"
            multiple="multiple"
            initialPreview={initialPreview}
            value={values.imgFile5 || []}
            onChange={handleChange}
          />
        </FormFileListBox>

        <FormListBox>
          <Input
            title="재고량"
            type="number"
            name="stockAmount"
            value={values.stockAmount}
            onChange={handleInputChange}
          />
        </FormListBox>

        <FormListBox>
          <Select
            title="판매상태"
            name="saleStatus"
            multiple="multiple"
            value={values.saleStatus}
            onChange={handleInputChange}
          >
            <option value="">선택</option>
            <option value="판매중">판매중</option>
            <option value="판매완료">판매완료</option>
          </Select>
        </FormListBox>

        <FormListBox>
          <DetailTextArea>
            <label>상세설명</label>
            <textarea
              name="content"
              rows={4}
              cols={40}
              multiple="multiple"
              value={values.content}
              onChange={handleInputChange}
            />
          </DetailTextArea>
        </FormListBox>

        <BtnWrap>
          {onCancel && (
            <button className="cancelBtn" type="button" onClick={onCancel}>
              취소
            </button>
          )}
          <button className="submitBtn" type="submit" disabled={isSubmitting}>
            확인
          </button>
          {submittingError && <p>{submittingError.message}</p>}
        </BtnWrap>
      </ProductFormStyle>
    </form>
  );
}

export default ProductForm;

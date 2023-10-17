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
    border: ${({ error }) => (error ? "1px solid red" : "1px solid #ced4da")};
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
  file: null,
  // imgFile2: null,
  // imgFile3: null,
  // imgFile4: null,
  // imgFile5: null,
  stockAmount: "",
  saleStatus: "",
  productContents: "",
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

  const [error, setError] = useState({
    category: false,
    productName: false,
    productSize: false,
    productPrice: false,
    stockAmount: false,
    saleStatus: false,
    productContents: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 유효성 검사
    let newErrorState = {
      category: values.category === "",
      productName: values.productName === "",
      productSize: values.productSize === "",
      productPrice: values.productPrice === "",
      stockAmount: values.stockAmount === "",
      saleStatus: values.saleStatus === "",
      productContents: values.productContents === "",
    };

    setError(newErrorState);

    // 에러 발생 시 폼 제출을 막음
    if (Object.values(newErrorState).some((isError) => isError)) return;

    try {
      const formData = new FormData();

      if (values.file) {
        for (let i = 0; i < values.file.length; i++) {
          formData.append(`file`, values.file[i]);
        }
      }

      const productData = {
        productName: values.productName,
        productSize: values.productSize,
        productContents: values.productContents,
        productPrice: parseInt(values.productPrice),
        category: values.category,
        saleStatus: values.saleStatus,
        stockDTO: {
          stockAmount: parseInt(values.stockAmount),
          sellAmount: 0,
        },
      };

      // formData.append("data", JSON.stringify(productData));

      const json = JSON.stringify(productData);
      const blob = new Blob([json], { type: "application/json" });
      formData.append("data", blob);

      await axios.post("http://52.78.184.121:8080/369/admin", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("완료되었습니다.");
      setValues(INITIAL_VALUES);
    } catch (error) {
      console.error(error); // 에러 출력
      alert("폼 제출 중에 에러가 발생했습니다."); // 사용자에게 알림 전달
    }
  };

  // try {
  //   // 엑시오스
  //   await axios.post("http://52.78.184.121:8080/369/admin", formData, {
  //     headers: { "Content-Type": "multipart/form-data" },
  //   });

  //   alert("Data submitted successfully");
  //   setValues(INITIAL_VALUES);
  //   // 에러 처리
  //   setSubmittingError(null);
  //   setIsSubmitting(true);
  //   // result = await onSubmit(formData);
  // } catch (error) {
  //   setSubmittingError(error);
  //   return;
  // } finally {
  //   setIsSubmitting(false);
  // }

  //   const { item } = result;

  //   // 폼 값을 초기값으로 설정
  //   setValues(initialValues);

  //   onSubmitSuccess(item);
  // };

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
            error={error.category}
          >
            <option value="">선택</option>
            <option value="illustration">일러스트</option>
            <option value="painting">명화</option>
            <option value="photography">포토그래피</option>
            <option value="typography">타이포그래피</option>
          </Select>
        </FormListBox>

        <FormListBox>
          <Input
            title="상품명"
            name="productName"
            multiple="multiple"
            value={values.productName}
            onChange={handleInputChange}
            error={error.productName}
          />
        </FormListBox>

        <FormListBox>
          <Input
            title="사이즈"
            name="productSize"
            multiple="multiple"
            value={values.productSize}
            onChange={handleInputChange}
            error={error.productSize}
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
            error={error.productPrice}
          />
        </FormListBox>

        <FormFileListBox>
          <div className="title">이미지1</div>
          <FileInput
            name="file"
            multiple="multiple"
            initialPreview={initialPreview}
            value={values.file || []}
            onChange={handleChange}
          />
        </FormFileListBox>

        <FormFileListBox>
          <div className="title">이미지2</div>
          <FileInput
            name="imgFile2"
            multiple="multiple"
            initialPreview={initialPreview}
            value={values.file || []}
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
            error={error.stockAmount}
          />
        </FormListBox>

        <FormListBox>
          <Select
            title="판매상태"
            name="saleStatus"
            multiple="multiple"
            value={values.saleStatus}
            onChange={handleInputChange}
            error={error.saleStatus}
          >
            <option value="">선택</option>
            <option value="SELL">판매중</option>
            <option value="END">판매완료</option>
          </Select>
        </FormListBox>

        <FormListBox>
          <DetailTextArea error={error.content}>
            <label>상세설명</label>
            <textarea
              name="productContents"
              rows={4}
              cols={40}
              multiple="multiple"
              value={values.productContents}
              onChange={handleInputChange}
              error={error.content}
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

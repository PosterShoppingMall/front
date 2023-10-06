import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const FileInputPreview = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

function FileInput({ initialPreview, name, value, onChange }) {
  const [previews, setPreviews] = useState(initialPreview || []);
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = Array.from(e.target.files);
    onChange(name, nextValue);
  };

  // X 버튼 클릭 시 호출
  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, []);
  };

  // value, initialPreview 변경 시 실행
  useEffect(() => {
    if (!value || !Array.isArray(value)) return;
    const nextPreviews = value.map((file) => URL.createObjectURL(file));
    setPreviews(nextPreviews);

    return () => {
      nextPreviews.forEach((preview) => URL.revokeObjectURL(preview));

      setPreviews(initialPreview || []);
    };
  }, [value, initialPreview]);

  return (
    <div>
      {previews.map((previewUrl, index) => (
        <FileInputPreview key={index} src={previewUrl} alt="" />
      ))}
      <input type="file" multiple onChange={handleChange} ref={inputRef} />
      {value && value.length > 0 && (
        <button type="button" onClick={handleClearClick}>
          X
        </button>
      )}
    </div>
  );
}

export default FileInput;

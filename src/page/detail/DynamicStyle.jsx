import styled, { css } from "styled-components";

const dynamicStyles = (items) => {
  // items 배열이 정의되어 있을 때 동적 스타일을 생성합니다.
  if (items) {
    return css`
      // 여기에 동적 스타일을 정의합니다.
      .slick-dots li button:before {
        // 스타일 내용
      }

      // 각 슬라이드에 대한 스타일을 설정
      ${items.map(
        (item, index) => css`
          .slick-dots li:nth-child(${index + 1}) button:before {
            background: url(${item.imgSrc});
          }
        `
      )}
    `;
  }

  // items 배열이 정의되지 않았을 때, 빈 스타일을 반환합니다.
  return css``;
};

const PictureContents = styled.div`
  // 다른 스타일 내용들

  // 스타일 컴포넌트를 사용하여 동적 스타일을 적용합니다.
  ${(props) => dynamicStyles(props.items)}
`;

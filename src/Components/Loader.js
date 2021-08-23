import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 32px;
  margin-top: 25px;
`;

const Loader = () => (
  <Container>
    {/* 시각장애인에 맞춰서 작성 */}
    <span role="img" aria-label="Loading">
      ⏰
    </span>
  </Container>
);

export default Loader;

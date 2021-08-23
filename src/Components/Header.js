import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`; // <ul>대신 List로 바뀜, 반드시 대문자로 시작

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "tranparent")}; // 인자로부터 값을 받아 js처럼 사용
  transition: border-bottom 0.2s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`; // 특정 함수 Styled 사용시 인자로 사용

function HeaderC({ location: { pathname } }) {
  // props.location.path 가져오기
  return (
    <Header>
      <List>
        {/* styled에 props값 주기 */}
        <Item current={pathname === "/"}>
          <SLink to="/">Movies</SLink>
        </Item>
        <Item current={pathname === "/tv"}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname === "/search"}>
          <SLink to="search">Search</SLink>
        </Item>
      </List>
    </Header>
  );
}

export default withRouter(HeaderC); // Header는 Route를 통해 오지 않았으므로 withRouter해야 HeaderC에 props가 생김

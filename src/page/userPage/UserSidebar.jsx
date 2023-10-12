import React from "react";
import { useMatch, Link } from "react-router-dom";
import styled from "styled-components";
import UserSidebarItem from "./UserSidebarItem";

const Sidebar = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: flex-end;
  width: 20%;
`;
const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: gray;
  text-decoration: none;

  &.active {
    color: black;
  }
`;

const UserSidebar = () => {
  const menus = [
    { name: "회원정보", path: "/user" },
    { name: "구매목록", path: "/order-history" },
  ];

  return (
    <Sidebar>
      <Menu>
        {menus.map((menu) => {
          const match = useMatch(menu.path);
          return (
            <StyledLink
              to={menu.path}
              className={match ? "active" : ""}
              key={menu.name}
            >
              <UserSidebarItem menu={menu} />
            </StyledLink>
          );
        })}
      </Menu>
    </Sidebar>
  );
};

export default UserSidebar;

import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import AdminSidebarItem from "../../component/adminLayout/AdminSidebarItem";

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

const StyledLink = styled(NavLink)`
  color: gray;
  text-decoration: none;

  &.active {
    color: black;
  }
`;

const UserSidebar = () => {
  const pathName = useLocation().pathname;

  const menus = [
    { name: "회원정보", path: "/user" },
    { name: "구매목록", path: "/order-history" },
  ];

  return (
    <Sidebar>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <StyledLink to={menu.path} exact activeClassName="active">
              <AdminSidebarItem
                menu={menu}
                isActive={pathName === menu.path ? true : false}
              />
            </StyledLink>
          );
        })}
      </Menu>
    </Sidebar>
  );
};

export default UserSidebar;

import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import AdminSidebarItem from "./AdminSidebarItem";

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

const AdminSidebar = () => {
  const pathName = useLocation().pathname;

  const menus = [
    { name: "상품관리", path: "/admin/product-management" },
    { name: "상품등록", path: "/admin/product-form" },
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

export default AdminSidebar;

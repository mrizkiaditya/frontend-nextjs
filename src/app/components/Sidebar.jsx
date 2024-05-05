"use client";
import { Button, Flex, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider theme="light" trigger={null} collapsed={collapsed} className="sider">
      <Flex justify="center" align="center">
        <div className="logo">
          <h3>Adit</h3>
        </div>
      </Flex>

      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={[
          {
            key: 1,
            icon: <UserOutlined />,
            label: "Dashboard",
          },
          {
            key: 2,
            icon: <CarryOutOutlined />,
            label: "Myorders",
          },
          {
            key: 3,
            icon: <OrderedListOutlined />,
            label: "ToDo",
          },
          {
            key: 4,
            icon: <ProfileOutlined />,
            label: "Profile",
          },
          {
            key: 5,
            icon: <SettingOutlined />,
            label: "Setting",
          },
          {
            key: 6,
            icon: <LogoutOutlined />,
            label: "Logout",
          },
        ]}
      />
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className="triger-btn"
      />
    </Sider>
  );
};

export default Sidebar;

import { PageHeader } from "@ant-design/pro-layout";
import { Divider } from "antd";

import React from "react";

const Header = () => {
  return (
    <>
      <PageHeader
        avatar={{
          src: "https://cdn-icons-png.flaticon.com/512/651/651590.png",
        }}
        style={{ fontFamily: "Consolas" }}
        title="Narutobase clanList"
        subTitle={
          <h5 style={{ color: "#f2a30b" }}>(Created with AntDesign)</h5>
        }
      />
      <Divider />
    </>
  );
};

export default Header;

import { Table, Image, ConfigProvider, Button } from "antd";
import { clanList } from "../data";

import { InfoCircleOutlined } from "@ant-design/icons";

import React from "react";

const columns = [
  {
    title: "Clan name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Village",
    dataIndex: "village",
    key: "village",
    filters: [
      {
        text: "Leaf village",
        value: "Leaf village",
      },
      {
        text: "Rain village",
        value: "Rain village",
      },
      {
        text: "Mist village",
        value: "Mist village",
      },
      {
        text: "Rock village",
        value: "Rock village",
      },
      {
        text: "Sound village",
        value: "Sound village",
      },
      {
        text: "Whirlpool village",
        value: "Whirlpool village",
      },
      {
        text: "Cloud village",
        value: "Cloud village",
      },
    ],
    onFilter: (value, item) => item.village.includes(value),
  },
  {
    title: "About",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Photo",
    dataIndex: "image",
    key: "image",
    render: (image) => <Image src={image} alt="clan photo" width={150} />,
  },
];

const dataSource = clanList.map((item) => ({ ...item, key: item.number }));

const _Table = ({ rows = 5 }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#f2a30b",
          colorFillAlter: "#faebd7",
          colorBgTextActive: "#f2a30b",
          colorBgContainer: "#faebd7e6",
          colorLinkHover: "#0929ce",
        },
      }}
    >
      <Table
        sticky
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: rows,
          position: ["bottomCenter"],
          total: 20,
          showTotal: (total) => `Total ${total} items`,
        }}
        className="table-opacity"
        rowClassName="table-row"
      />
    </ConfigProvider>
  );
};

export default _Table;

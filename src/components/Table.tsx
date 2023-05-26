import { Table, Typography, Image } from "antd";
import { clanList } from "../data";

import React from "react";

const columns = [
  {
    title: "Clan name",
    dataIndex: "name",
    key: "name",
    render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
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
    <Table
      sticky
      dataSource={dataSource}
      columns={columns}
      pagination={{
        pageSize: rows,
      }}
      className="table-opacity"
      rowClassName="table-row"
    />
  );
};

export default _Table;

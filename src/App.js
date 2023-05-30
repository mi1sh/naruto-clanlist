import { useState } from "react";
import { Row, Col, Slider, Typography, Tooltip, ConfigProvider } from "antd";

import Header from "./components/Header.tsx";
import Table from "./components/Table.tsx";

import "./index.css";

function App() {
  const [rows, setRows] = useState(5);

  return (
    <>
      <Header />
      <Row>
        <Col xs={24} md={{ span: 12, offset: 6 }}>
          <Tooltip
            placement="topLeft"
            title='"move slider to change max number of objects per one page"'
          >
            <div style={{ width: "30%" }}>
              <Typography.Title level={4}>Number of Clans</Typography.Title>
              <Typography.Title level={4} style={{ marginTop: -15 }}>
                in the table?
              </Typography.Title>
            </div>
          </Tooltip>
          <ConfigProvider
            theme={{
              token: {
                colorBgElevated: "#303030",
                colorPrimaryBorder: "#1677ff",
                colorPrimary: "#0c2fdf",
                controlHeight: 30,
                motionDurationMid: 0.5,
              },
            }}
          >
            <Slider
              min={1}
              max={20}
              trackStyle={{ backgroundColor: "#f2a30b" }}
              railStyle={{ backgroundColor: "#fff5ee" }}
              keyboard
              defaultValue={rows}
              onChange={setRows}
            />
          </ConfigProvider>
          <Table rows={rows} />
        </Col>
      </Row>
    </>
  );
}

export default App;

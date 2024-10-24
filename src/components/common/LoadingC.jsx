import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const LoadingC = () => (
  <div className="w-full flex flex-col justify-center items-center"
  >
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 48,
          }}
          spin
        />
      }
    />
    <div>Loading</div>
  </div>
);

export default LoadingC;

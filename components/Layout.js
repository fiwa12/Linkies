import React from "react";
import { Input, Row, Col, Button } from "antd";

const Layout = ({ children }) => {
  return (
    <div
      className="flex flex-col pt-10 px-4 items-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: 'url("/totoro025.jpeg")',
        maxHeight: "-webkit-fill-available",
        height: "100vh",
        minHeight: "-webkit-fill-available",
        overflow: "hidden",
      }}
    >
      <div className="absolute flex flex-col items-center top-10 z-10">
        <Row>
          <p className="font-bold text-white text-3xl drop-shadow-lg">
            ✨ &nbsp; Linkies &nbsp; ✨
          </p>
        </Row>
        <Row className="w-full drop-shadow-lg mt-5">
          <Col xs={18} sm={18} md={20} lg={20}>
            <Input
              // placeholder="Find items.."s
              className="w-full pl-5 rounded-l-full border-r-0 font-semibold"
              style={{
                backgroundColor: "#E3D27C",
                borderColor: "#E3D27C",
                color: "#193E34",
              }}
              onChange={(e) => {
                let a;

                if (e?.target?.value === "") {
                  a = Items?.items;
                } else {
                  a = items?.filter((x) =>
                    x?.name?.toLowerCase()?.includes(e?.target?.value)
                  );
                }
                setItems(a);
              }}
            />
          </Col>
          <Col xs={6} sm={6} md={4} lg={4}>
            <Button
              className="w-full rounded-r-full border-l-0 font-semibold text-right pr-10"
              style={{
                backgroundColor: "#E3D27C",
                borderColor: "#E3D27C",
                color: "#193E34",
              }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </div>
      <div
        className="overflow-auto hiddenScrollbar"
        style={{
          height: "calc(100%)",
          width: "calc(100% - 40px)",
          margin: "112px 10px 0px 10px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;

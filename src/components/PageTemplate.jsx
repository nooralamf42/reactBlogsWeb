import React from "react";
import Header from "./Header";
import Pagination from "./Pagination";
import Container from "./Container";

export default function ({ children, orignal }) {
  return (
    <>
      <Header />
      <Container>
        <div className="my-28">{children}</div>
      </Container>
      {orignal && <Pagination />}
    </>
  );
}

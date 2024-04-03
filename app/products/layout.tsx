"use client";
import React, { ReactNode, useState } from "react";
import Header from "./components/Header";
import CustomModal from "./components/Create";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="mx-5 md:mx-32">
      <Header setOpenModal={setOpenModal} />
      {children}
      <CustomModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default Layout;

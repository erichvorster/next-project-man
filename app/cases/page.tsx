"use client";

import React, { useState } from "react";
import NoCases from "../components/cases/NoCases";
import { useContext } from "react";
import { NavContext } from "../context/NavContext";

const pages = () => {
  const [caseModal, setCaseModal] = useState(false);
  const navTab = useContext(NavContext);
  console.log(navTab);

  function openModal() {
    setCaseModal(true);
  }

  function closeModal() {
    setCaseModal(false);
  }

  return (
    <div>
      <NoCases
        caseModal={caseModal}
        openModal={openModal}
        closeModal={closeModal}
        navTab={navTab}
      />
    </div>
  );
};

export default pages;

"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ReportNavigateButton = () => {
  const route = useRouter();

  return (
    <button onClick={() => route.push("/report")}>TodoList 통계보러가기</button>
  );
};

export default ReportNavigateButton;

"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ReportNavigateButton = () => {
  const route = useRouter();

  return (
    <button
      onClick={() => route.push("/report")}
      className="btn btn-active btn-primary btn-sm"
    >
      TodoList 통계보러가기
    </button>
  );
};

export default ReportNavigateButton;

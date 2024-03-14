"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ReportNavigateButton = () => {
  const route = useRouter();

  return (
    <button
      onClick={() => route.push("/report")}
      className="w-52 h-9 rounded-xl opacity-90 bg-gray-300"
    >
      TodoList 통계보러가기
    </button>
  );
};

export default ReportNavigateButton;

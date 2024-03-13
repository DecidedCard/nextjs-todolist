import { companyInfoType } from "@/types";
import Image from "next/image";
import React from "react";

const AboutPage = async () => {
  const res = await fetch("http://localhost:3000/api/company", {
    cache: "force-cache",
  });
  const { companyInfo }: companyInfoType = await res.json();

  return (
    <main className="flex justify-center">
      <div className=" flex flex-col items-center">
        <h2 className="text-2xl text-white m-3">
          <label>이름: </label>
          {companyInfo.name}
        </h2>
        <p className="text-xl text-white m-2">
          <label>설명: </label>
          {companyInfo.desctiption}
        </p>
        <Image
          src={companyInfo.image}
          alt="회사 이미지입니다."
          width={600}
          height={600}
        />
      </div>
    </main>
  );
};

export default AboutPage;

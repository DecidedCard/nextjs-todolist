import { companyInfoType } from "@/types";
import Image from "next/image";
import React from "react";

const AboutPage = async () => {
  const res = await fetch("http://localhost:3000/api/company");
  const { companyInfo }: companyInfoType = await res.json();
  console.log(companyInfo);
  return (
    <main>
      <div>
        <h2>{companyInfo.name}</h2>
        <p>{companyInfo.desctiption}</p>
        <Image
          src={companyInfo.image}
          alt="회사 이미지 입니다."
          width={300}
          height={300}
        />
      </div>
    </main>
  );
};

export default AboutPage;

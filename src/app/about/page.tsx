import { PageInfoType } from "@/types";
import Image from "next/image";
import React from "react";

export const dynamic = "force-dynamic";

const AboutPage = async () => {
  const res = await fetch("http://localhost:4000/pageInfo");
  const pageInfo: PageInfoType = await res.json();

  return (
    <main className="flex justify-center">
      <div className=" flex justify-evenly items-center gap-44 mt-10 min-w-max">
        <Image
          src={pageInfo.image}
          alt="회사 이미지입니다."
          width={400}
          height={600}
          className="-z-20"
        />
        <div>
          <h2 className="text-2xl m-3">
            <label>제목: </label>
            {pageInfo.name}
          </h2>
          <p className="m-2 max-w-lg text-pretty text-xl">
            <label>설명: </label>
            {pageInfo.desctiption}
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;

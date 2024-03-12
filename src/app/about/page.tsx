import React from "react";

const AboutPage = async () => {
  const res = await fetch("http://localhost:3000/api/company");
  const companyInfo = await res.json();
  console.log(companyInfo);
  return <div>AboutPage</div>;
};

export default AboutPage;

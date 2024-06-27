import React from "react";
import { ServiceCard } from "../components";

const ServiceCount = () => {
  return <div className="w-ful py-6 lg:py-24 mt-24 flex itmes-center justify-center flex-wrap gap-8">
    <ServiceCard count={"8.0"} text={"CGPA"}/>
    <ServiceCard count={"Commitment"} text={"Towards my work"}/>
    <ServiceCard count={"HardWork"} text={"For acquiring goals"}/>
    <ServiceCard count={"Curiosity"} text={"In Learning new Skills"}/>
  </div>;
};

export default ServiceCount;

import React from "react";
import { ServiceCard } from "../components";

const ServiceCount = () => {
  return <div className="w-ful py-6 lg:py-24 mt-24 flex itmes-center justify-center flex-wrap gap-8">
    <ServiceCard count={"1M+"} text={"Happy Students"}/>
    <ServiceCard count={"1M+"} text={"Happy Students"}/>
    <ServiceCard count={"1M+"} text={"Happy Students"}/>
    <ServiceCard count={"1M+"} text={"Happy Students"}/>
  </div>;
};

export default ServiceCount;

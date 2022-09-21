import React from "react";
import "../../App.css";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

const DetailsComponent = (props: {
  children: React.ReactNode
}) => (
  <>
    <Breadcrumbs styling="font-bold px-5 lg:px-20 text-xs sm:text-base pb-10" />
    <div
      className="flex flex-wrap lg:flex-nowrap justify-evenly gap-y-5 gap-x-2 mx-6 md:mx-2"
    >
      {props.children}
    </div>
  </>
);

export default DetailsComponent;

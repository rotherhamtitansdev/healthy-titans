import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

interface BreadcrumbsProps {
  styling: string;
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const routes = [
    { path: "/", breadcrumb: null },
    { path: "/NutritionalInformation", breadcrumb: "Food & Nutrition" },
    { path: "NutritionalInformation/FruitsAndVegetables", breadcrumb: "Fruit & Vegetables" },
    { path: "NutritionalInformation/DairyAndEggs", breadcrumb: "Dairy & Eggs" },
  ];

  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className={`font-quicksand text-[#243A73] flex ${props.styling}`}>
      {breadcrumbs.map(({
        match,
        breadcrumb,
      }, index) => (
        <>
          {index !== 0 ? <p className="text text-titansBrightPink">{" > "}</p> : null}
          <NavLink to={match.pathname}>{breadcrumb}</NavLink>
        </>
      ))}
    </div>
  );
};

export default Breadcrumbs;

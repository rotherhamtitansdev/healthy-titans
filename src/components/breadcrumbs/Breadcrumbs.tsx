import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

interface BreadcrumbsProps {
  styling: string;
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const routes = [
    { path: "/", breadcrumb: null },
    { path: "NutritionalInformation", breadcrumb: "Food & Nutrition" },
  ];

  const breadcrumbs = useBreadcrumbs(routes);

  function getBreadcrumbName(breadcrumb: any) {
    const path = breadcrumb.props.children;
    // Replace pascal case with title case
    const result = path.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult.replaceAll("And", "&");
  }

  return (
    <div className={`font-quicksand text-[#243A73] flex ${props.styling}`}>
      {breadcrumbs.map(({
        match,
        breadcrumb,
      }, index) => (
        <>
          {index !== 0 ? (
            <p className="text text-titansBrightPink">
            &nbsp;
              {">"}
            &nbsp;
            </p>
          ) : null}
          <NavLink to={match.pathname}>
            {breadcrumb ? getBreadcrumbName(breadcrumb) : null}
          </NavLink>
        </>
      ))}
    </div>
  );
};

export default Breadcrumbs;

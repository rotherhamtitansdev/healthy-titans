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
    { path: "NutritionalInformation/Nutrition", breadcrumb: null },
  ];

  const breadcrumbs = useBreadcrumbs(routes);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getBreadcrumbName(breadcrumb: any) {
    const path = breadcrumb.props.children;
    // Replace pascal case with title case
    const result = path.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult.replaceAll("And", "&");
  }

  return (
    <div data-testid="breadcrumbs" className={`text-[#243A73] flex ${props.styling}`}>
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <React.Fragment key={match.pathname}>
          {index !== 0 && (
            <p className="text text-titansBrightPink">
              &nbsp;
              {">"}
              &nbsp;
            </p>
          )}
          <NavLink to={match.pathname}>{breadcrumb && getBreadcrumbName(breadcrumb)}</NavLink>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;

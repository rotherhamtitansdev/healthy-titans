import React from "react";

const InfoWithHeader = (props: { info: string | undefined, header: string }) => (
  <div>
    <strong>
      {props.header}
      :&nbsp;
    </strong>
    {props.info}
  </div>
);

export default InfoWithHeader;

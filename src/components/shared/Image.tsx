import React from "react";


// eslint-disable-next-line react/require-default-props
const Image = (props: {img: string; alt: string; additionalStyling?: string | undefined;}) => (
    <div className="px-[2.75rem] md:px-[5rem] pb-[0.5rem] md:pb-[1rem] min-w-[89px] min-h-[81px] 2xl:mt-5">
      <img
        className={`mx-auto ${props.additionalStyling}`}
        src={props.img}
        alt={props.alt}
        draggable={false}
      />
    </div>
  );

export default Image;

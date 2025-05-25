import React from "react";

interface props {
  stroke: string;
  fill: string;
  width: string;
}

export const Flight: React.FC<props> = ({ stroke, fill, width }) => {
  return (
    <svg
      version="1.1"
      id="1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      viewBox="0 0 800 800"
      enableBackground="new 0 0 800 800"
    >
      <polygon
        fill={fill}
        stroke={stroke}
        strokeWidth="30"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="
	456.822,291.111 321.323,327.231 199.41,132.376 269.57,113.674 "
      />
      <polygon
        fill={fill}
        stroke={stroke}
        strokeWidth="30"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="42.146,265.532 
	13,273.302 85.994,389.963 154.235,371.772 "
      />
      <polygon
        fill={fill}
        stroke={stroke}
        strokeWidth="30"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="83.958,457.883 
	125.91,469.751 110.389,521.532 81.242,529.302 "
      />
      <path
        fill="#FFFFFF"
        stroke={stroke}
        strokeWidth="30"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M765.189,322.189
	l-93.609,51.054c-1.719,0.692-3.42,1.366-5.139,2.06L249.581,486.426c-21.827,5.818-44.831,5.641-66.576-0.503l-57.089-16.15
	l-41.952-11.867l-7.443-2.105c-13.936-3.938-24.016-16.685-23.96-31.945c0.058-15.168,11.402-28.006,26.063-31.915L375.8,312.721
	l135.499-36.12l69.855-18.622c6.916-1.844,13.928-3.198,20.961-4.29l-8.23,32.933c-4.148,16.527,11.471,31.161,27.705,25.969
	l120.432-38.563l18.287,5.138C780.473,284.818,783.57,312.125,765.189,322.189z"
      />
      <path
        fill={fill}
        stroke={stroke}
        strokeWidth="30"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M621.58,312.594
	c-16.232,5.203-31.844-9.445-27.707-25.969l8.232-32.933c28.357-4.417,57.383-2.82,85.152,4.978l54.764,15.358L621.58,312.594z"
      />
      <polygon
        fill={fill}
        stroke={stroke}
        strokeWidth="30"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="
	432.678,725.547 362.518,744.25 375.125,413.225 539.453,369.419 "
      />
      <line
        fill="none"
        stroke={stroke}
        strokeWidth="30"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="490.494"
        y1="331.789"
        x2="486.439"
        y2="316.572"
      />
      <line
        fill="none"
        stroke={stroke}
        strokeWidth="30"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="438.639"
        y1="345.612"
        x2="434.582"
        y2="330.396"
      />
      <line
        fill="none"
        stroke={stroke}
        strokeWidth="30"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="386.782"
        y1="359.436"
        x2="382.726"
        y2="344.219"
      />
      <line
        fill="none"
        stroke={stroke}
        strokeWidth="30"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="334.914"
        y1="373.262"
        x2="330.858"
        y2="358.045"
      />
      <line
        fill="none"
        stroke={stroke}
        strokeWidth="30"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="283.057"
        y1="387.085"
        x2="279.001"
        y2="371.869"
      />
      <line
        fill="none"
        stroke={stroke}
        strokeWidth="30"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="231.189"
        y1="400.912"
        x2="227.133"
        y2="385.695"
      />
    </svg>
  );
};

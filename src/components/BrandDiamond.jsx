import { useId } from "react";

const pieces = [
  "341,92 349,83 366,66 380,66 416,102 479,166 486,174 486,175 422,175 404,157 341,93",
  "415,66 480,66 502,88 549,136 586,174 586,175 522,175 467,120 415,67",
  "515,66 580,66 634,121 686,174 686,175 621,175 601,155 555,108 515,67",
  "615,66 679,66 700,87 785,174 772,175 722,175 720,174 704,158 658,111 615,67",
  "714,66 778,66 779,67 863,153 883,174 819,174 812,167 764,118 718,71",
  "291,142 323,110 324,110 340,126 387,174 387,175 322,175 316,169 291,143",
  "259,174 273,160 274,160 288,174 288,175 259,175",
  "259,210 323,210 354,241 590,482 603,496 603,497 584,517 572,529 524,481 448,404 345,299 298,251 259,211",
  "357,210 423,210 427,214 619,410 653,445 653,446 628,472 622,478 620,478 594,452 397,251",
  "457,210 522,210 545,233 655,345 703,394 703,395 671,428 645,402 457,211",
  "557,210 622,210 646,234 742,332 753,344 725,373 721,377 720,377 706,363 602,257 557,211",
  "657,210 721,210 758,247 799,289 802,293 802,294 771,326 770,326 754,310 700,255 657,211",
  "756,210 820,210 851,241 852,243 826,270 821,275 819,275 813,269 783,238",
];

function BrandDiamond({ className = "", light = false, title }) {
  const id = useId().replace(/:/g, "");
  const gradientId = `heera-diamond-${id}`;

  return (
    <svg
      viewBox="245 55 650 490"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : "true"}
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title>{title}</title>}
      <defs>
        <linearGradient
          id={gradientId}
          x1="260"
          y1="430"
          x2="885"
          y2="90"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={light ? "#ffffff" : "#080909"} />
          <stop offset="0.58" stopColor={light ? "#d7d7d5" : "#4b4c4b"} />
          <stop offset="1" stopColor={light ? "#9b9b98" : "#b4b4b2"} />
        </linearGradient>
      </defs>

      <g fill={`url(#${gradientId})`}>
        {pieces.map((points, index) => (
          <polygon key={index} points={points} />
        ))}
      </g>
    </svg>
  );
}

export default BrandDiamond;

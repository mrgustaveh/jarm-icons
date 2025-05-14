import { FC, memo } from "react";
import { IconProps } from "./type";

/**
 * Arrow right
 * @param {IconProps} props
 * @prop width: number (14)
 * @prop height: number (10)
 * @prop color: string (black)
 */
const ArrowRight: FC<IconProps> = ({
  width = 14,
  height = 10,
  color = "black",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 9L13 5M13 5L9 1M13 5H1"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(ArrowRight);

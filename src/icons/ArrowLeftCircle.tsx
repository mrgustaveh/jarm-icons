import { FC, memo } from "react";
import { IconProps } from "./type";

const ArrowLeftCircle: FC<IconProps> = ({
  width = 20,
  height = 20,
  color = "black",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.6 10L6.4 10M6.4 10L9.55 13.15M6.4 10L9.55 6.85M10 1C5.0293 1 1 5.0293 1 10C1 14.9707 5.0293 19 10 19C14.9707 19 19 14.9707 19 10C19 5.0293 14.9707 1 10 1Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Arrowleft circle/arrow left in transparent circle
 * @param {IconProps} props
 * @property width: number (20)
 * @property height: number (20)
 * @property color: string (black)
 */
export default memo(ArrowLeftCircle);

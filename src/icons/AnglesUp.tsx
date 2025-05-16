import { FC, memo } from "react";
import { IconProps } from "./type";

const AnglesUp: FC<IconProps> = ({
  width = 10,
  height = 12,
  color = "black",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 11L5 7L9 11M1 5L5 1L9 5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Angles up/double chevrons up
 * @param {IconProps} props
 * @property width: number (10)
 * @property height: number (12)
 * @property color: string (black)
 */
export default memo(AnglesUp);

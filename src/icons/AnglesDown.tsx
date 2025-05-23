import { FC, memo } from "react";
import { IconProps } from "./type";

const AnglesDown: FC<IconProps> = ({
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
      d="M9 1L5 5L1 1M9 7L5 11L1 7"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Angles down/double chevrons down
 * @param {IconProps} props
 * @property width: number (10)
 * @property height: number (12)
 * @property color: string (black)
 */
export default memo(AnglesDown);

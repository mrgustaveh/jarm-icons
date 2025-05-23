import { FC, memo } from "react";
import { IconProps } from "./type";

const Cancel: FC<IconProps> = ({
  width = 10,
  height = 10,
  color = "black",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L9 9M1 9L9 1"
      stroke={color}
      strokeOpacity="0.6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Cancel
 * @param {IconProps} props
 * @property width: number (10)
 * @property height: number (10)
 * @property color: string (black)
 */
export default memo(Cancel);

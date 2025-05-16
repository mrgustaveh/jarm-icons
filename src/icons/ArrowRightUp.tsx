import { FC, memo } from "react";
import { IconProps } from "./type";

const ArrowRightUp: FC<IconProps> = ({
  width = 8,
  height = 8,
  color = "black",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.33333 0V1.33333H5.724L0 7.05733L0.942666 8L6.66667 2.276V6.66667H8V0H1.33333Z"
      fill={color}
    />
  </svg>
);

/**
 * Arrow right up/launch
 * @param {IconProps} props
 * @property width: number (8)
 * @property height: number (8)
 * @property color: string (black)
 */
export default memo(ArrowRightUp);

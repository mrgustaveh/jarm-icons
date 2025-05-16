import { FC, memo } from "react";
import { IconProps } from "./type";

const ShieldSolid: FC<IconProps> = ({
  width = 20,
  height = 24,
  color = "black",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 0L0 4.36364V10.9091C0 16.9636 4.26667 22.6255 10 24C15.7333 22.6255 20 16.9636 20 10.9091V4.36364L10 0Z"
      fill={color}
    />
  </svg>
);

/**
 * Shield solid (shield with solid background)
 * @param {IconProps} props
 * @property width: number (20)
 * @property height: number (24)
 * @property color: string (black)
 */
export default memo(ShieldSolid);

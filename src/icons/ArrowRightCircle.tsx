import { FC, memo } from "react";
import { IconProps } from "./type";

const Message: FC<IconProps> = ({
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
      d="M6.4 10H13.6M13.6 10L10.45 6.85M13.6 10L10.45 13.15M10 19C14.9707 19 19 14.9707 19 10C19 5.0293 14.9707 1 10 1C5.0293 1 1 5.0293 1 10C1 14.9707 5.0293 19 10 19Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Arrowright circle/arrow right in transparent circle
 * @param {IconProps} props
 * @property width: number (20)
 * @property height: number (20)
 * @property color: string (black)
 */
export default memo(Message);

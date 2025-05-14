import { FC, memo } from "react";
import { IconProps } from "./type";

/**
 * Email/at/@
 * @param {IconProps} props
 * @prop width: number (22)
 * @prop height: number (22)
 * @prop color: string (black)
 */
const Email: FC<IconProps> = ({ width = 22, height = 22, color = "black" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.4444 11C15.4444 13.4556 13.4556 15.4444 11 15.4444C8.54444 15.4444 6.55556 13.4556 6.55556 11C6.55556 8.54444 8.54444 6.55556 11 6.55556C13.4556 6.55556 15.4444 8.54444 15.4444 11ZM15.4444 11V12.6667C15.4444 14.2 16.6889 15.4444 18.2222 15.4444C19.7556 15.4444 21 14.2 21 12.6667V11C21 5.47778 16.5222 1 11 1C5.47778 1 1 5.47778 1 11C1 16.5222 5.47778 21 11 21H15.4444"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(Email);

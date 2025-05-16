import { FC, memo } from "react";
import { IconProps } from "./type";

const Location: FC<IconProps> = ({
  width = 18,
  height = 22,
  color = "black",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 0C11.3869 0 13.6761 0.993365 15.364 2.76156C17.0518 4.52977 18 6.92796 18 9.42857C18 13.332 15.16 17.4219 9.6 21.7905C9.4269 21.9265 9.21637 22 9 22C8.78363 22 8.5731 21.9265 8.4 21.7905C2.84 17.4219 0 13.332 0 9.42857C0 6.92796 0.948211 4.52977 2.63604 2.76156C4.32387 0.993365 6.61305 0 9 0ZM9 6.28571C8.20435 6.28571 7.44129 6.61684 6.87868 7.20624C6.31607 7.79564 6 8.59503 6 9.42857C6 10.2621 6.31607 11.0615 6.87868 11.6509C7.44129 12.2403 8.20435 12.5714 9 12.5714C9.79565 12.5714 10.5587 12.2403 11.1213 11.6509C11.6839 11.0615 12 10.2621 12 9.42857C12 8.59503 11.6839 7.79564 11.1213 7.20624C10.5587 6.61684 9.79565 6.28571 9 6.28571Z"
      fill={color}
    />
  </svg>
);

/**
 * Location
 * @param {IconProps} props
 * @property width: number (18)
 * @property height: number (22)
 * @property color: string (black)
 */
export default memo(Location);

import { FC, memo } from "react";
import { IconProps } from "./type";

const Bookmark: FC<IconProps> = ({
  width = 18,
  height = 20,
  color = "black",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 15.09V10.098C19 5.808 19 3.665 17.682 2.332C16.364 1 14.242 1 10 1C5.758 1 3.636 1 2.318 2.332C1 3.664 1 5.81 1 10.098V15.091C1 18.187 1 19.736 1.734 20.412C2.084 20.735 2.526 20.938 2.997 20.992C3.984 21.105 5.137 20.085 7.442 18.046C8.462 17.145 8.971 16.694 9.56 16.576C9.85 16.516 10.15 16.516 10.44 16.576C11.03 16.694 11.539 17.145 12.558 18.046C14.863 20.085 16.016 21.105 17.003 20.991C17.473 20.938 17.916 20.735 18.266 20.412C19 19.736 19 18.187 19 15.09Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <path d="M13 5H7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * Bookmark
 * @param {IconProps} props
 * @property width: number (18)
 * @property height: number (20)
 * @property color: string (black)
 */
export default memo(Bookmark);

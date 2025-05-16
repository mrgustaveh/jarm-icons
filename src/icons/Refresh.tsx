import { FC, memo } from "react";
import { IconProps } from "./type";

const Refresh: FC<IconProps> = ({
  width = 18,
  height = 18,
  color = "black",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.7 9C11.7 7.47 10.53 6.3 9 6.3C7.47 6.3 6.3 7.47 6.3 9C6.3 10.53 7.47 11.7 9 11.7C10.53 11.7 11.7 10.53 11.7 9ZM13.5 1.17C9.99 -0.81 5.67 -0.18 2.79 2.43V0.9C2.79 0.36 2.43 0 1.89 0C1.35 0 0.99 0.36 0.99 0.9V4.95C0.99 5.49 1.35 5.85 1.89 5.85H5.94C6.48 5.85 6.84 5.49 6.84 4.95C6.84 4.41 6.48 4.05 5.94 4.05H3.78C5.13 2.61 7.02 1.8 9 1.8C12.96 1.8 16.2 5.04 16.2 9C16.2 9.54 16.56 9.9 17.1 9.9C17.64 9.9 18 9.54 18 9C18 5.76 16.29 2.79 13.5 1.17ZM16.11 12.15H12.06C11.52 12.15 11.16 12.51 11.16 13.05C11.16 13.59 11.52 13.95 12.06 13.95H14.22C12.87 15.39 10.98 16.2 9 16.2C5.04 16.2 1.8 12.96 1.8 9C1.8 8.46 1.44 8.1 0.9 8.1C0.36 8.1 0 8.46 0 9C0 13.95 4.05 18 9 18C11.34 18 13.5 17.1 15.21 15.48V17.1C15.21 17.64 15.57 18 16.11 18C16.65 18 17.01 17.64 17.01 17.1V13.05C17.01 12.51 16.56 12.15 16.11 12.15Z"
      fill={color}
    />
  </svg>
);

/**
 * Refresh/history
 * @param {IconProps} props
 * @property width: number (18)
 * @property height: number (18)
 * @property color: string (black)
 */
export default memo(Refresh);

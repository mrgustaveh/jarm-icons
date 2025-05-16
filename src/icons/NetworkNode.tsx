import { FC, memo } from "react";
import { IconProps } from "./type";

const NetworkNode: FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "black",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 0C18.6365 0 19.247 0.252856 19.6971 0.702944C20.1471 1.15303 20.4 1.76348 20.4 2.4V14.4C20.4 15.0365 20.1471 15.647 19.6971 16.0971C19.247 16.5471 18.6365 16.8 18 16.8H13.2V19.2H14.4C14.7183 19.2 15.0235 19.3264 15.2485 19.5515C15.4736 19.7765 15.6 20.0817 15.6 20.4H24V22.8H15.6C15.6 23.1183 15.4736 23.4235 15.2485 23.6485C15.0235 23.8736 14.7183 24 14.4 24H9.6C9.28174 24 8.97652 23.8736 8.75147 23.6485C8.52643 23.4235 8.4 23.1183 8.4 22.8H0V20.4H8.4C8.4 20.0817 8.52643 19.7765 8.75147 19.5515C8.97652 19.3264 9.28174 19.2 9.6 19.2H10.8V16.8H6C5.36348 16.8 4.75303 16.5471 4.30294 16.0971C3.85286 15.647 3.6 15.0365 3.6 14.4V2.4C3.6 1.76348 3.85286 1.15303 4.30294 0.702944C4.75303 0.252856 5.36348 0 6 0H18Z"
      fill={color}
    />
  </svg>
);

/**
 * Network/node
 * @param {IconProps} props
 * @property width: number (24)
 * @property height: number (24)
 * @property color: string (black)
 */
export default memo(NetworkNode);

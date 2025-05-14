import { FC, memo } from "react";
import { IconProps } from "./type";

/**
 * Notification/bell
 * @param {IconProps} props
 * @prop width: number (18)
 * @prop height: number (20)
 * @prop color: string (black)
 */
const NotificationBell: FC<IconProps> = ({
  width = 18,
  height = 20,
  color = "black",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.35206 18.242C5.78721 18.7922 6.34171 19.2364 6.97367 19.541C7.60564 19.8455 8.29855 20.0025 9.00006 20C9.70158 20.0025 10.3945 19.8455 11.0264 19.541C11.6584 19.2364 12.2129 18.7922 12.6481 18.242C10.2271 18.5697 7.77303 18.5697 5.35206 18.242ZM15.7501 7V7.704C15.7501 8.549 15.9901 9.375 16.4421 10.078L17.5501 11.801C18.5611 13.375 17.7891 15.514 16.0301 16.011C11.4338 17.3127 6.56635 17.3127 1.97006 16.011C0.211062 15.514 -0.560938 13.375 0.450062 11.801L1.55806 10.078C2.01128 9.36919 2.25178 8.54531 2.25106 7.704V7C2.25106 3.134 5.27306 0 9.00006 0C12.7271 0 15.7501 3.134 15.7501 7Z"
      fill={color}
    />
  </svg>
);

export default memo(NotificationBell);

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
      d="M6.08086 7.94313H13.923M6.08086 12.0569H11.6735M10.0019 19C11.957 18.9996 13.8588 18.3625 15.4196 17.1852C16.9805 16.0079 18.1155 14.3543 18.6531 12.4746C19.1907 10.5949 19.1015 8.59126 18.3992 6.76671C17.6968 4.94216 16.4194 3.39593 14.7602 2.36188C13.1009 1.32783 11.1501 0.862196 9.2027 1.0354C7.25531 1.2086 5.41727 2.01121 3.96657 3.32186C2.51587 4.6325 1.53141 6.37989 1.16207 8.29977C0.792725 10.2196 1.05859 12.2076 1.91946 13.9629C2.02454 14.177 2.05957 14.4183 2.00605 14.6498L1.21211 18.0903C1.18973 18.1868 1.19229 18.2875 1.21957 18.3828C1.24684 18.478 1.29793 18.5648 1.36801 18.6349C1.4381 18.705 1.52487 18.7561 1.62015 18.7833C1.71544 18.8106 1.8161 18.8132 1.91265 18.7908L5.35211 17.9959C5.58433 17.945 5.82699 17.976 6.03902 18.0834C7.27216 18.689 8.62814 19.0026 10.0019 19Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Message
 * @param {IconProps} props
 * @property width: number (20)
 * @property height: number (20)
 * @property color: string (black)
 */
export default memo(Message);

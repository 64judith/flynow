import { Flight, Car, Stay } from "@/components/svg";

export const searchMenu = [
  {
    id: "0",
    title: "Flight",
    icon: (width: string, fill: string, stroke: string) => (
      <Flight width={width} fill={fill} stroke={stroke} />
    ),
    active: true,
    link: "",
  },
  {
    id: "1",
    title: "Rides",
    icon: (width: string, fill: string, stroke: string) => (
      <Car width={width} fill={fill} stroke={stroke} />
    ),
    active: false,
    link: "",
  },
  {
    id: "2",
    title: "Stays",
    icon: (width: string, fill: string, stroke: string) => (
      <Stay width={width} fill={fill} stroke={stroke} />
    ),
    active: false,
    link: "",
  },
];

import bronzeHelm from "../assets/bronzeHelm.png";
import bronzeBody from "../assets/bronzeBody.png";
import bronzeLegs from "../assets/bronzeLegs.png";
import ironHelm from "../assets/ironHelm.png";
import ironBody from "../assets/ironBody.png";
import ironLegs from "../assets/ironLegs.png";
import bronzeHelmStat from "../assets/bronzeHelmStat.png";
import bronzeLegStat from "../assets/bronzeLegStat.png";
import bronzePlateStat from "../assets/bronzePlateStat.png";
import ironHelmStat from "../assets/ironHelmStat.png";
import ironPlateStat from "../assets/ironPlateStat.png";
import ironLegsStat from "../assets/ironLegsStat.png";

export const armor = [
  {
    id: 0,
    name: "Bronze Full Helm",
    altName: "BronzeFull",
    url: bronzeHelm,
    stats: bronzeHelmStat,
    description:
      "A full helmet made of Bronze. Used reduce impact to the head.",
    price: 35.0,
    quantity: 1,
  },
  {
    id: 1,
    name: "Iron Full Helm",
    altName: "IronFull",
    url: ironHelm,
    stats: ironHelmStat,
    description:
      "A full helmet made of Iron. Used to reduce impact to the head. Slightly better than Bronze",
    price: 45.0,
    quantity: 1,
  },
  {
    id: 2,
    name: "Bronze PlateBody",
    altName: "BronzePlate",
    url: bronzeBody,
    stats: bronzePlateStat,
    description:
      "A Platebody made of Bronze. Used to reduce impact to the torso.",
    price: 50.0,
    quantity: 1,
  },
  {
    id: 3,
    name: "Iron Platebody",
    altName: "IronPlate",
    url: ironBody,
    stats: ironPlateStat,
    description:
      "A PlateBody made of Iron. Used to reduce impact to the torso. Slightly better than Bronze",
    price: 70.0,
    quantity: 1,
  },
  {
    id: 4,
    name: "Bronze Platelegs",
    altName: "BronzeLegs",
    url: bronzeLegs,
    stats: bronzeLegStat,
    description:
      "A pair of Platelegs made of Bronze. Used to reduce impact to the legs. ",
    price: 65.0,
    quantity: 1,
  },
  {
    id: 5,
    name: "Iron Platelegs",
    altName: "IronLegs",
    stats: ironLegsStat,
    description:
      "A pair of Platelegs made of Iron. Used to reduce impact to the legs. Slightly better than Bronze",
    url: ironLegs,
    price: 80.0,
    quantity: 1,
  },
];

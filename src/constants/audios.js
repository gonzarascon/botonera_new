import _ from "lodash";
import { colors } from "./index";

const audios = [
  {
    label: "A Laburar",
    src: "a-laburar",
    color: _.sample(colors.buttons),
    id: 0,
  },
  {
    label: "Balada Showmatch",
    src: "balada-showmatch",
    color: _.sample(colors.buttons),
    id: 1,
  },
  {
    label: "Intelectual",
    src: "intelectual",
    color: _.sample(colors.buttons),
    id: 2,
  },
  {
    label: "Saxo sexy",
    src: "saxo-sexy",
    color: _.sample(colors.buttons),
    id: 3,
  },
  {
    label: "Tifonic",
    src: "titanic-flute",
    color: _.sample(colors.buttons),
    id: 4,
  },
  {
    label: "Flauta Mii",
    src: "wii-flute",
    color: _.sample(colors.buttons),
    id: 5,
  },
  {
    label: "Odio los lunes",
    src: "odio-los-lunes",
    color: _.sample(colors.buttons),
    id: 6,
  },
];

export default audios;

import React from "react";
import _ from "lodash";
import { colors } from "../../constants";
import { Wrapper, Box } from "./styles";

import { SoundButton } from "../../components";

const audios = [
  {
    label: "A Laburar",
    src: "./assets/audio/a-laburar.mp3",
    color: _.sample(colors.buttons),
    id: 1,
  },
  {
    label: "Balada Showmatch",
    src: "./assets/audio/balada-showmatch.mp3",
    color: _.sample(colors.buttons),
    id: 2,
  },
  {
    label: "Intelectual",
    src: "./assets/audio/intelectual.mp3",
    color: _.sample(colors.buttons),
    id: 3,
  },
  {
    label: "Saxo sexy",
    src: "./assets/audio/saxo-sexy.mp3",
    color: _.sample(colors.buttons),
    id: 4,
  },
  {
    label: "Tifonic",
    src: "./assets/audio/titanic-flute.mp3",
    color: _.sample(colors.buttons),
    id: 5,
  },
  {
    label: "Flauta Mii",
    src: "./assets/audio/wii-flute.mp3",
    color: _.sample(colors.buttons),
    id: 6,
  },
];

export default function Home() {
  return (
    <Wrapper>
      {audios.map(audio => (
        <SoundButton
          key={audio.id}
          sound={audio.src}
          label={audio.label}
          color={audio.color}
        />
      ))}
    </Wrapper>
  );
}

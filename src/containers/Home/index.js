import React, { useState } from "react";
import _ from "lodash";
import { colors } from "../../constants";
import { Wrapper, Box } from "./styles";

import { SoundButton } from "../../components";

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
];

export default function Home() {
  const [currentPlaying, setCurrentPlaying] = useState(null);

  function handlePlay(playerId) {
    setCurrentPlaying(playerId);
  }

  return (
    <Wrapper>
      {audios.map(audio => (
        <SoundButton
          key={audio.id}
          sound={audio.src}
          label={audio.label}
          color={audio.color}
          playing={_.isEqual(audio.id, currentPlaying) ? true : false}
          handlePlay={handlePlay}
          playerId={audio.id}
        />
      ))}
    </Wrapper>
  );
}

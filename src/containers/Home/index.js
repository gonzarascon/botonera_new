import React, { useState } from "react";
import _ from "lodash";
import { Wrapper } from "./styles";

import audios from "../../constants/audios";
import { SoundButton } from "../../components";

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

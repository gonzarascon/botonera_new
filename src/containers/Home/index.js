import React, { useState, useEffect, useCallback } from "react";
import SVG from "react-inlinesvg";
import _ from "lodash";
import { Wrapper, OopsMessage, ShareButton, Share } from "./styles";

import audios from "../../constants/audios";

import { useSearchState } from "../../contexts/searchContext";

import { SoundButton } from "../../components";

export default function Home() {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [filter, setFilter] = useState(null);
  const [audioList, setAudioList] = useState(audios);

  const { search } = useSearchState();

  const updateFilter = useCallback(() => {
    setFilter(search);
  }, [search]);

  const filterAudios = useCallback(() => {
    const initialAudios = audioList;

    const filteredAudios =
      filter !== null
        ? _.filter(initialAudios, o =>
            o.label.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
        : null;

    if (
      !_.isEqual(filteredAudios, null) &&
      !_.isEqual(filteredAudios, audioList)
    ) {
      setAudioList(filteredAudios);
    }

    if (_.isEqual(filter, "") && !_.isEqual(audioList, audios)) {
      setAudioList(audios);
    }
  }, [filter, audioList]);

  useEffect(() => {
    updateFilter();

    if (!_.isEqual(currentPlaying, null)) {
      setCurrentPlaying(null);
    }
  }, [search, updateFilter]);

  useEffect(() => {
    if (!_.isEqual(filter, null)) filterAudios();
  }, [filter, filterAudios]);

  function handlePlay(playerId) {
    setCurrentPlaying(playerId);
  }

  function shareBotonera() {
    if (navigator.share) {
      navigator.share({
        title: "Botonera de memes",
        text: "Ey encontré esta botonera",
        url: "https://gonzarascon.github.io/botonera_new",
      });
    }
  }

  return (
    <Wrapper>
      {navigator.share && (
        <ShareButton onClick={() => shareBotonera()}>
          <span>Compartí la botonera</span>
          <Share>
            <SVG src="./assets/icons/share.svg" title="Compartir" />
          </Share>
        </ShareButton>
      )}
      {audioList.map(audio => (
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
      {audioList.length === 0 && (
        <OopsMessage>
          <span role="img" aria-label="Cara feliz con gota">
            😅
          </span>
          <br /> Upsi, no hay audios por acá.
        </OopsMessage>
      )}
    </Wrapper>
  );
}

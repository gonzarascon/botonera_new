import React, { useState, useRef, useEffect, useCallback } from "react";
import _ from "lodash";
import SVG from "react-inlinesvg";
import PropTypes from "prop-types";
import ReactHowler from "react-howler";
import { Box, Label, Play, Share } from "./styles";

function SoundButton({ sound, label, color, handlePlay, playerId, playing }) {
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState(null);
  const playerRef = useRef();

  const getFile = useCallback(async () => {
    const fileBlob = await fetch(`assets/audio/${sound}.ogg`).then(response =>
      response.blob()
    );
    setFile(fileBlob);
  }, [sound]);

  useEffect(() => {
    getFile();
  }, []);

  async function shareFile() {
    const files = [file];
    if (navigator.canShare && navigator.canShare({ files })) {
      navigator
        .share({
          title: sound.toUpperCase(),
          text: "Ey encontré esto en la botonera",
          file: files,
        })
        .then(() => console.log("Compartido exitosamente"))
        .catch(e => console.error("No se pudo compartir", e));
    }
  }

  function renderIfShareAvailable() {
    if (navigator.share) {
      return (
        <Share color={color} onClick={() => shareFile()}>
          <SVG src="./assets/icons/share.svg" title="Share" />
        </Share>
      );
    } else {
      console.log("Web Share Api no se soporta en tu dispositivo");
      return null;
    }
  }

  return (
    <Box color={color}>
      <ReactHowler
        src={[`./assets/audio/${sound}.mp3`, `./assets/audio/${sound}.ogg`]}
        playing={playing}
        onLoad={() => setLoading(false)}
        onEnd={() => handlePlay(null)}
        onPause={() =>
          !_.isEqual(playerRef.current, null) ? playerRef.current.seek(0) : null
        }
        ref={playerRef}
        html5={true}
      />
      {loading ? (
        <SVG src="./assets/icons/loader.svg" title="Loading" />
      ) : (
        <Label>{label}</Label>
      )}

      <Play
        color={color}
        onClick={() => handlePlay(playing ? null : playerId)}
        full={navigator.share ? false : true}
      >
        <SVG
          src={`./assets/icons/${playing ? "pause" : "play"}.svg`}
          title="Play / Pause"
        />
      </Play>

      {renderIfShareAvailable()}
    </Box>
  );
}

SoundButton.propTypes = {
  sound: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.object.isRequired,
};

export default SoundButton;

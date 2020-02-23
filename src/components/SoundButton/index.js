import React, { useState, useRef, useEffect, useCallback } from "react";
import _ from "lodash";
import SVG from "react-inlinesvg";
import PropTypes from "prop-types";
import ReactHowler from "react-howler";
import { Box, Label, Play, Share } from "./styles";

function SoundButton({ sound, label, color, handlePlay, playerId, playing }) {
  const [loading, setLoading] = useState(true);
  const playerRef = useRef();

  return (
    <Box color={color} onClick={() => handlePlay(playing ? null : playerId)}>
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

      <Play color={color}>
        <SVG
          src={`./assets/icons/${playing ? "pause" : "play"}.svg`}
          title="Play / Pause"
        />
      </Play>
    </Box>
  );
}

SoundButton.propTypes = {
  sound: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.object.isRequired,
};

export default SoundButton;

import React, { useState } from "react";
import SVG from "react-inlinesvg";
import PropTypes from "prop-types";
import ReactHowler from "react-howler";
import { Box, Label } from "./styles";

function SoundButton({ sound, label, color, handlePlay, playerId, playing }) {
  const [loading, setLoading] = useState(true);

  function renderLabel() {
    if (playing) {
      return (
        <SVG
          src="./assets/icons/pause.svg"
          title="Pause"
          className="pause-icon"
        />
      );
    }

    return label;
  }

  return (
    <Box color={color} onClick={() => handlePlay(playing ? null : playerId)}>
      <ReactHowler
        src={[`./assets/audio/${sound}.mp3`, `./assets/audio/${sound}.ogg`]}
        playing={playing}
        onLoad={() => setLoading(false)}
        onEnd={() => handlePlay(null)}
      />

      {loading ? (
        <SVG src="./assets/icons/loader.svg" title="Loading" />
      ) : (
        <Label>{renderLabel()}</Label>
      )}
    </Box>
  );
}

SoundButton.propTypes = {
  sound: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.object.isRequired,
};

export default SoundButton;

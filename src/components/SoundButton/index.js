import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactHowler from "react-howler";
import { Box, Label } from "./styles";

function SoundButton({ sound, label, color }) {
  return (
    <Box color={color}>
      <ReactHowler src={sound} playing={false} />
      <Label>{label}</Label>
    </Box>
  );
}

SoundButton.propTypes = {
  sound: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.object.isRequired,
};

export default SoundButton;

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./PlayBar.css";
import PlayButton from "../PlayButton";
import WaveSurfer from "wavesurfer.js";
import Minimap from "wavesurfer.js/dist/plugin/wavesurfer.minimap.js";
// import "../visualizer/visualizer.css";

// const formWaveSurferOptions = () => ({
//   container: "#waveform",
//   waveColor: "#eee",
//   progressColor: "OrangeRed",
//   cursorColor: "OrangeRed",
//   barWidth: 3,
//   barRadius: 2,
//   responsive: true,
//   height: 150,

//   // If true, normalize by the maximum peak instead of 1.0.
//   normalize: true,
//   // Use the PeakCache to improve rendering speed of large waveforms.
//   partialRender: true,
//   pixelRatio: 1,
//   plugins: [
//     Minimap.create({
//       container: "#wave-minimap",
//       waveColor: "#eee",
//       progressColor: "OrangeRed",
//       height: 50,
//     }),
//   ],
// });

const PlayBar = ({ size = 0 }) => {
  const wavesurfer = useRef(null);
  const selectedSong =
    "https://cloudify.s3.amazonaws.com/bc5f1f3feac745bbbb00cb4a25e14c3d.mp3";

  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  // create new WaveSurfer instance
  // On component mount and when url changes
  useEffect(() => {
    setPlay(false);

    wavesurfer.current = WaveSurfer.create({
      container: "#waveform",
      scrollParent: false,
      waveColor: "grey",
      progressColor: "OrangeRed",
      height: 10,
      barHeight: size,
      cursorWidth: 1,
      cursorColor: "OrangeRed",
      hideScrollbar: true,
      fillParent: true,
      partialRender: true,
    });

    wavesurfer.current.load(selectedSong, null, true);

    wavesurfer.current.on("ready", function () {
      // https://wavesurfer-js.org/docs/methods.html
      wavesurfer.current.play();
      setPlay(true);

      // make sure object stillavailable when file loaded
      if (wavesurfer) {
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => wavesurfer.current.destroy();
  }, [selectedSong]);

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };

  const onVolumeChange = (e) => {
    const { target } = e;
    const newVolume = +target.value;

    if (newVolume) {
      setVolume(newVolume);
      wavesurfer.current.setVolume(newVolume || 1);
    }
  };

  return (
    <div className="Playbar">
      <div className="player-div">
        <div className="controls">
          <div className="player_image">
            {/* <img src={`${selectedSong?.image_url}`}></img>  need song image to update*/}
          </div>
          <div className="player_songInfo">
            <div className="player_artist">{selectedSong?.artist}</div>
            <div className="player_song">{selectedSong?.title}</div>
          </div>
          <div className="playBtn">
            <button onClick={handlePlayPause}>
              {!playing ? "Play" : "Pause"}
            </button>
          </div>
        </div>
        <div id="waveform"></div>
        <div className="volume">
          <input
            type="range"
            id="volume"
            name="volume"
            // waveSurfer recognize value of `0` same as `1`
            //  so we need to set some zero-ish value for silence
            min="0.01"
            max="1"
            step=".025"
            onChange={onVolumeChange}
            defaultValue={volume}
          />
          🔊
        </div>
      </div>
    </div>
  );
};

export default PlayBar;

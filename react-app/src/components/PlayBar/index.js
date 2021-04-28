import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./PlayBar.css";
import WaveSurfer from "wavesurfer.js";

const PlayBar = ({ size = 0 }) => {
  const wavesurfer = useRef(null);
  const selectedSong = useSelector((state) => state.playing.song?.song_path);
  console.log(selectedSong);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const [muted, setMuted] = useState(false);
  const [duration, setDuration] = useState("0:00");
  const [currentTime, setCurrentTime] = useState("0:00");
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
      setDuration(toTime(Math.round(wavesurfer.current.getDuration())));
      setPlay(true);

      setInterval(function () {
        setCurrentTime(toTime(Math.round(wavesurfer.current.getCurrentTime())));
      }, 1000);

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

  const toTime = (time) => {
    const minutes = Math.round(time / 60);
    const seconds = Math.round(time % 60);
    if (seconds < 10)
      return minutes.toString() + ":" + "0" + seconds.toString();

    return minutes.toString() + ":" + seconds.toString();
  };

  const toggleMute = () => {
    setMuted(!muted);
    wavesurfer.current.toggleMute();
  };

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };

  const onVolumeChange = (e) => {
    const { target } = e;
    const newVolume = +target.value;
    if (muted) {
      setMuted(false);
    }

    if (newVolume) {
      setVolume(newVolume);
      wavesurfer.current.setVolume(newVolume || 1);
    }
  };

  return (
    selectedSong && (
      <div className="playbar-div">
        <div className="playbar">
          <div className="player-div">
            <div className="controls">
              <div className="playBtn">
                <div className="button">
                  <i className="fas fa-step-backward"></i>
                </div>
                <div className="button" onClick={handlePlayPause}>
                  {!playing ? (
                    <i className="fas fa-play"></i>
                  ) : (
                    <i className="fas fa-pause"></i>
                  )}
                </div>
                <div className="button">
                  <i className="fas fa-step-forward"></i>
                </div>
              </div>
            </div>
            <div className="current-time">
              <span>{currentTime}</span>
            </div>
            <div id="waveform"></div>
            <div className="duration">
              <span>{duration}</span>
            </div>
            <div className="volume">
              <div className="button sound" onClick={toggleMute}>
                {muted ? (
                  <i className="fas fa-volume-mute"></i>
                ) : (
                  <i className="fas fa-volume-up"></i>
                )}
              </div>
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
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PlayBar;

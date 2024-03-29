import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Track from "../Track";
import { NavLink } from "react-router-dom";
import "./PlayBar.css";
import WaveSurfer from "wavesurfer.js";
import {
  setSongPause,
  setSongPlaying,
  setCurrentSong,
} from "../../store/playing";

const PlayBar = ({ size = 0 }) => {
  const dispatch = useDispatch();
  const wavesurfer = useRef(null);
  const songs = useSelector((state) => state.songs);
  const length = Object.values(songs);
  const selectedSong = useSelector((state) => state.playing.song);
  const song = songs[selectedSong];
  const playing = useSelector((state) => state.playing?.status);
  const [volume, setVolume] = useState(0.1);
  const [muted, setMuted] = useState(false);
  const [duration, setDuration] = useState("0:00");
  const [currentTime, setCurrentTime] = useState("0:00");

  // create new WaveSurfer instance
  // On component mount and when url changes
  useEffect(() => {
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

    wavesurfer.current.load(song.song_path, null, true);

    wavesurfer.current.on("ready", function () {
      // https://wavesurfer-js.org/docs/methods.html
      wavesurfer.current.play();
      setDuration(toTime(Math.floor(wavesurfer.current.getDuration())));
      // dispatch(setSongPlaying());

      setInterval(function () {
        setCurrentTime(toTime(Math.floor(wavesurfer.current.getCurrentTime())));
      }, 1000);

      wavesurfer.current.on("finish", function () {
        wavesurfer.current.stop();
        dispatch(setSongPause());
      });

      // make sure object stillavailable when file loaded
      if (wavesurfer) {
        wavesurfer.current.setVolume(volume);
      }
    });

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => wavesurfer.current.destroy();
  }, [selectedSong]);

  const next = async (e) => {
    e.preventDefault();
    if (length.length === selectedSong)
      return await dispatch(setCurrentSong(1));
    return await dispatch(setCurrentSong(selectedSong + 1));
  };

  const prev = async (e) => {
    e.preventDefault();
    if (selectedSong === 1)
      return await dispatch(setCurrentSong(length.length));
    return await dispatch(setCurrentSong(selectedSong - 1));
  };

  const toTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.round(time % 60);
    if (seconds < 10)
      return minutes.toString() + ":" + "0" + seconds.toString();

    return minutes.toString() + ":" + seconds.toString();
  };

  const toggleMute = () => {
    setMuted(!muted);
    wavesurfer.current.toggleMute();
  };

  useEffect(() => {
    if (
      (wavesurfer.current.isPlaying() && !playing) ||
      (!wavesurfer.current.isPlaying() && playing)
    ) {
      return wavesurfer.current.playPause();
    }
  }, [playing]);
  const handlePlayPause = () => {
    if (!playing) dispatch(setSongPlaying());
    if (playing) dispatch(setSongPause());
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
                <div onClick={prev} className="button">
                  <i className="fas fa-step-backward"></i>
                </div>
                <div className="button" onClick={handlePlayPause}>
                  {!playing ? (
                    <i className="fas fa-play"></i>
                  ) : (
                    <i className="fas fa-pause"></i>
                  )}
                </div>
                <div onClick={next} className="button">
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
            <div className="track-wrapper">
              <Track song={song} button={false} />
            </div>
            <div className="track-info">
              <NavLink to={`/profile/${song.user_id}`}>
                <div>
                  <span className="">{song.title}</span>
                </div>
                <div>
                  <span className="subtitle">{song.user.username}</span>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PlayBar;

import React, {useEffect, useMemo, useState} from "react";
import {MovieContainer} from "../../styles/layout";
import {useParams} from "react-router";
import Aside from "../../components/aside";
import videojs from "video.js";
import VREPlayer from "videojs-react-enhanced";
import "video.js/dist/video-js.css";
import {MovieInfo, MovieItem, MovieList} from "../../styles/element";
import {FlexColumnDiv} from "../../styles/common";
import ReactHlsPlayer from "react-hls-player";

function MyCustomComponent() {
  const playerRef = React.useRef<any>();

  if (!playerRef.current) {
    playerRef.current = true;
  }

  function playVideo() {
    playerRef.current.play();
  }

  function pauseVideo() {
    playerRef.current.pause();
  }

  function toggleControls() {
    playerRef.current.controls = !playerRef.current.controls;
  }


  return (
      <ReactHlsPlayer
          id="player"
          playerRef={playerRef}
          src="rtmp://172.30.1.53:1935/live/test"
          onClick={playVideo}
      />
  );
}

const Movies: React.FC<any> = (props) => {
  const playerOptions: VREPlayer.IPlayerOptions = {
    src: "rtmp://172.30.1.53/live/test",
    controls: true,
    autoplay: "play",
  };
  const videojsOptions: VREPlayer.IVideoJsOptions = {
    fluid: true,
  };

  return (
      <MovieContainer>
        <Aside/>
        <MovieItem>
          <MyCustomComponent/>
          <h1>title</h1>
          <h1>seller</h1>
          <h1>date</h1>
          <h1>length</h1>
          <h1>price</h1>
          <h1>link</h1>
        </MovieItem>
        <MovieList>asdf</MovieList>
      </MovieContainer>
  );
};

export default Movies;
/*<VREPlayer
          playerOptions={playerOptions}
          videojsOptions={videojsOptions}
          onReady={(player) => console.log(player)}
          onPlay={(e, _, second) => console.log("Play!")}
          onPause={(e, _, second) => console.log("Pause!")}
          onEnded={(e, _) => console.log("Ended!")}
        />*/

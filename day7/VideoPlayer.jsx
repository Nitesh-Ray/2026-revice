import { useRef, useState, useEffect } from 'react';

function VideoPlayer() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  // Update current time as video plays
  useEffect(() => {
    const video = videoRef.current;
    const updateTime = () => setCurrentTime(video.currentTime);
    video.addEventListener('timeupdate', updateTime);
    return () => video.removeEventListener('timeupdate', updateTime);
  }, []);

  // Get duration once metadata loaded
  useEffect(() => {
    const video = videoRef.current;
    const handleLoaded = () => setDuration(video.duration);
    video.addEventListener('loadedmetadata', handleLoaded);
    return () => video.removeEventListener('loadedmetadata', handleLoaded);
  }, []);

  const handleSeek = (e) => {
    const video = videoRef.current;
    video.currentTime = e.target.value;
    setCurrentTime(video.currentTime);
  };

  const handleVolume = (e) => {
    const vol = parseFloat(e.target.value);
    videoRef.current.volume = vol;
    setVolume(vol);
  };

  const formatTime = (t) => {
    const min = Math.floor(t / 60);
    const sec = Math.floor(t % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
      <h2>Custom Video Player</h2>
      <video
        ref={videoRef}
        width="100%"
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        style={{ borderRadius: 8 }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
        <button onClick={togglePlay}>{playing ? '⏸ Pause' : '▶ Play'}</button>
        <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          style={{ flex: 1 }}
        />
      </div>
      <div style={{ marginTop: 5 }}>
        Volume:
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={handleVolume}
        />
      </div>
    </div>
  );
}

export default VideoPlayer;
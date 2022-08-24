import React, { Component, createRef } from 'react'

export default class Screenshare extends Component {

video = new createRef();
stream = new MediaStream();

startCapture = async (displayMediaOptions) => {
  let captureStream;

  try {
    captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
  this.stream.addTrack(captureStream.getVideoTracks()[0]);
  this.video.srcObject = this.stream;
}

start = async () => {
  return this.startCapture({video: true, audio: false});
}

  render() {
    return (
      <div>
        <button onClick={this.start}>Screenshare</button>
        <video ref = {video => this.video = video} width="500" height="500" autoPlay></video>
      </div>
    )
  }
}








import React, { Component } from "react";

// Import your audio file
import AudioFile from "./FLS.mp3";
import "./Aplayer.css";

class Aplayer extends Component {
  // Get audio file in a variable
  audioSong = new Audio(AudioFile);

  // Create state
  state = {
    // Set initial state of song
    isPlaying: false,
    // true
    // false
  };

  // Main function to handle both play and pause operations
  playPause = () => {
    // Get state of song
    let data = this.state.isPlaying;

    // if data is true then if statement will run!
    if (data) {
      // Pause the song if it is playing
      this.audioSong.pause();
    }

    // if data is false then else statement will run!
    else {
      // Play the song if it i s paused
      this.audioSong.play();
    }

    // Change the state of song
    // it will change the boolean (true/false)
    // !data means opposite of particular boolean
    this.setState({ isPlaying: !data });
  };

  render() {
    return (
      <>
        <div className="maindiv z-50">
          <div className="maindiv2">
            <button onClick={this.playPause}>{this.state.isPlaying ? " Playing" : " Paused"}</button>

            <p></p>
          </div>
        </div>
      </>
    );
  }
}

export default Aplayer;

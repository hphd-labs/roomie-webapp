import React, { Component } from 'react';

export default class SplashPage extends Component {
  render() {
    return (
      <div>
        <h1>Roomie</h1>
        <h3>The app for room-mates</h3>
        <img className="center-block" src="./dist/room.png"></img>
      </div>
    );
  }
}

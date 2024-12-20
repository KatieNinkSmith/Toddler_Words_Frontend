import { useState, useEffect } from "react";
import AudioPlayer from "../components/AudioPlayer";
import { Link } from "react-router";
import { createApi } from "unsplash-js";

function Welcome() {
  const API_KEY = import.meta.env.VITE_access_Key;
  const words = ["Welcome", "Colors", "Animals", "Food", "Places", "Alphabet"];
  const colorUrl =
    'url("https://images.unsplash.com/photo-1500042600524-37ecb686c775?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHJhaW5ib3d8ZW58MHx8MHx8fDA%3D")';
  const animalUrl =
    'url("https://plus.unsplash.com/premium_photo-1722100465381-a6b9ad3cb996?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHpvbyUyMGFuaW1hbHN8ZW58MHx8MHx8fDA%3D")';
  const foodUrl =
    'url("https://plus.unsplash.com/premium_photo-1734291397771-1e65a74f3e4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9kZGxlciUyMGZvb2R8ZW58MHx8MHx8fDA%3D")';
  const alphabetUrl =
    'url("https://plus.unsplash.com/premium_photo-1666739032615-ecbd14dfb543?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxwaGFiZXR8ZW58MHx8MHx8fDA%3D")';

  return (
    <div>
      <h1>Welcome</h1>
      {/* <AudioPlayer currentWordIndex={words[currentWordIndex]} /> */}
      <div className="homeLinks">
        <Link to="/colors">
          <div
            style={{
              backgroundImage: colorUrl,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              color: "black",
              fontSize: "50px",
            }}
          >
            Colors
          </div>
        </Link>
        <Link to="/animals">
          <div
            style={{
              backgroundImage: animalUrl,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              color: "black",
              fontSize: "50px",
            }}
          >
            Animals
          </div>
        </Link>
        <Link to="/food">
          <div
            style={{
              backgroundImage: foodUrl,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "black",
              fontSize: "50px",
            }}
          >
            Food
          </div>
        </Link>
        <Link to="/alphabet">
          <div
            style={{
              backgroundImage: alphabetUrl,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              color: "black",
              fontSize: "50px",
            }}
          >
            Alphabet
          </div>
        </Link>
        {/* <Link to="/places">
          <div>Places</div>
        </Link> */}
      </div>
    </div>
  );
}

export default Welcome;

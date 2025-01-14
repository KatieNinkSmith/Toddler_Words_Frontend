import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { getUser } from "../utilities/users-services";
import AddAudioElement from "../components/AudioRecorder";

function UserProfile() {
  const location = useLocation();
  const user = location.state?.user;

  // const imageUpload = document.getElementById("imageUpload");

  // imageUpload.addEventListener("change", (event) => {
  //   const file = event.target.files[0];

  //   if (file) {
  //     // Do something with the file, like preview it or upload it to a server
  //     const reader = new FileReader();

  //     reader.onload = (e) => {
  //       const previewImage = document.createElement("img");
  //       previewImage.src = e.target.result;
  //       document.body.appendChild(previewImage);
  //     };

  //     reader.readAsDataURL(file);
  //   }
  // });

  return (
    <>
      {user ? (
        <div className="profilePage">
          <div className="userProfile">
            <div> Hi! {user.name} </div>
            <p>Add a word for your child to learn</p>
            <form>
              <input placeholder="your word"></input>
              <br />
              <label>Select a category for your word</label>
              <br />
              <select>
                <option>Family</option>
                <option>Places</option>
                <option>Things</option>
                <option>Clothes</option>
              </select>
              <br />
              <input type="file" id="imageUpload" accept="image/*"></input>
              <br />
              <AddAudioElement />
              <br />
              <button>SAVE WORD</button>
            </form>
          </div>
          <div className="userAdditions">
            <input placeholder="Search for word"></input>
            <button>Search</button>
            <br />
            <select>
              <option>Family</option>
              <option>Places</option>
              <option>Things</option>
              <option>Clothes</option>
            </select>
          </div>
        </div>
      ) : (
        <div>Loading...</div> // Handle loading state if no user data is found
      )}
    </>
  );
}

export default UserProfile;

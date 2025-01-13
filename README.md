# React + Vite

URL for deployed site
https://toddler-words.netlify.app/

## I am moving this API intigrated front end into a full stack application building a back end so users can create an account and add their own words audio recordings and images for their child to learn.

my plan is to have a home page with different things ABC's, colors, animals, and food when you click it says the word outloud and then after a short delay goes to another page with a carousel of letters/words based on the catagory chosen. Each catagory is a new page and displays the letter/word and image, when the word or image are touched it will play the word sound.

I will add navigation to go back or home(start over).

All audio is pulled from an API https://dictionaryapi.dev/
Every audio clip is imported and reviewed if it exists for the word and ensure the audio clip is simply the word pronunciation.
All images are hand selected and reviewed for appropriateness for toddler to preschool age. I did pull images from unsplash's API however their matching and appropriateness is not guaranteed like hand picking each image.

Colors are most rainbow colors however orange failed to have an audio file, in the future I think i would add audio files, or find a more comprehensive API.

Animals are a large variety from around the world.

Food is close to the first 100 foods your child should try.

Counting is 1-10.

Alphabet I can not find the photonic sounds of each letter I will have to look for another api or look at adding this myself.
Page nav image https://plus.unsplash.com/premium_photo-1666739032615-ecbd14dfb543?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxwaGFiZXR8ZW58MHx8MHx8fDA%3D

Requirements
Your application must meet these requirements to pass (this it your Minimum Viable Product):

Built with HTML, CSS, JavaScript, REACT.
Hosted on GitHub pages or Netlify.
Frequent commits to GitHub.
A README.md file in your GitHub repository with:

Explanations of the technologies used.
Explanations of the approach taken.
A link to your live site.
Usage instructions, if relevant.
Unsolved problems.
etc.
Use AJAX to make a request to an external data source like OMDBapi, and insert some of the data retrieved into the DOM.

I am working on implementing a recording npm package I have gotten mic-recorder-to-mp3 coded into my application but there were errors with lame causing it to not function, i found mic-recorder-to-mp3-fixed fixed this issue and functions how ever it uses ScriptProcessorNode that is deprecated. I am looking in to the AudioWorkletNode that is implimented across all browsers now and looking at a recorder that has already been updated with this or how to update the functioning recorder above. I have found react-audio-voice-recorder and looking at implimenting it now.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# SBA-320-react-web-app

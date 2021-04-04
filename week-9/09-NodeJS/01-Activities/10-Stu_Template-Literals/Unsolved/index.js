// music should be an object with title, artist, and album properties
const music = {
  title: "Captain Jack",
  artist: "Billy Joel",
  album: "Piano Man"
  // code here
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
    <h2>${music.title}</h2>
    <p>By ${music.artist}</p>
    <p> Appears on ${music.album}</p>
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;


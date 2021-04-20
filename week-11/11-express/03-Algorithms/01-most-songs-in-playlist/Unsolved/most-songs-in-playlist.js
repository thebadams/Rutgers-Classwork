// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  // add your code here...
  let sortedArray = arr.sort((a,b)=> a-b)
  let songs = 0;
  let time = 0;

 for(let i = 0; i < sortedArray.length; i++){
   if(time + sortedArray[i] < 60){
     time = time + sortedArray[i]
     songs++
   } else {
     return songs
   }
 }

 return songs
};

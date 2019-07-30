//Reducers
const songsReducer = () => {
  //statis list of songs
  return [
    {title: 'No Scrubs', duration: '4:05'},
    {title: 'Sugar', duration: '5:00'},
    {title: 'All Star', duration: '3:15'},
    {title: 'I want it That Way', duration: '2:45'}
  ];
};

const SelectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

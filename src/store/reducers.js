import { bindActionCreators, combineReducers } from "redux";

function dataReducer(state = [], action) {
  if (action.type === "SET_DATA") {
    return action.data;
  }
  return state;
}

function playReducer(state = "pause", action) {
  switch (action.type) {
    case "PLAY":
      return "play";
    case "PAUSE":
      return "pause";
    default:
      return state;
  }
}

function currentReducer(state = {}, action) {
  switch (action.type) {
    case "SET_CURRENT_SONG":
      return action.payload;

    default:
      return state;
  }
}

function currentArtist(state = {}, action) {
  switch (action.type) {
    case "SET_CURRENT_ARTIST":
      return action.payload;

    default:
      return state;
  }
}

function currentTime(state = {}, action) {
  switch (action.type) {
    case "SONG_TIME":
      return action.payload;
    default:
      return state;
  }
}

export const reducers = combineReducers({
  datas: dataReducer,
  playStatus: playReducer,
  currentSong: currentReducer,
  currentArtist,
  currentTime,
});

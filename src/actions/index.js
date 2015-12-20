import {
  resourceData
} from "../utils/dummyData";
// import {isArray, delay, random} from "lodash";

//import config from "../../config";

export const RECEIVE_RESOURCES = "RECEIVE_RESOURCES";
export const FETCH_RESOURCES = "FETCH_RESOURCES";
function receiveResources(args) {
  const {resources, filters} = args;
  return {
    type: RECEIVE_RESOURCES,
    resources,
    filters
  };
}

function fetchResources() {
  return {
    type: FETCH_RESOURCES
  };
}

export function loadResources(args) { //can pass args
  const {filters} = args;
  return dispatch => {
    dispatch(fetchResources());
    if (resourceData){
      dispatch(receiveResources({
        resources: resourceData,
        filters
      }));
    }
  };
}


// export const RECEIVE_MOMENT = "RECEIVE_MOMENT";
// export const FETCH_MOMENT = "FETCH_MOMENT";

// function receiveMoments(args) {
//   const {moments} = args;
//   return {
//     type: RECEIVE_MOMENT,
//     moments
//   };
// }

// function fetchMoments() {
//   return {
//     type: FETCH_MOMENT
//   };
// }

// export function loadMoments(args) {
//   const {momentId} = args;
//   return dispatch => {
//     dispatch(fetchMoments());
//     fetch(`${config.apiEntry}/api/moments/${momentId}`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((moment) => {
//         dispatch(receiveMoments({
//           moments: moment
//         }));
//       });
//   };
// }

// export const RECEIVE_STORY = "RECEIVE_STORY";
// export const FETCH_STORY = "FETCH_STORY";
// function receiveStory(args) {
//   const {story} = args;
//   return {
//     type: RECEIVE_STORY,
//     story
//   };
// }

// function fetchStory() {
//   return {
//     type: FETCH_STORY
//   };
// }

// export function loadStory(args) {
//   const {storyId} = args;
//   return dispatch => {
//     dispatch(fetchStory());

//     fetch(`${config.apiEntry}/api/stories/${storyId}`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((story) => {
//         dispatch(receiveStory({
//           story
//         }));
//       });
//   };
// }

// export const RECEIVE_STORIES = "RECEIVE_STORIES";
// export const FETCH_STORIES = "FETCH_STORIES";
// function receiveStories(args) {
//   const {stories} = args;
//   return {
//     type: RECEIVE_STORIES,
//     stories
//   };
// }

// function fetchStories() {
//   return {
//     type: FETCH_STORIES
//   };
// }

// export function loadStories() { //could send args... but we're just getting all stories
//   return dispatch => {
//     dispatch(fetchStories());
//     // simulate async request
//     fetch(`${config.apiEntry}/api/stories`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((stories) => {
//         if(isArray(stories) && stories.length > 0) {
//           dispatch(receiveStories({
//             stories
//           }));
//         }
//       });
//   };
// }

// export const RECEIVE_TRANSCRIPTS = "RECEIVE_TRANSCRIPTS";
// export const FETCH_TRANSCRIPTS = "FETCH_TRANSCRIPTS";
// function fetchTranscripts() {
//   return {
//     type: FETCH_TRANSCRIPTS
//   };
// }

// function receiveTranscripts(args) {
//   const {transcripts} = args;
//   return {
//     type: RECEIVE_TRANSCRIPTS,
//     transcripts
//   };
// }

// export function loadTranscripts() { //can pass args
//   //const {momentId} = args; // TODO: use this
//   return dispatch => {
//     dispatch(fetchTranscripts());
//     // simulate async request
//     delay(() => {
//       if (dummyTranscripts) {
//         dispatch(receiveTranscripts({
//           transcripts: dummyTranscripts
//         }));
//       }
//     }, random(1, 5) * 200);
//   };
// }

// export const RECEIVE_AUDIO = "RECEIVE_AUDIO";
// // export const FETCH_AUDIO = "FETCH_AUDIO";
// // function fetchAudio() {
// //   return {
// //     type: FETCH_AUDIO
// //   };
// // }

// function receiveAudio({
//   audio, time, playing
// }) {
//   return {
//     type: RECEIVE_AUDIO,
//     playing,
//     audio,
//     time
//   };
// }

// export function loadAudio({
//   audio, time, playing
// }) {
//   return dispatch => {
//     dispatch(receiveAudio({
//       playing,
//       audio,
//       time
//     }));
//   };
// }

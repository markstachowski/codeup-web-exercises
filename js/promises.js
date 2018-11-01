$(function () {
  "use strict";

  const githubToken = 'Add Github API key here: https://github.com/settings/tokens';

  const wait = (delay) => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(`You'll see this after ${delay / 1000} second(s)`);
      }, delay);
  });
}

wait(1000).then((message) => console.log(message));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// const checkLastName = (userName) => {
//   fetch(`https://api.github.com/users/${userName}/events`, {
//     headers: new Headers({
//       'User-agent': 'Mozilla/4.0 Custom User Agent',
//       'Authorization': githubToken
//     })
//   })
//       .then(response => response.json())
//       .then(events => {
//         console.log(events)
//       for(let event of events) {
//         if (event.type === 'PushEvent') {
//           console.log(event.payload.commits[0]);
//           console.log(event.created_at);
//           return 0;
//         }
//       }
//     })
//       .catch(error => console.error(error))
// };
//   checkLastName("markstachowski");

  const token = "Enter token here";
  const githubApiBaseUrl = "";

  const getMostRecentCommit = (username) => {
    const userEventsEndpoint = `/users/${username}/events/public`;
    return fetch(githubApiBaseUrl + userEventsEndpoint, options);
  }


  $('#submit-btn').click(function (evt) {
    evt.preventDefault();
    console.log("Clicked");

  })


}());

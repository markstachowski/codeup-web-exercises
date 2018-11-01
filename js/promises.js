(function () {
  "use strict";

  const githubToken = 'Add Github API key here: https://github.com/settings/tokens';

  const wait = (delay) => {
  return new Promise(function(resolve) {
    setTimeout(resolve, delay);
  });
}

//wait(1000).then(() => console.log('You\'ll see this after 1 second'));
//wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const checkLastName = (userName) => {
  fetch('https://api.github.com/users/' + userName + '/events', {
    headers: new Headers({
      'User-agent': 'Mozilla/4.0 Custom User Agent',
      'Authorization': githubToken
    })
  })
      .then(response => response.json())
      .then(events => {
        console.log(events)
      for(let event of events) {
        if (event.type === 'PushEvent') {
          console.log(event.payload.commits[0]);
          console.log(event.created_at);
          return 0;
        }
      }
    })
      .catch(error => console.error(error))
};
  checkLastName("markstachowski");

}());

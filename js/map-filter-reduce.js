const users = [
  {
    id: 1,
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript'],
    yearsOfExperience: 5
  },
  {
    id: 2,
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php'],
    yearsOfExperience: 6
  },
  {
    id: 3,
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash'],
    yearsOfExperience: 7
  },
  {
    id: 4,
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql'],
    yearsOfExperience: 8
  },
  {
    id: 5,
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php'],
    yearsOfExperience: 9
  }
];

// const checkLang = () => users.languages > 1;
// console.log(checkLang);

let threeLang = users.filter((user) => user.languages.length >= 3);
//console.log(threeLang);

let emailAddress = users.map(user => user.email);
//console.log(emailAddress);

let totalYrs = users.reduce(
    ( accumulator, currentValue ) => accumulator + currentValue.yearsOfExperience,
    (100 * 1) - 100); // <- That's a joke... it's 0.
//console.log(totalYrs);
let avg = totalYrs / users.length;
//console.log(avg);

let longest = users.reduce((a, b) => a.email.length > b.email.length ? a : b);
//console.log(longest);

const longestEmail = users.reduce((prev, curr) => {
  if (prev.length < curr.email.length) {
    return curr.email;
  } return prev;
  }, "");
//console.log(longestEmail);

let singleString = users.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue.name + ", ";
}, "");

singleString = singleString.substring(0, singleString.length -2) + ".";
//console.log(singleString);
// Second way of doing singleString
let nameString = users.reduce((accumulator, user, index) => {
  let lastChar = ", ";

  if (index === users.length -1) {
    lastChar = ".";
  }
  return accumulator + user.name + lastChar;
}, "");
//console.log(nameString);

let contactInfo = users.map(({name, email}) => {
  return {
    name,
    email
  }
});
//console.log(contactInfo);
// Second way of doing contactInfo
let moreContactInfo = users.map(({name, email}) => {return {name, email};
console.log(moreContactInfo);

// Use reduce to get the unique list of languages from the list of users.
let languages = users.reduce((accumulator, user) => {
  user.languages.map(language => {
    accumulator.push(language);
  });
  return accumulator;
}, []);
languages = new Set(languages); // Set gets only unique properties, "use it to sort out all duplicates".
languages = Array.from(languages); // using Set again to create a new Array.
languages = languages.toString();
//console.log(languages);


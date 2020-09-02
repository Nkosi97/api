// function fetchUserData(){

//     // const url = 'https://api.github.com/repos/Nkosi97/level1programming'
//     const fetch = require("node-fetch");
    
//     fetch('https://api.github.com/users/Nkosi97')

//       .then(res => res.json())
//       .then(user => {
//         console.log(user);
//       })
//       .catch(err => {
//         console.error(err);
//       });
// }

// fetchUserData()
const fetch = require("node-fetch");
function api(repoName){
  fetch(`https://api.github.com/repos/${repoName}/commits/6cdecd2057c843ee86831641df7a05bf47735f38`)
    .then(res => res.json())
    .then(json => console.log(json));

}
api("Nkosi97/level1programming")

// module.export = {fetchUserData}
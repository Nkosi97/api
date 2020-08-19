function fetchUserData(){

    // const url = 'https://api.github.com/repos/Nkosi97/level1programming'
    const fetch = require("node-fetch");
    
    fetch('https://api.github.com/users/Nkosi97')

      .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        return res.json().followers;
      })
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.error(err);
      });
}
fetchUserData()

module.export = {fetchUserData}
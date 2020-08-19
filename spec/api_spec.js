const fetchUserData = require("../src/app")
const fetch = require("node-fetch");

describe("fetchUserData function", () => {
    it(`should fetch user data from api`, () => {
      expect(fetch('https://api.github.com/repos/Nkosi97/level1programming')).toBe()
    });

   
  });
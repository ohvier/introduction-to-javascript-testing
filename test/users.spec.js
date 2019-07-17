const assert = require("assert");

const { findUserByEmail, findUserById } = require("../users");

describe("the findUserByEmail function", () => {
  it("finds a user by email", done => {
    findUserByEmail("emily@gates.co.za").then(response => {
      assert.equal(response.message, "User found successfully.");
      done();
    });
  });
});

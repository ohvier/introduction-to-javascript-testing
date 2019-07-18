//const assert = require("assert");

const { findUserByEmail, findUserById } = require("../users");

describe("the findUserByEmail function", () => {
  it("finds a user by email", done => {
    findUserByEmail("emily@gates.co.za").then(response => {
      //   assert.equal(response.message, "User found successfully.");

      expect(response.message).toBe("User found successfully.");
      done();
    });
  });

  it("finds a user by email (Using the return promise method)", () => {
    return findUserByEmail("emily@gates.co.za").then(response => {
      // assert.equal(response.message, "User found successfully.");

      expect(response.message).toBe("User found successfully.");
    });
  });

  it("finds a user by email (Using async/await )", async () => {
    const response = await findUserByEmail("bahdcoder@gmail.com");
    //  assert.equal(response.message, "User found successfully.");
    expect(response.message).toBe("User found successfully.");
  });

  it("rejects with error if user with email was not found", () => {
    // return findUserByEmail("xyz@com").then(
    //   () => {
    //     assert.fail("Expected findUserByEmail function to reject.");
    //   },
    //   error => {
    //     assert.equal(error.message, "User with email: xyz@com was not found.");
    //   }
    // );
    const actual = findUserByEmail("xyz@com");
    expect(actual).rejects.toEqual(
      new Error("User with email: xyz@com was not found.")
    );
  });
});

describe("The findUserById function", () => {
  it("should find a user by id", async () => {
    const response = await findUserById(1);
    // assert.equal(response.message, "User found successfully.");
    expect(response.message).toBe("User found successfully.");
  });

  it("should reject if user is not found by id", () => {
    // return findUserById(90).then(
    //   () => {
    //     assert.fail("Expected findUserById function to throw.");
    //   },
    //   error => {
    //     assert.equal(error.message, "User with id: 90 was not found.");
    //   }
    // );

    const actual = findUserById(90);
    expect(actual).rejects.toEqual(
      new Error("User with id: 90 was not found.")
    );
  });
});

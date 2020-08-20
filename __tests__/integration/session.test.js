const { User } = require("../../src/app/models");

describe("Authentication", () => {
  // it("It should received JWT token when authenticated with valid credentials", () => {});

  it("should sum two numbers", async () => {
    console.log("DSDJADJKNASJD");
    const user = await User.create({
      name: "Mathedwus",
      email: "mathdwus@email.com",
      password_hash: "98273827382",
    });

    console.log("USER", user);

    expect(user.email).toBe("mathdwus@email.com");
  });
});

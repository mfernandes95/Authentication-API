const bcrypt = require("bcryptjs");

const { User } = require("../../src/app/models");

const truncate = require("../utils/truncate");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "Waizer",
      email: "waizer@email.com",
      password: "123456",
    });

    // const compareHash = await bcrypt.compare(
    //   "123456",
    //   user.password_hash,
    //   function (err, result) {
    //     console.log("err", err);
    //     console.log("res", result);
    //   }
    // );

    const compareHash = await bcrypt.compare("123456", user.password_hash);

    expect(compareHash).toBe(true);
  });
});

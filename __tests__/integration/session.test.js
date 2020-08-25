const request = require("supertest");

const app = require("../../src/app");

const { User } = require("../../src/app/models");

const truncate = require("../utils/truncate");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  // it("It should received JWT token when authenticated with valid credentials", () => {});

  it("should authenticate with valid credentials", async () => {
    const user = await User.create({
      name: "Matheus",
      email: "matheuss@email.com",
      password: "123456",
    });

    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123456",
    });

    expect(response.status).toBe(200);
  });

  it("should not authenticate with invalid credentials", async () => {
    const user = await User.create({
      name: "Matheus",
      email: "matheuss@email.com",
      password: "123123",
    });

    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123456",
    });

    expect(response.status).toBe(401);
  });

  it("should return jwt token when authenticated", async () => {
    const user = await User.create({
      name: "Matheus",
      email: "matheuss@email.com",
      password: "123123",
    });

    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123123",
    });

    console.log("TOKENNNNN", response.body);

    expect(response.body).toHaveProperty("token");
  });
});

const require = require("supertest");
const server = require("../createServer");
const expect = require("chai").expect;

describe("API tests", () => {
  let api;

  before(() => {
    api = server.listen(5000, () =>
      console.log("\nTesting server is online\n")
    );
  });

  after((done) => {
    console.log("\nServer is Offline\n");
    api.close(done);
  });

  //Tests:
  it("returns greeting at /", (done) => {
    request(api).get("/").expect(200, done);
  });

  it("responds to /weiland", (done) => {
    request(api).get("/weiland").expect(200, done);
  });

  it("responds to /weiland/random", (done) => {
    request(api).get("/weiland/random").expect(200, done);
  });
});

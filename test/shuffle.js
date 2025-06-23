import { expect } from "chai";
import { describe, it } from "mocha";
import { shuffle } from "../starter/src/shuffle.js";

describe("Shuffle", () => {
  it("should shuffles the indexes of an array", () => {
    let array = [1, 2, 3, 4];

      expect(shuffle(array).sort()).to.be.deep.equal(array.sort());
      expect(shuffle(array)).to.be.not.deep.equal(array);
  });
});

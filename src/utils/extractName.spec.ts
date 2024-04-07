import { extractName } from "./extractName";
describe("extractNameAndServer", () => {
  it("should extract name and server correctly", () => {
    const url =
      "https://raider.io/characters/us/blackwater-raiders/Lilith?utm_source=addon";
    const expectedResult = "us/blackwater-raiders/Lilith";

    const result = extractName(url);
    expect(result).toBe(expectedResult);
  });

  it("should return null for invalid URLs", () => {
    const invalidUrl = "https://example.com/not-raider-io";
    const result = extractName(invalidUrl);
    expect(result).toBeNull();
  });

  it("should return null for incomplete URLs", () => {
    const incompleteUrl = "https://raider.io/characters/us/blackwater-raiders";
    const result = extractName(incompleteUrl);
    expect(result).toBeNull();
  });
});

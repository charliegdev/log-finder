import { extractCharacterInfo, CharacterInfo } from "./extractCharacterInfo";

describe("extractCharacterInfo", () => {
  it("should extract character info correctly", () => {
    const url =
      "https://raider.io/characters/us/blackwater-raiders/Lilith?utm_source=addon";
    const expectedResult: CharacterInfo = {
      region: "us",
      realm: "blackwater-raiders",
      characterName: "Lilith",
    };

    const result = extractCharacterInfo(url);
    expect(result).toEqual(expectedResult);
  });

  it("should return null for invalid URLs", () => {
    const invalidUrl = "https://example.com/not-raider-io";
    const result = extractCharacterInfo(invalidUrl);
    expect(result).toBeNull();
  });

  it("should return null for incomplete URLs", () => {
    const incompleteUrl = "https://raider.io/characters/us/blackwater-raiders";
    const result = extractCharacterInfo(incompleteUrl);
    expect(result).toBeNull();
  });
});

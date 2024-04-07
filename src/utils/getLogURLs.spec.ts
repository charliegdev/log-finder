import { getMPlusDamageURL, getRaidDamageURL } from "./getLogURLs";
import { CharacterInfo } from "./extractCharacterInfo";

describe("getMPlusDamageURL", () => {
  it("should generate correct URL with basic character info", () => {
    const characterInfo: CharacterInfo = {
      region: "us",
      realm: "blackwater-raiders",
      characterName: "Lilith",
    };

    const expectedUrl =
      "https://www.warcraftlogs.com/character/us/blackwater-raiders/Lilith?zone=36#metric=dps";
    const result = getMPlusDamageURL(characterInfo);

    expect(result).toBe(expectedUrl);
  });
});

describe("getRaidDamageURL", () => {
  it("should generate correct URL with basic character info", () => {
    const characterInfo: CharacterInfo = {
      region: "us",
      realm: "blackwater-raiders",
      characterName: "Lilith",
    };

    const expectedUrl =
      "https://www.warcraftlogs.com/character/us/blackwater-raiders/Lilith#"; // Updated
    const result = getRaidDamageURL(characterInfo);

    expect(result).toBe(expectedUrl);
  });
});

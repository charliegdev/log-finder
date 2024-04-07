import { CharacterInfo } from "./extractCharacterInfo";
export const getMPlusDamageURL = (characterInfo: CharacterInfo): string => {
  const { region, realm, characterName } = characterInfo;
  // * https://www.warcraftlogs.com/character/us/blackwater-raiders/Lilith?zone=36#metric=dps
  return `https://www.warcraftlogs.com/character/${region}/${realm}/${characterName}?zone=36#metric=dps`;
};

export const getRaidDamageURL = (characterInfo: CharacterInfo): string => {
  const { region, realm, characterName } = characterInfo;
  // * https://www.warcraftlogs.com/character/us/blackwater-raiders/Lilith#
  return `https://www.warcraftlogs.com/character/${realm}/${region}/${characterName}#`;
};

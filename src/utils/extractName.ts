export const extractName = (raiderioUrl: string): string | null => {
  try {
    const url = new URL(raiderioUrl);

    const pathParts = url.pathname.trim().split("/");

    // Adjust for the leading empty element
    if (pathParts.length >= 4 && pathParts[1] === "characters") {
      // Start at index 1
      const region = pathParts[2];
      const realm = pathParts[3];
      const characterName = pathParts[4];

      if (region && realm && characterName) {
        return `${region}/${realm}/${characterName}`;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

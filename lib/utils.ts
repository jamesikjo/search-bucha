import { KombuchaSearchResult } from "@/types/kombucha";

export const aggregateCounts = (kombuchas: KombuchaSearchResult[]) => {
  let typeCounts: Record<string, number> = {};
  let flavorCounts: Record<string, number> = {};

  kombuchas.forEach((kombucha) => {
    typeCounts[kombucha.type] = (typeCounts[kombucha.type] || 0) + 1;

    kombucha.flavorToKombuchaConnection.forEach((flavor) => {
      flavorCounts[flavor.name] = (flavorCounts[flavor.name] || 0) + 1;
    });
  });

  return { typeCounts, flavorCounts };
};

export const filterKombuchas = (
  kombuchas: KombuchaSearchResult[],
  filters: { types: string[]; flavors: string[] },
) => {
  return kombuchas.filter(
    (kombucha) =>
      (filters.types.length === 0 || filters.types.includes(kombucha.type)) &&
      (filters.flavors.length === 0 ||
        kombucha.flavorToKombuchaConnection.some((flavor) =>
          filters.flavors.includes(flavor.name),
        )),
  );
};

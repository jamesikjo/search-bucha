import { Kombucha, Brewery, Flavor } from "@prisma/client";

export interface FilterOptionsByCateg {
  types: string[];
  flavors: string[];
}

export interface KombuchaSearchResult extends Kombucha {
  brewery: Brewery;
  flavorToKombuchaConnection: Flavor[];
}

export enum KombuchaType {
  Kombucha = "Kombucha",
  CaffeinatedKombucha = "Kombucha - Caffeinated",
  HardKombucha = "Hard Kombucha",
  HardJun = "Hard Jun",
  CBDKombucha = "Kombucha - CBD",
  Jun = "Jun",
}

export enum TypeBgColor {
  Amber200 = "amber-200",
  Blue200 = "blue-200",
  Red200 = "red-200",
  Green200 = "green-200",
}

import { KombuchaType, TypeBgColor } from "@/types/kombucha";

interface FlavorChipsProps {
  flavors: { name: string }[];
}

const PRESET_FLAVOR_BG_COLORS = ["bg-green-200", "bg-amber-200", "bg-cyan-200"];

export const FlavorChips = ({ flavors }: FlavorChipsProps) => {
  const getChipColor = (idx: number) =>
    PRESET_FLAVOR_BG_COLORS[idx] || "bg-gray-200";

  return (
    <div className="flex items-center justify-between gap-2">
      {flavors.map(({ name }, idx) => (
        <span
          key={name}
          className={`rounded ${getChipColor(
            idx,
          )} px-2.5 py-0.5 text-xs font-medium text-gray-700`}
        >
          {name}
        </span>
      ))}
    </div>
  );
};

interface TypeChipProps {
  type: KombuchaType;
}

export const TypeChip = ({ type }: TypeChipProps) => {
  const typeColorMap: { [K in KombuchaType]: string } = {
    [KombuchaType.Kombucha]: `bg-${TypeBgColor.Amber200}`,
    [KombuchaType.CaffeinatedKombucha]: `bg-${TypeBgColor.Blue200}`,
    [KombuchaType.HardKombucha]: `bg-${TypeBgColor.Red200}`,
    [KombuchaType.HardJun]: `bg-${TypeBgColor.Red200}`,
    [KombuchaType.CBDKombucha]: `bg-${TypeBgColor.Green200}`,
    [KombuchaType.Jun]: `bg-${TypeBgColor.Green200}`,
  };

  return (
    <span
      className={`rounded ${
        typeColorMap[type] || "bg-gray-200"
      } px-2.5 py-1 text-xs font-medium text-gray-700`}
    >
      {type}
    </span>
  );
};

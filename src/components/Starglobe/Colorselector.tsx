type BaseColor =
  | "red"
  | "silver"
  | "turquoise"
  | "yellow"
  | "brown"
  | "green"
  | "orange"
  | "pink"
  | "purple";

interface Props {
  selectedColor: BaseColor;
  onSelect: (color: BaseColor) => void;
}

const colors: { name: BaseColor; color: string }[] = [
  { name: "brown", color: "#A26C36" },
  { name: "red", color: "#DE5C51" },
  { name: "orange", color: "#F9A63C" },
  { name: "yellow", color: "#F5E04D" },
  { name: "green", color: "#B8DB66" },
  { name: "turquoise", color: "#6DD6CD" },
  { name: "purple", color: "#B49AE2" },
  { name: "silver", color: "#D3D3D3" },
  { name: "pink", color: "#F4B5CD" },
];

export default function ColorSelector({ selectedColor, onSelect }: Props) {
  return (
    <div className="w-[334px]">
      <p
        className="text-[24px] font-taviraj text-white mb-2"
        style={{
          textShadow: "0 0 4px #FFFFFF",
        }}
      >
        Color
      </p>

      <div className="flex gap-2 h-[30px]">
        {colors.map(({ name, color }) => (
          <button
            key={name}
            onClick={() => onSelect(name)}
            className={`w-[30px] h-[30px] rounded border-2 ${
              selectedColor === name ? "border-white" : "border-transparent"
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}

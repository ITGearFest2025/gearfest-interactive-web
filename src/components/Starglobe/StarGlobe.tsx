import globe from "@/assets/starglobe/globeonly.png";

interface Props {
  baseImage: string;
}

export default function StarGlobe({ baseImage }: Props) {
  return (
    <div className="relative w-[295.31px] h-[295.31px]">
      <img
        src={globe.src}
        alt="Globe"
        className="absolute top-3 left-1/2 -translate-x-1/2 w-[260px] z-10 pointer-events-none"
      />

      <img
        src={baseImage}
        alt="Base"
        className="absolute bottom-[-21px] left-1/2 -translate-x-1/2 w-[331.74px] z-20 pointer-events-none"
      />

    </div>
  );
}

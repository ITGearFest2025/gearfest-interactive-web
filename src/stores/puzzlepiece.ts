import { type PuzzlePiece } from "../lib/interface/puzzlepiece";

export const puzzlePieces: PuzzlePiece[] = [
  {
    id: "piece1",
    path: "M50 0L65 40L50 25L35 40L50 0", // ส่วนบน
    dropZoneX: 50,
    dropZoneY: 20,
  },
  {
    id: "piece2",
    path: "M65 40L100 50L65 60L50 25L65 40", // ส่วนขวาบน
    dropZoneX: 75,
    dropZoneY: 50,
  },
  {
    id: "piece3",
    path: "M65 60L80 100L50 75L50 60L65 60", // ส่วนขวาล่าง
    dropZoneX: 65,
    dropZoneY: 75,
  },
  {
    id: "piece4",
    path: "M20 100L50 75L50 60L35 60L20 100", // ส่วนซ้ายล่าง
    dropZoneX: 35,
    dropZoneY: 75,
  },
  {
    id: "piece5",
    path: "M0 50L35 40L50 25L35 60L0 50", // ส่วนซ้ายบน
    dropZoneX: 25,
    dropZoneY: 50,
  },
 
];

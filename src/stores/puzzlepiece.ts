import { type PuzzlePiece } from "../lib/interface/puzzlepiece";

export const puzzlePieces: PuzzlePiece[] = [
  {
    id: "piece1",
    path: "M50 10L61.5 35.5L50 45L38.5 35.5L50 10Z",
    dropZoneX: 50,
    dropZoneY: 30,
  },
  {
    id: "piece2",
    path: "M61.5 35.5L90 50L61.5 64.5L50 45L61.5 35.5Z",
    dropZoneX: 70,
    dropZoneY: 50,
  },
  {
    id: "piece3",
    path: "M61.5 64.5L75 90L50 75L50 64.5L61.5 64.5Z",
    dropZoneX: 62.5,
    dropZoneY: 70,
  },
  {
    id: "piece4",
    path: "M25 90L50 75L50 64.5L38.5 64.5L25 90Z",
    dropZoneX: 37.5,
    dropZoneY: 70,
  },
  {
    id: "piece5",
    path: "M10 50L38.5 35.5L50 45L38.5 64.5L10 50Z",
    dropZoneX: 30,
    dropZoneY: 50,
  },
];

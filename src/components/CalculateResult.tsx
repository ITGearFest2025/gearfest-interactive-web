import { userAnswer } from "@/stores/userAnswer";
import { userResult } from "@/stores/userResult";
import { navigate } from "astro:transitions/client";

function findMaxType(scores: number[]): number {
  const groups = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 1],
  ];

  // Find max score
  const maxScore = Math.max(...scores);

  // Find types with max score
  let maxTypes: number[] = [];
  scores.forEach((score, index) => {
    if (score === maxScore) {
      maxTypes.push(index + 1); // Type index is 1-based
    }
  });

  if (maxTypes.length === 1) return maxTypes[0];

  // Calculate group sums
  let groupSums = groups.map((group) =>
    group.reduce((sum, type) => sum + scores[type - 1]),
  );

  let groupCal = [];

  groupCal.push(
    maxScore === scores[1] || maxScore === scores[2] || maxScore === scores[3]
      ? groupSums[0]
      : 0,
  );
  groupCal.push(
    maxScore === scores[4] || maxScore === scores[5] || maxScore === scores[6]
      ? groupSums[1]
      : 0,
  );
  groupCal.push(
    maxScore === scores[7] || maxScore === scores[8] || maxScore === scores[0]
      ? groupSums[2]
      : 0,
  );

  // Find the max group sum
  const maxGroupSum = Math.max(...groupCal);
  let chosenGroupIndex = groupCal.indexOf(maxGroupSum);

  // Find max types in that group
  let chosenGroup = groups[chosenGroupIndex];
  let finalCandidates = chosenGroup.filter(
    (type) => scores[type - 1] === maxScore,
  );

  // Random selection if multiple candidates
  return finalCandidates.length === 1
    ? finalCandidates[0]
    : finalCandidates[Math.floor(Math.random() * finalCandidates.length)];
}

const mapType = [
  "reformer",
  "helper",
  "achiever",
  "individualist",
  "investigator",
  "loyalist",
  "enthusiast",
  "challenger",
  "peacemaker",
];

const calculateResult = () => {
  const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) =>
    parseInt(userAnswer.get()["type" + item.toString()], 10),
  );
  const resultType = findMaxType(scores);
  userResult.setKey("result", mapType[resultType - 1]);

  const redirectUrl = `/result/${userResult.get()["result"]}`;
  setTimeout(() => {
    navigate(redirectUrl);
  }, 300);
};

export default calculateResult;

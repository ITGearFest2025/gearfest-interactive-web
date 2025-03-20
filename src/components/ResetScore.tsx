import { userAnswer } from "@/stores/userAnswer";
const ResetScore = () => {
  const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
    const typeName = "type" + item.toString();
    userAnswer.setKey(typeName, "0");
  });
};

export default ResetScore;

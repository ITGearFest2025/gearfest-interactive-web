import { userAnswer } from "@/stores/userAnswer";
import { userLongAnswer } from "@/stores/userLongAnswer";
const ResetScore = () => {
  const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
    const typeName = "type" + item.toString();
    userAnswer.setKey(typeName, "0");
  });
  const longAnswer = ["userAnswer", "tellUs", "wish"].map((item) => {
    userLongAnswer.setKey(item, "");
  });
};

export default ResetScore;

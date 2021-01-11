export const questionInterface = (data = {}) => {
  return {
    category: data.category || "",
    correct_answer: data.correct_answer?.toLowerCase() || "",
    difficulty: data.difficulty || "",
    incorrect_answers: data.incorrect_answers || [],
    question: data.question || "",
    type: data.type || "",
    isCorrect: data.isCorrect !== undefined ? data.isCorrect : null,
  };
};

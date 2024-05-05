import { Card } from "@astrojs/starlight/components";

interface IQuestionOption {
  content: string;
  isCorrect: boolean;
}

interface IQuestionProps {
  question: string;
  questionId: string;
  options: IQuestionOption[];
}

const Question = (props: IQuestionProps) => {
  const questionContent = props.question;
  const

  return (
    <Card title={questionContent}>
      <ul>
        {options.map((option, index) => (
          <li>
            <input
              type={isSingleChoice ? "radio" : "checkbox"}
              name="quiz"
              id={`${questionId}-option-${index}`}
            />
            <label for={`${questionId}-option-${index}`}>
              {option.content}
            </label>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Question;

import { useState } from "react";

interface IQuestionOption {
    content: string;
    isCorrect: boolean;
}

interface IQuestionProps {
    id: string;
    question: string;
    options: IQuestionOption[];
}

const Question = (props: IQuestionProps) => {
    const [allInputsDisabled, setAllInputsDisabled] = useState<boolean>(false);

    const questionContent = props.question;
    const isSingleChoice = props.options.filter((option) => option.isCorrect).length === 1;

    const highlightCorrectAnswer = (element: React.ChangeEvent<HTMLInputElement>, option: IQuestionOption) => {
        const parentElement = element.target.parentElement;

        if (parentElement === null) {
            return;
        }

        if (!element.currentTarget.checked) {
            parentElement.classList.remove("bg-green-100", "bg-red-100");
        } else {
            if (option.isCorrect) {
                parentElement.classList.add("bg-green-100");
            } else {
                parentElement.classList.add("bg-red-100");
            }

            if (isSingleChoice) {
                setAllInputsDisabled(true);
            } else {
                element.currentTarget.disabled = true;
            }
        }
    };

    return (
        <div className="overflow-hidden rounded-md border border-gray-300 bg-white mx-4 mt-4 px-4 py-4">
            <label className="flex text-lg font-semibold text-black px-4 pt-4">{questionContent}</label>
            <ul role="list" className="list-none px-1">
                <fieldset disabled={allInputsDisabled} className="divide-y divide-gray-200">
                    {props.options.map((option, index) => (
                        <li key={index} className="px-4 py-4 rounded-md">
                            <input
                                id={`${props.id}-${index}`}
                                name={`${props.id}`}
                                type={isSingleChoice ? "radio" : "checkbox"}
                                onChange={(element) => highlightCorrectAnswer(element, option)}
                                className="h-4 w-4 rounded border-gray-300"
                            />
                            <label htmlFor={`${props.id}-${index}`} className="text-base ml-4">
                                {option.content}
                            </label>
                        </li>
                    ))}
                </fieldset>
            </ul>
        </div>
    );
};

export default Question;

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
    const questionContent = props.question;

    const isSingleChoice =
        props.options.filter((option) => option.isCorrect).length === 1;

    return (
        <div>
            <p>{questionContent}</p>
            <ul role="list" className="divide-y divide-gray-200">
                {props.options.map((option, index) => (
                    <li key={index} className="px-4 py-4 sm:px-0">
                        <input
                            id={`${props.id}-${index}`}
                            name={`${props.id}`}
                            type={isSingleChoice ? "radio" : "checkbox"}
                            onChange={(element) => {
                                const parent =
                                    element.currentTarget.parentElement;
                                if (parent == null) {
                                    return;
                                }

                                if (option.isCorrect) {
                                    parent.classList.add("bg-green-200");
                                } else {
                                    parent.classList.add("bg-red-200");
                                }
                            }}
                        />
                        <label htmlFor={`${props.id}-${index}`}>
                            {option.content}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Question;

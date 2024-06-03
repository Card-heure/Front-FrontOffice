import {useState} from 'react';

export default function TestQuestions() {

    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [qaCount, setQACount] = useState(0);
    const [saveButton, setSaveButton] = useState("hidden");
    const [singleOrPlural, setSingleOrPlural] = useState("Test Question");

    // @ts-ignore
    const handleQuestionChange = (event) => {
        setCurrentQuestion(event.target.value);
    };

    // @ts-ignore
    const handleAnswerChange = (event) => {
        setCurrentAnswer(event.target.value);
    };

    // @ts-ignore
    const handleSave = (event) => {
        if (currentQuestion.trim() !== '' && currentAnswer.trim() !== '' && event.key === 'Enter') {
            // @ts-ignore
            const newQA = ([...questions, {question: currentQuestion.trim(), answer: currentAnswer.trim()}]);
            localStorage.setItem('newTest', JSON.stringify(newQA));
            // @ts-ignore
            setQuestions(newQA);
            setCurrentQuestion('');
            setCurrentAnswer('');
            setQACount(newQA.length);

            if (newQA.length > 0) {
                setSaveButton("saveSet w-[250px] mx-[auto] border-[1px] border-[solid] border-[black] text-[115%] text-[white] font-light min-h-[55px] rounded-[20px] bg-[rgb(18,_18,_18)]")
            }

            if (newQA.length > 1) {
                setSingleOrPlural("Test Questions");
            }
        }
    };

    return (
        <>
            <div>
                <div className = "flex justify-around w-[80%] mx-[auto] h-[auto]">
                    <div className = "questionEntry w-[40%] justify-center mx-[auto] flex flex-wrap">
                        <h2 className = "questionHeader text-center font-light italic text-[120%] w-[100%] h-[50px] mb-[20px]">Question</h2>
                        <textarea
                            className = "questionSide focus:outline-none h-[85px] w-[95%] border-[1px] border-[solid] border-[black] rounded-[15px] p-[5%] font-light overflow-hidden"
                            id = "questionSide"
                            value = {currentQuestion}
                            onChange = {handleQuestionChange}
                            onKeyDown = {handleSave}
                        />

                        {questions.slice().reverse().map((question, index) => (
                            <div className = "questionList flex-wrap w-[95%] mt-[45px]" key={index}>
                                <h3 className = "qaBox w-[100%]"> {question["question"]} </h3>
                            </div>
                        ))}
                    </div>

                    <div className = "h-[auto] border-r-[1px] border-r-[black] border-r-[solid]"></div>

                    <div className = "answerEntry w-[40%] justify-center mx-[auto] flex flex-wrap">
                        <h2 className = "answerHeader text-center font-light italic text-[120%] w-[100%] h-[50px] mb-[20px]">Answer</h2>
                        <textarea
                            className = "answerSide focus:outline-none h-[85px] w-[95%] border-[1px] border-[solid] border-[black] rounded-[15px] p-[5%] font-light overflow-hidden"
                            value = {currentAnswer}
                            onChange = {handleAnswerChange}
                            onKeyDown = {handleSave}
                        />

                        {questions.slice().reverse().map((question, index) => (
                            <div className = "answerList flex-wrap w-[95%] mt-[45px]" key={index}>
                                <h3 className = "qaBox w-[100%]">{question["answer"]}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                <div className = "questionCountAndSave flex mt-[75px] mb-[75px] w-[100%]">
                    <button
                        className = {saveButton}>
                        <a href = "http://localhost:5173/home/newSubject/newflashcard/StudyFlashCardSet">
                            Save {qaCount} {singleOrPlural}
                        </a>
                    </button>
                </div>

            </div>
        </>
    )
}
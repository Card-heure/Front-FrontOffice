import {useState} from 'react';
import {TCard, TCreateCard} from "../../../Types/TCard.ts";
import {ECardType} from "../../../Types/enum/ECardType.ts";
import {apiRequest} from "../../../Utils/ApiRequest.ts";
import {TTest} from "../../../Types/TTest.ts";
import {useNavigate} from "react-router-dom";

export default function TestQuestions(props: {cardTitle: string, subjectId: number }) {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<TTest[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [qaCount, setQACount] = useState(0);
  const [saveButton, setSaveButton] = useState("hidden");
  const [singleOrPlural, setSingleOrPlural] = useState("Test Question");

  function saveCard() {
    const createCard:TCreateCard = {} as TCreateCard;
    createCard.title = props.cardTitle;
    createCard.content = JSON.stringify(questions);
    createCard.content_type = ECardType.Test;
    createCard.subject_id = props.subjectId;
    apiRequest<TCreateCard, TCard>(`api/card`, 'POST', createCard).then(() => {
      navigate(`/SubjectView/${props.subjectId}`);
    })
  }
  const autoResize = ({textarea}: { textarea: any }) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  const resetSize = () => {
    // @ts-ignore
    document.getElementById(`questionSide`).setAttribute('style', 'height: 75px;');
    // @ts-ignore
    document.getElementById(`answerSide`).setAttribute('style', 'height: 75px;');
  }

  const resetCursorToBeginning = (input: HTMLInputElement | HTMLTextAreaElement): void => {
    input.setSelectionRange(0, 0);
    input.focus();
  };

  // @ts-ignore
  const handleQuestionChange = (event) => {
    setCurrentQuestion(event.target.value);
    autoResize({textarea: event.target})
  };

  // @ts-ignore
  const handleAnswerChange = (event) => {
    setCurrentAnswer(event.target.value);
    autoResize({textarea: event.target});
  };

  // @ts-ignore
  const handleSave = (event) => {
    console.log(currentQuestion.trim());
    console.log(currentAnswer.trim());
    if (currentQuestion.trim() !== '' && currentAnswer.trim() !== '' && event.key === 'Enter') {
      // @ts-ignore
      const newQA = ([...questions, {question: currentQuestion.trim(), answer: currentAnswer.trim()}]);
      localStorage.setItem('newTest', JSON.stringify(newQA));
      // @ts-ignore
      setQuestions(newQA);
      setCurrentQuestion('');
      setCurrentAnswer('');
      setQACount(newQA.length);

      resetSize();

      const inputElement = document.getElementById('questionSide') as HTMLInputElement;
      resetCursorToBeginning(inputElement);

      event.preventDefault(); // prevents the enter key from going to a new line by default
      //event.dispatchEvent(new Event('submit')); // ensures that the enter key's only action is submitting the text

      console.log(newQA.length);
      if (newQA.length > 0) {
        setSaveButton("saveSet w-[250px] mx-[auto] border-[1px] border-[solid] border-[black] text-[115%] text-[white] font-light h-[55px] rounded-[20px] bg-[rgb(18,_18,_18)]")
      }

      if (newQA.length > 1) {
        setSingleOrPlural("Test Questions");
      }
    }
  };

  return (
    <>
      <div className="headers flex w-[80%] mx-[auto]">
        <h2 className="questionHeader flex justify-center text-center font-light italic text-[120%] w-[50%] h-[50px] mb-[20px]">Question</h2>
        <h2 className="answerHeader flex justify-center text-center font-light italic text-[120%] w-[50%] h-[50px] mb-[20px]">Answer</h2>
      </div>

      <div className="entriesAndListsContainer">

        <div className="Entries flex items-start justify-center w-[80%] mx-[auto] h-[auto]">
                    <textarea
                      className="questionSide flex mx-[auto] focus:outline-none w-[40%] border-[1px] border-[solid] border-[black] rounded-[15px] p-[25px] font-light overflow-hidden"
                      id="questionSide"
                      maxLength={650}
                      value={currentQuestion}
                      onChange={handleQuestionChange}
                      onKeyDown={handleSave}
                    />

          <textarea
            className="answerSide flex mx-[auto] questionSide focus:outline-none w-[40%] border-[1px] border-[solid] border-[black] rounded-[15px] p-[25px] font-light overflow-hidden"
            id="answerSide"
            maxLength={650}
            value={currentAnswer}
            onChange={handleAnswerChange}
            onKeyDown={handleSave}
          />
        </div>

        <div className="lists flex flex-wrap w-[80%] mx-[auto] h-[auto] mt-[60px] relative">
          {questions.slice().reverse().map((question, index) => (
            <div className="questionList w-[100%] flex flex-wrap items-start" key={index}>
              <div className="w-[50%] mb-[50px]">
                <h3 className="qaBox w-[80%] mx-[auto] justify-center"> {question["question"]} </h3>
              </div>
              <div className="flex w-[50%] mb-[50px]">
                <h3 className="qaBox w-[80%] mx-[auto] justify-center">{question["answer"]}</h3>
              </div>
            </div>
          ))}
          <div className="verticalLine"></div>
        </div>
      </div>

      <div className="questionCountAndSave flex mt-[75px] mb-[75px] w-[100%]">
        <button className={saveButton}>
          <button onClick={saveCard}>
            Save {qaCount} {singleOrPlural}
          </button>
        </button>
      </div>
    </>
  )
}
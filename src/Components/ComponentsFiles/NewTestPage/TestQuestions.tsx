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
  const [singleOrPlural, setSingleOrPlural] = useState("Question");

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
    if (currentQuestion.trim() !== '' && currentAnswer.trim() !== '' && (event.key === 'Enter' || event.target.id == "clicker")) {
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

      if (newQA.length > 0) {
        setSaveButton("saveSet w-[250px] mx-[auto] border-[1px] border-[solid] border-[black] text-[115%] text-[white] font-light h-[55px] rounded-[20px] bg-[rgb(18,_18,_18)]")
      }

      if (newQA.length > 1) {
        setSingleOrPlural("Questions");
      }
    }
  };

  return (
      <>
        <div className="headers flex w-[85%] mx-[auto]">
          <h2 className="frontHeader flex justify-center text-center font-light italic text-[120%] w-[45%] h-[50px] mb-[20px] ml-[4%]">Question</h2>
          <h2 className="backHeader flex justify-center text-center font-light italic text-[120%] w-[45%] h-[50px] mb-[20px] pl-[8%]">Réponse</h2>
          <div className="w-[10%]"></div>
        </div>

        <div className="entriesAndListsContainer">

          <div className="entries flex justify-between flex-wrap w-[85%] ml-[12%] h-[auto] relative">
                    <textarea
                        className="questionSide flex focus:outline-none w-[40%] border-[1px] border-[solid] border-[black] rounded-[15px] p-[25px] font-light overflow-hidden"
                        id="questionSide"
                        maxLength={650}
                        value={currentQuestion}
                        onChange={handleQuestionChange}
                        onKeyDown={handleSave}
                    />

            <textarea
                className="answerSide flex questionSide focus:outline-none ml-[4%] w-[36%] border-[1px] border-[solid] border-[black] rounded-[15px] p-[25px] font-light overflow-hidden"
                id="answerSide"
                maxLength={650}
                value={currentAnswer}
                onChange={handleAnswerChange}
                onKeyDown={handleSave}
            />
            <div className="flex w-[8%] mr-[2%] mt-[15px]">
              <button
                  className="clicker text-[175%] w-[40px] h-[40px] rounded-[50%] border-[1px] border-[solid] border-[black] flex justify-center items-center"
                  id="clicker"
                  onClick={handleSave}>
                +
              </button>
            </div>
          </div>

          <div className="lists flex flex-wrap w-[85%] mx-[auto] h-[auto] mt-[60px] relative">
            {questions.slice().reverse().map((question, index) => (
                <div className="questionList w-[100%] flex flex-wrap items-start" key={index}>
                  <div className="w-[50%] mb-[50px]">
                    <h3 className="qaBox w-[80%] mx-[auto] justify-center"> {question["question"]} </h3>
                  </div>
                  <div className="flex w-[45%] mb-[50px]">
                    <h3 className="qaBox w-[80%] mx-[auto] justify-center">{question["answer"]}</h3>
                  </div>
                  <div className="verticalLine1"></div>
                  <div className="flex w-[5%] mt-[15px]">
                    <div
                        className="w-[40px] h-[40px] rounded-[50%] bg-[black] flex text-[white] items-center justify-center"> {questions.length - index} </div>
                  </div>
                </div>
            ))}
          </div>
        </div>

        <div className="questionCountAndSave flex mt-[50px] mb-[200px] w-[100%]">
          <button className={saveButton}>
            <button onClick={saveCard}>
              Sauvegarder {qaCount} {singleOrPlural}
            </button>
          </button>
        </div>
      </>
  )
}
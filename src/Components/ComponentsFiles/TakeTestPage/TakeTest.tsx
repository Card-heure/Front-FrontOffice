import {useState} from "react";
import {TCard} from "../../../Types/TCard.ts";
import {TSubject} from "../../../Types/TSubject.ts";
import {TTest} from "../../../Types/TTest.ts";

export default function TakeTest( props:{card:TCard, subject:TSubject}) {
  const titleSave = props.subject.name;
  const testTitle = props.card.title;
  const questions = props.card.content as TTest[]; // this is necessary to get the dictionary (object) as an array rather than a string
  const [n, setN] = useState(0);
  //const [nCopy, setNCopy] = useState(n);
  const [c, setC] = useState(0);
  const [v, setV] = useState(1);
  const [finalQuestion, setFinalQuestion] = useState("w-[80%] mx-[auto]");
  const [resultCount, setResultCount] = useState("resultAndCount flex items-center justify-between h-[70px] w-[55%] mx-[auto] mt-[50px] mb-[50px]")
  const [currentQuestion, setCurrentQuestion] = useState(questions[n].question);
  const [currentAnswer, setCurrentAnswer] = useState(questions[n].answer);
  const [endReview, setEndReview] = useState(false);
  const [score, setScore] = useState(0);
  const [overallScore, setOverallScore] = useState(0);
  const [correctViewedStats, setCorrectViewedStats] = useState("correctViewed correctStats w-[50%]");
  const [correctTotalStats, setCorrectTotalStats] = useState("correctTotal w-[50%]");
  const [correctQuestions, setCorrectQuestions] = useState([]);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  const [questionBox, setQuestionBox] = useState("currentQuestion w-[60%] items-center mx-auto flex justify-between");
  const [showEnterButton, setShowEnterButton] = useState(false);
  const [enterOrNext, setEnterOrNext] = useState("Entrer");
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctIncorrect, setCorrectIncorrect] = useState("");
  const [userText, setUserText] = useState("")
  const [endButtons, setEndButtons] = useState(false);

  // @ts-ignore
  const showEntry = (event) => {
    // @ts-ignore
    setUserText(event.target.value)
    // @ts-ignore
    const entryLength = document.getElementById('userAnswer').value;
    if (entryLength.length > 0) {
      setShowEnterButton(true);
    } else {
      setShowEnterButton(false);
    }
  }

  const userAnswer = (
    <input type="text"
           className="userAnswer flex-wrap text-wrap flex text-center font-light text-[140%] items-center w-[650px] mx-[auto] min-h-[300px] border-[black] border-[1px] border-[solid] [box-shadow:-10px_11px_2px_rgb(199,_199,_201)] rounded-[20px]"
           id="userAnswer"
           maxLength={450}
           value={userText}
           onChange={showEntry}
    />
  )

  const resetCursorToBeginning = (input: HTMLInputElement | HTMLTextAreaElement): void => {
    input.focus();
  };

  const checkAnswer = () => {
    const answerBackground = document.getElementById('userAnswer');
    if (enterOrNext == "Entrer") {
      setEnterOrNext("Question suivante")
      setShowAnswer(true);
      // @ts-ignore
      const userEntry = document.getElementById('userAnswer').value;

      if (userEntry.toLowerCase().trim() == currentAnswer.toLowerCase().trim()) {
        setCorrectIncorrect("correct");
        //@ts-ignore
        answerBackground.style.backgroundColor = "rgba(168, 242, 175, .4)";
      }
      if (userEntry.toLowerCase().trim() != currentAnswer.toLowerCase().trim()) {
        setCorrectIncorrect("incorrect");
        //@ts-ignore
        answerBackground.style.backgroundColor = "rgba(255, 106, 106, .6)";

      }
    }
    if (enterOrNext == "Question suivante") {
      setEnterOrNext("Entrer");
      setShowAnswer(false);
      setUserText("");

      const inputElement = document.getElementById('userAnswer') as HTMLInputElement;
      resetCursorToBeginning(inputElement);

      //@ts-ignore
      answerBackground.style.backgroundColor = "rgb(255, 255, 255)";
      if (correctIncorrect == "correct") {
        markCorrect();
      }
      if (correctIncorrect == "fausse") {
        markIncorrect();
      }
    }
  };

  // @ts-ignore
  const markCorrect = () => {
    if ((n < questions.length - 1) && !endReview) { // -2 because originally it's -1 (index 0), but n is always an extra 1 behind
      const newIndex = n + 1;
      setN(newIndex);
      //setNCopy(newIndex);
      const newCorrect = c + 1;
      setC(newCorrect);
      //setCurrentQuestion(questions[newIndex].answer);
      setCurrentQuestion(questions[newIndex].question);
      setCurrentAnswer(questions[newIndex].answer);
      setScore(Math.round((newCorrect / (v + 1)) * 100));
      setOverallScore(Math.round((newCorrect / questions.length) * 100));
    }
    if (n == (questions.length) - 2) {
      setEndReview(true);
    }
    if (n == (questions.length - 1)) {
      setN(0);
      //setNCopy(questions.length)
      const newCorrect = c + 1;
      setC(newCorrect);
      setScore(Math.round((newCorrect / (v + 1)) * 100));
      setOverallScore(Math.round((newCorrect / questions.length) * 100));
    }
    if (v < questions.length) {
      const newV = v + 1;
      setV(newV);
      setScore(Math.round(((c + 1) / (v + 1)) * 100));
      setOverallScore(Math.round(((c + 1) / questions.length) * 100));
    }
    if (endReview) {
      setFinalQuestion("hidden");
      setResultCount("hidden");
      setQuestionBox("hidden")
      setScore(Math.round(((c + 1) / (v + 1)) * 100));
      setOverallScore(Math.round(((c + 1) / questions.length) * 100));
      setCorrectViewedStats("hidden");
      setCorrectTotalStats("incorrectStats w-[100%]")
      setEndButtons(true);
    }
    // @ts-ignore
    const newCorrectQuestions = ([...correctQuestions, {question: questions[n].question, answer: questions[n].answer}]);
    // @ts-ignore
    setCorrectQuestions(newCorrectQuestions);
  };

  // @ts-ignore
  const markIncorrect = () => {
    if ((n < questions.length - 1) && !endReview) { // -2 because originally it's -1 (index 0), but n is always an extra 1 behind
      const newIndex = n + 1;
      setN(newIndex);
      //setNCopy(newIndex);
      //setCurrentQuestion(questions[newIndex].answer);
      setCurrentQuestion(questions[newIndex].question);
      setCurrentAnswer(questions[newIndex].answer);
      setScore(Math.round((c / (v + 1)) * 100));
      setOverallScore(Math.round((c / questions.length) * 100));
    }
    if (n == (questions.length) - 2) {
      setEndReview(true);
    }
    if (n == (questions.length - 1)) {
      setN(0);
      //setNCopy(questions.length)
      setScore(Math.round((c / (v + 1)) * 100));
      setOverallScore(Math.round((c / questions.length) * 100));
    }
    if (v < questions.length) {
      const newV = v + 1;
      setV(newV);
      setScore(Math.round((c / (v + 1)) * 100));
      setOverallScore(Math.round((c / questions.length) * 100));
    }
    if (endReview) {
      setFinalQuestion("hidden");
      setResultCount("hidden");
      setScore(Math.round((c / v) * 100));
      setOverallScore(Math.round((c / questions.length) * 100));
      setCorrectViewedStats("hidden");
      setCorrectTotalStats("incorrectStats w-[100%]");
      setEndButtons(true);
    }
    // @ts-ignore
    const newIncorrectQuestions = ([...incorrectQuestions, {question: questions[n].question, answer: questions[n].answer}]);
    // @ts-ignore
    setIncorrectQuestions(newIncorrectQuestions);
  };

  const retake = () => {
    window.location.reload()
  };

  return (
      <>
        <div
            className="subjectAndTitle flex h-[40px] items-center w-full mx-[auto] mt-[75px] mb-[70px] text-[160%] font-extralight text-left justify-center overflow-clip">
          <h1 className="subject max-w-[15%] mr-[12px]"> Sujet:</h1>
          <h1 className="subjectTitle max-w-[30%] font-semibold">{titleSave}</h1>
          <h1 className="divider w-[2%] mx-[18px] text-center"> | </h1>
          <h1 className="questionSet max-w-[20%] mr-[12px]"> Nom du test: </h1>
          <h1 className="flashSetTitle font-semibold max-w-[30%]">{testTitle}</h1>
        </div>

        <div className={finalQuestion}>
          <div className={questionBox}>
            <h1 className="questionHeaderAndText flex items-center w-[625px] h-[auto] mb-[55px] mx-[auto] text-[140%] font-light">
              <span className="questionHeader font-semibold mr-[10px]"> Question: </span>
              {currentQuestion}
            </h1>
          </div>
          <div className="w-[100%] mx-auto flex justify-between items-start">
            {userAnswer}
            <div
                className={showAnswer ? "correctAnswer flex text-center items-center w-[650px] min-h-[300px] ml-[6%] border-[black] border-[1px] border-[solid] [box-shadow:-10px_11px_2px_rgb(199,_199,_201)] rounded-[20px]" : "correctAnswer hidden"}>
              <p className="answerBox flex mx-[auto] px-[25px] font-light text-[140%]">
                <span className="font-semibold mr-[10px] ">Réponse correcte :</span>{currentAnswer}
              </p>
            </div>
          </div>
          <div className="w-full">
            <button
                className={showEnterButton ? "entryButton w-[auto] px-[55px] mx-[auto] mt-[50px] flex justify-center border-[1px] border-[solid] border-[black] rounded-[18px] text-[120%] py-[12px] font-light  bg-[black] text-[white]" : "entryButton invisible"}
                onClick={checkAnswer}>
              <h1> {enterOrNext} </h1>
            </button>
          </div>
        </div>

        <div className={resultCount}>
          <div className="count flex w-[20%] font-light text-[120%] mr-[8%]">
            <p>Question {v} / {questions.length}</p>
          </div>
        </div>

        <div className="resultsBar bg-[black] h-[150px] mb-[50px] text-white text-center">
          <div className="resultTitle justify-center text-[140%] pt-[30px] mb-[30px]">
            <h2>Résultats</h2>
          </div>
          <div className="resultStats flex w-[100%] text-[120%] font-light">
            <div className={correctViewedStats}>
              <h2> {c} / {v} questions consultées correctes (<span className="bold">{score}%</span>)</h2>
            </div>
            <div className={correctTotalStats}>
              <h2> {c} / {questions.length} total des questions correctes (<span
                  className="bold">{overallScore}%</span>)</h2>
            </div>
          </div>
        </div>

        <div className="correctQuestions mb-[50px]">
          <h1 className="correctHeader font-semibold text-center text-[150%] mb-[50px]">Correct</h1>

          <div className="correctCountQuestionanswer flex flex-wrap justify-center w-[90%] mx-[auto] text-center">

            <div className="correctQuestions flex-wrap w-[50%]">
              {correctQuestions.slice().map((correctQuestions, index) => (
                  <div className="correctQuestionList flex mx-[auto] mr-[12%] mb-[45px]"
                       key={index}>
                    <div className="correctCount flex justify-center w-[20%]">
                      <h3 className="correctCountCircle w-[35px] h-[35px] flex justify-center items-center self-center rounded-[50%] bg-[rgba(197,_255,_203,_.65)] border-[black] border-[solid] border-[1px]">
                        {index + 1}
                      </h3>
                    </div>
                    <h3 className="qaBox w-[80%] justify-center"> {correctQuestions["question"]}</h3>
                  </div>
              ))}
            </div>

            <div className="correctAnswers flex-wrap w-[50%]">
              {correctQuestions.slice().map((correctQuestions, index) => (
                  <div
                      className="correctAnswerList mx-[auto] pl-[12%] border-l-[black] border-l-[solid] border-l-[1px]"
                      key={index}>
                    <h3 className="qaBox w-[85%] mr-[15%] mb-[45px] justify-center"> {correctQuestions["answer"]} </h3>
                  </div>
              ))}
            </div>
          </div>
        </div>

        <div className="incorrectQuestions mb-[50px]">
          <h1 className="incorrectHeader font-semibold text-center text-[150%] mb-[50px]">Fausse</h1>

          <div
              className="incorrectCountquestionanswer flex flex-wrap justify-center w-[90%] mx-[auto] text-center">

            <div className="incorrectquestions flex-wrap w-[50%]">
              {incorrectQuestions.slice().map((incorrectQuestions, index) => (
                  <div className="incorrectquestionList flex mx-[auto] pr-[12%] mb-[45px]"
                       key={index}>
                    <div className="incorrectCount flex justify-center w-[20%]">
                      <h3 className="incorrectCountCircle w-[35px] h-[35px] flex justify-center items-center self-center rounded-[50%] bg-[rgba(255,_106,_106,_.65)] border-[black] border-[solid] border-[1px]"> {index + 1} </h3>
                    </div>
                    <h3 className="qaBox w-[80%] justify-center"> {incorrectQuestions["question"]}</h3>
                  </div>
              ))}
            </div>


            <div className="incorrectanswers flex-wrap w-[50%]">
              {incorrectQuestions.slice().map((incorrectQuestions, index) => (
                  <div
                      className="incorrectanswerList mx-[auto] pl-[12%] border-l-[black] border-l-[solid] border-l-[1px]"
                      key={index}>
                    <h3 className="qaBox w-[85%] mr-[15%] mb-[45px] justify-center"> {incorrectQuestions["answer"]} </h3>
                  </div>
              ))}
            </div>
          </div>
        </div>
        <div
            className={endButtons ? "justify-between items-center mx-[auto] flex endButtons w-[650px] h-[100px] mb-[150px]" : "invisible"}>
          <button
              className="endButton border-[black] border-[solid] border-[1px] bg-[black] text-[white] text-[120%] h-[70px] w-[220px] rounded-[20px] font-light"
              onClick={retake}>
            Retake the test
          </button>

          <a href="/SubjectView/4">
            <button
                className="endButton border-[black] border-[solid] border-[1px] bg-[black] text-[white] text-[120%] h-[70px] w-[285px]  rounded-[20px] font-light">
              Return to the subject page
            </button>
          </a>
        </div>
      </>
  );
}
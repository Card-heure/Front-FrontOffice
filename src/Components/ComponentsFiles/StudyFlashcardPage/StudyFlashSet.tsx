import {useState} from "react";
export default function StudyFlashSet() {
    const titleSave = localStorage.getItem('titleSave');
    const flashSetTitle = localStorage.getItem('flashSetTitle');
    const flashcardString = localStorage.getItem('newFlashSet');
    // @ts-ignore
    const flashcards = JSON.parse(flashcardString); // this is necessary to get the dictionary (object) as an array rather than a string
    const [n, setN] = useState(0);
    const [nCopy, setNCopy] = useState(n);
    const [c, setC] = useState(0);
    const [v, setV] = useState(1);
    const [arrowDirection, setArrowDirection] = useState(<span>&#8594;</span>); // necessary for html symbol
    const [flipTo, setFlipTo] = useState('Flip to Definition');
    const [cardFlipEnd, setCardFlipEnd] = useState("cardAndFlip w-[60%] items-center mx-auto flex justify-between");
    const [resultCount, setResultCount] = useState("resultAndCount flex items-center justify-between h-[70px] w-[55%] mx-[auto] mt-[50px] mb-[50px]")
    const [cardText, setCardText] = useState(flashcards[n].term);
    const [endReview, setEndReview]  = useState(false);
    const [score, setScore] = useState(0);
    const [overallScore, setOverallScore] = useState(0);
    const [correctViewedStats, setCorrectViewedStats] = useState("correctViewed correctStats w-[50%]");
    const [correctTotalStats, setCorrectTotalStats] = useState("correctTotal w-[50%]");
    const [correctCards, setCorrectCards] = useState([]);
    const [incorrectCards, setIncorrectCards] = useState([]);

    // @ts-ignore
    const flipCard = (event) => {
        if (cardText == flashcards[n].term) {
            setCardText(flashcards[nCopy].definition);
            setArrowDirection(<span>&#8592;</span>);
            setFlipTo('Flip to Term');
        }
        if (cardText == flashcards[n].definition) {
            setCardText(flashcards[n].term);
            setArrowDirection(<span>&#8594;</span>);
            setFlipTo('Flip to Definition');
        }
    };

    // @ts-ignore
    const markCorrect = (event) => {
        if ((n < flashcards.length - 1) && !endReview) { // -2 because originally it's -1 (index 0), but n is always an extra 1 behind
            const newIndex = n + 1;
            setN(newIndex);
            setNCopy(newIndex);
            const newCorrect = c + 1;
            setC(newCorrect);
            //setCardText(flashcards[newIndex].definition);
            setCardText(flashcards[newIndex].term);
            setScore(Math.round((newCorrect / (v+1)) * 100));
            setOverallScore(Math.round((newCorrect / flashcards.length) * 100));
        }
        if (n == (flashcards.length) -2) {
            setEndReview(true);
        }
        if ( n == (flashcards.length - 1)) {
            setN(0);
            setNCopy(flashcards.length)
            const newCorrect = c + 1;
            setC(newCorrect);
            setScore(Math.round((newCorrect / (v+1)) * 100));
            setOverallScore(Math.round((newCorrect / flashcards.length) * 100));
        }
        if (v < flashcards.length) {
            const newV = v + 1;
            setV(newV);
            setScore(Math.round(((c+1) / (v+1)) * 100));
            setOverallScore(Math.round(((c+1) / flashcards.length) * 100));
        }
        if (endReview) {
            setCardFlipEnd("hidden");
            setResultCount("hidden");
            setScore(Math.round(((c+1) / (v+1)) * 100));
            setOverallScore(Math.round(((c+1) / flashcards.length) * 100));
            setCorrectViewedStats("hidden");
            setCorrectTotalStats("incorrectStats w-[100%]")
        }
        const resetArrow = (<span>&#8594;</span>)
        setArrowDirection(resetArrow);
        const resetArrowText = ('Flip to Definition');
        setFlipTo(resetArrowText);
        // @ts-ignore
        const newCorrectCards = ([...correctCards, {term: flashcards[n].term, definition: flashcards[n].definition}]);
        setCorrectCards(newCorrectCards);
    };

    // @ts-ignore
    const markIncorrect = (event) => {
        if ((n < flashcards.length - 1) && !endReview) { // -2 because originally it's -1 (index 0), but n is always an extra 1 behind
            const newIndex = n + 1;
            setN(newIndex);
            setNCopy(newIndex);
            //setCardText(flashcards[newIndex].definition);
            setCardText(flashcards[newIndex].term);
            setScore(Math.round((c / (v+1)) * 100));
            setOverallScore(Math.round((c / flashcards.length) * 100));
        }
        if (n == (flashcards.length) -2) {
            setEndReview(true);
        }
        if ( n == (flashcards.length - 1)) {
            setN(0);
            setNCopy(flashcards.length)
            setScore(Math.round((c / (v+1)) * 100));
            setOverallScore(Math.round((c / flashcards.length) * 100));
        }
        if (v < flashcards.length) {
            const newV = v + 1;
            setV(newV);
            setScore(Math.round((c / (v+1)) * 100));
            setOverallScore(Math.round((c / flashcards.length) * 100));
        }
        if (endReview) {
            setCardFlipEnd("hidden");
            setResultCount("hidden");
            setScore(Math.round((c / v) * 100));
            setOverallScore(Math.round((c / flashcards.length) * 100));
            setCorrectViewedStats("hidden");
            setCorrectTotalStats("incorrectStats w-[100%]");
        }
        const resetArrow = (<span>&#8594;</span>)
        setArrowDirection(resetArrow);
        const resetArrowText = ('Flip to Definition');
        setFlipTo(resetArrowText);
        // @ts-ignore
        const newIncorrectCards = ([...incorrectCards, {term: flashcards[n].term, definition: flashcards[n].definition}]);
        setIncorrectCards(newIncorrectCards);
        console.log(incorrectCards);
    };

    return (
        <>
            <div className="subjectAndTitle flex h-[40px] items-center w-[55%] mx-[auto] mt-[75px] mb-[70px] text-[160%] font-extralight text-left justify-center overflow-clip">
                <h1 className="subject max-w-[10%]"> Subject:</h1>
                <h1 className="subjectTitle max-w-[25%] ml-[2%] font-bold">{titleSave}</h1>
                <h1 className="divider w-[2%] mx-[2%] text-center"> | </h1>
                <h1 className="flashcardSet max-w-[25%] h-[35px] items-baseline"> Flashcard Set: </h1>
                <h1 className = "flashSetTitle ml-[2%] w-[26%] font-bold">{flashSetTitle}</h1>
            </div>

            <div className ={cardFlipEnd}>
                <div className = "currentCard flex text-center items-center w-[650px] h-[300px] ml-[6%] border-[black] border-[1px] border-[solid] [box-shadow:-10px_11px_2px_rgb(199,_199,_201)] rounded-[20px]">
                    <p className = "currentCardText flex mx-[auto] px-[25px] font-light text-[140%]">
                        {cardText}
                    </p>
                </div>
                <button className = "flipOver flex flex-wrap justify-center w-[75px] h-[90px]"
                onClick = {flipCard}>
                    <h1 className = "flipArrow text-[350%] h-[50px] leading-[50px]"> {arrowDirection} </h1>
                    <h1 className = "flipText h-[35px] leading-[35px] font-light"> {flipTo} </h1>
                </button>
            </div>

            <div className ={resultCount}>
                <div className = "result w-[25%] justify-center flex">
                    <div className = "correct flex w-[50%] justify-center">
                        <button className = "correctCircle flex justify-center items-center text-[150%] w-[50px] h-[50px] rounded-[50%] border-[1px] border-[black] border-[solid] bg-[rgba(197,_255,_203,_.65)]"
                        onClick = {markCorrect}>
                            &#x2713;
                        </button>
                    </div>
                    <div className = "incorrect flex w-[50%] justify-center">
                        <button className = "incorrectCircle flex justify-center items-center text-[150%] font-bold w-[50px] h-[50px] rounded-[50%] border-[1px] border-[black] border-[solid] bg-[rgba(255,_106,_106,_.65)]"
                        onClick = {markIncorrect}>
                            &#10005;
                        </button>
                    </div>
                </div>

                <div className = "count flex w-[20%] font-light text-[120%] mr-[8%]">
                    <p>Card {v} / {flashcards.length}</p>
                </div>
            </div>

            <div className = "resultsBar bg-[black] h-[150px] mb-[50px] text-white text-center">
                <div className = "resultTitle justify-center text-[140%] pt-[30px] mb-[30px]">
                    <h2>Results</h2>
                </div>
                <div className = "resultStats flex w-[100%] text-[120%] font-light">
                    <div className = {correctViewedStats}>
                        <h2> {c} / {v} viewed cards correct (<span className = "bold">{score}%</span>)</h2>
                    </div>
                    <div className = {correctTotalStats}>
                        <h2> {c} / {flashcards.length} total cards correct (<span className = "bold">{overallScore}%</span>)</h2>
                    </div>
                </div>
            </div>

            <div className="correctCards mb-[50px]">
                <h1 className="correctHeader font-semibold text-center text-[150%] mb-[50px]">Correct</h1>

                <div className="correctCountTermDefinition flex flex-wrap justify-center w-[80%] mx-[auto] text-center">

                    <div className="correctTerms flex-wrap w-[50%]">
                        {correctCards.slice().map((correctCards, index) => (
                            <div className="correctTermList mx-[auto] pr-[12%] border-r-[black] border-r-[solid] border-r-[1px]"
                                 key={index}>
                                <h3 className="flashcardBox mb-[45px]"> {correctCards["term"]} {index + 1}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="correctDefinitions flex-wrap w-[50%]">
                        {correctCards.slice().map((correctCards, index) => (
                            <div className="correctDefinitionList mx-[auto] pl-[12%]"
                                 key={index}>
                                <h3 className="flashcardBox mb-[45px]"> {correctCards["definition"]} </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="incorrectCards mb-[50px]">
                <h1 className="incorrectHeader font-semibold text-center text-[150%] mb-[50px]">Incorrect</h1>

                <div className="incorrectTermDefinition flex flex-wrap justify-center w-[80%] mx-[auto] text-center">

                    <div className="incorrectTerms flex-wrap w-[50%]">
                        {incorrectCards.slice().map((incorrectCards, index) => (
                            <div className="incorrectTermList mx-[auto] pr-[12%] border-r-[black] border-r-[solid] border-r-[1px]" key={index}>
                                <h3 className="flashcardBox mb-[45px]"> {incorrectCards["term"]} {index + 1}</h3>
                            </div>
                        ))}
                    </div>


                    <div className="incorrectDefinitions flex-wrap w-[50%]">
                        {incorrectCards.slice().map((incorrectCards, index) => (
                            <div className="incorrectDefinitionList mx-[auto] pl-[12%]" key={index}>
                                <h3 className="flashcardBox mb-[45px]"> {incorrectCards["definition"]} </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
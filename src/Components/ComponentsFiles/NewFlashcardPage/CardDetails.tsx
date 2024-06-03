import {useState} from 'react';

export default function CardDetails() {


    const [terms, setTerms] = useState([]);
    const [currentTerm, setCurrentTerm] = useState('');
    const [currentDefinition, setCurrentDefinition] = useState('');
    const [cardCount, setCardCount] = useState(0);
    const [saveButton, setSaveButton] = useState("hidden");
    const [cardOrCards, setCardOrCards] = useState("Card");

    // @ts-ignore
    const handleTermChange = (event) => {
        setCurrentTerm(event.target.value);
    };

    // @ts-ignore
    const handleDefinitionChange = (event) => {
        setCurrentDefinition(event.target.value);
    };

    // @ts-ignore
    const handleSave = (event) => {
        if (currentTerm.trim() !== '' && currentDefinition.trim() !== '' && event.key === 'Enter') {
            // @ts-ignore
            const newTerms = ([...terms, {term: currentTerm.trim(), definition: currentDefinition.trim()}]);
            localStorage.setItem('newFlashSet', JSON.stringify(newTerms));
            // @ts-ignore
            setTerms(newTerms);
            setCurrentTerm('');
            setCurrentDefinition('');
            setCardCount(newTerms.length);

            if (newTerms.length > 0) {
                setSaveButton("saveSet w-[170px] mx-[auto] border-[1px] border-[solid] border-[black] text-[115%] text-[white] font-light min-h-[55px] rounded-[20px] bg-[rgb(18,_18,_18)]")
            }

            if (newTerms.length > 1) {
                setCardOrCards("Cards");
            }
        }
    };

    return (
        <>
            <div>
                <div className="flex justify-around w-[80%] mx-[auto] h-[auto]">
                    <div className="termEntry w-[40%] justify-center mx-[auto] flex flex-wrap">
                        <h2 className="frontHeader text-center font-light italic text-[120%] w-[100%] h-[50px] mb-[20px]">Front</h2>
                        <textarea
                            className="termSide focus:outline-none h-[85px] w-[95%] border-[1px] border-[solid] border-[black] rounded-[15px] p-[5%] font-light overflow-hidden"
                            id = "termSide"
                            value={currentTerm}
                            onChange={handleTermChange}
                            onKeyDown={handleSave}
                        />

                        {terms.slice().reverse().map((flashcard, index) => (
                            <div className="termList flex-wrap w-[95%] mt-[45px]" key={index}>
                                <h3 className="flashcardBox w-[100%]"> {flashcard["term"]} </h3>
                            </div>
                        ))}
                    </div>

                    <div className="h-[auto] border-r-[1px] border-r-[black] border-r-[solid]"></div>

                    <div className="definitionEntry w-[40%] justify-center mx-[auto] flex flex-wrap">
                        <h2 className="backHeader text-center font-light italic text-[120%] w-[100%] h-[50px] mb-[20px]">Back</h2>
                        <textarea
                            className="definitionSide focus:outline-none h-[85px] w-[95%] border-[1px] border-[solid] border-[black] rounded-[15px] p-[5%] font-light overflow-hidden"
                            value={currentDefinition}
                            onChange={handleDefinitionChange}
                            onKeyDown={handleSave}
                        />

                        {terms.slice().reverse().map((flashcard, index) => (
                            <div className="definitionList flex-wrap w-[95%] mt-[45px]" key={index}>
                                <h3 className="flashcardBox w-[100%]">{flashcard["definition"]}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="cardCountAndSave flex mt-[75px] mb-[75px] w-[100%]">
                    <button
                        className={saveButton}>
                        <a href = "http://localhost:5173/home/newSubject/newflashcard/StudyFlashCardSet"> Save {cardCount} {cardOrCards} </a>
                    </button>
                </div>

            </div>
        </>
    )
}
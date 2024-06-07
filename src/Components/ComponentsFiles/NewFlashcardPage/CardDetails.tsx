import {useState} from 'react';

export default function CardDetails() {

    const [terms, setTerms] = useState([]);
    const [currentTerm, setCurrentTerm] = useState('');
    const [currentDefinition, setCurrentDefinition] = useState('');
    const [cardCount, setCardCount] = useState(0);
    const [saveButton, setSaveButton] = useState("hidden");
    const [cardOrCards, setCardOrCards] = useState("Card");

    const autoResize = ({textarea}: { textarea: any }) => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    };

    const resetSize = () => {
        // @ts-ignore
        document.getElementById(`termSide`).setAttribute('style', 'height: 75px;');
        // @ts-ignore
        document.getElementById(`definitionSide`).setAttribute('style', 'height: 75px;');
    }

        const resetCursorToBeginning = (input: HTMLInputElement | HTMLTextAreaElement): void => {
            input.setSelectionRange(0, 0);
            input.focus();
        };
        // @ts-ignore
        const handleTermChange = (event) => {
            setCurrentTerm(event.target.value);
            autoResize({textarea: event.target})
        };

        // @ts-ignore
        const handleDefinitionChange = (event) => {
            setCurrentDefinition(event.target.value);
            autoResize({textarea: event.target});
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
                resetSize();

                const inputElement = document.getElementById('termSide') as HTMLInputElement;
                resetCursorToBeginning(inputElement);

                event.preventDefault(); // prevents the enter key from going to a new line by default
                event.dispatchEvent(new Event('submit')); // ensures that the enter key's only action is submitting the text


                if (newTerms.length > 0) {
                    setSaveButton("saveSet w-[170px] mx-[auto] border-[1px] border-[solid] border-[black] text-[115%] text-[white] font-light min-h-[55px] rounded-[20px] bg-[rgb(18,_18,_18)]")
                }

                if (newTerms.length > 1) {
                    setCardOrCards("Cards");
                }
            }
        }

        return (
            <>
                <div className="headers flex w-[80%] mx-[auto]">
                    <h2 className="frontHeader flex justify-center text-center font-light italic text-[120%] w-[50%] h-[50px] mb-[20px]">Front</h2>
                    <h2 className="backHeader flex justify-center text-center font-light italic text-[120%] w-[50%] h-[50px] mb-[20px]">Back</h2>
                </div>

                <div className="entriesAndListsContainer">

                    <div className="Entries flex items-start justify-center w-[80%] mx-[auto] h-[auto]">
                    <textarea
                        className="termSide flex mx-[auto] focus:outline-none w-[40%] border-[1px] border-[solid] border-[black] rounded-[15px] p-[25px] font-light overflow-hidden"
                        id="termSide"
                        maxLength={650}
                        value={currentTerm}
                        onChange={handleTermChange}
                        onKeyDown={handleSave}
                    />

                        <textarea
                            className="definitionSide flex mx-[auto] questionSide focus:outline-none w-[40%] border-[1px] border-[solid] border-[black] rounded-[15px] p-[25px] font-light overflow-hidden"
                            id="definitionSide"
                            maxLength={650}
                            value={currentDefinition}
                            onChange={handleDefinitionChange}
                            onKeyDown={handleSave}
                        />
                    </div>

                    <div className="lists flex flex-wrap w-[80%] mx-[auto] h-[auto] mt-[60px] relative">
                        {terms.slice().reverse().map((term, index) => (
                            <div className="termList w-[100%] flex flex-wrap items-start" key={index}>
                                <div className="w-[50%] mb-[50px]">
                                    <h3 className="flashcardBox w-[80%] mx-[auto] justify-center"> {term["term"]}</h3>
                                </div>
                                <div className="flex w-[50%] mb-[50px]">
                                    <h3 className="flashcardBox w-[80%] mx-[auto] justify-center">{term["definition"]}</h3>
                                </div>
                            </div>
                        ))}
                        <div className="verticalLine"></div>
                    </div>
                </div>

                <div className="cardCountAndSave flex mt-[75px] mb-[75px] w-[100%]">
                    <button
                        className={saveButton}>
                        <a href="http://localhost:5173/home/newSubject/newflashcard/StudyFlashCardSet">
                            Save {cardCount} {cardOrCards}
                        </a>
                    </button>
                </div>
            </>
        )
    }
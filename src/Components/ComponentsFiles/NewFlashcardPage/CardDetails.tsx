import {useState} from 'react';

export default function CardDetails() {


    const [terms, setTerms] = useState([]);
    const [currentTerm, setCurrentTerm] = useState('');
    const [currentDefinition, setCurrentDefinition] = useState('');

    // @ts-ignore
    const handleTermChange = (event) => {
        setCurrentTerm(event.target.value);
    };

    // @ts-ignore
    const handleDefinitionChange = (event) => {
        setCurrentDefinition(event.target.value);
    };

    const handleSave = (event) => {
        if (currentTerm.trim() !== '' && currentDefinition.trim() !== '' && event.key === 'Enter') {
            // @ts-ignore
            setTerms([...terms, {term: currentTerm.trim(), definition: currentDefinition.trim()}]);
            setCurrentTerm('');
            setCurrentDefinition('');
            localStorage.setItem('flashcards', JSON.stringify(terms));
            console.log(localStorage.getItem('flashcards'));
        }
    };

    return (
        <>
            <div>
                <div className = "flex justify-around w-[80%] mx-[auto] h-[auto]">
                    <div className="termEntry w-[40%] justify-center mx-[auto] flex flex-wrap">
                        <h2 className="frontHeader text-center font-light italic text-[120%] w-[100%] h-[50px] mb-[20px]">Front</h2>
                        <textarea
                            className="termSide focus:outline-none h-[75px] w-[95%] border-[1px] border-[solid] border-[black] rounded-[15px] pl-[5%] pt-[5%] font-light"
                            value={currentTerm}
                            onChange={handleTermChange}
                            onKeyDown={handleSave}
                        />

                        {terms.toReversed().map((flashcard, index) => (
                            <div className = "termList flex-wrap w-[95%] mt-[45px]" key={index}>
                                <h3 className="flashcardBox w-[100%]"> {flashcard.term} </h3>
                            </div>
                        ))}

                    </div>

                    <div className="h-[auto] border-r-[1px] border-r-[black] border-r-[solid]">

                    </div>


                    <div className="definitionEntry w-[40%] justify-center mx-[auto] flex flex-wrap">
                        <h2 className="backHeader text-center font-light italic text-[120%] w-[100%] h-[50px] mb-[20px]">Back</h2>
                        <textarea
                            className = "definitionSide focus:outline-none h-[75px] w-[95%] border-[1px] border-[solid] border-[black] rounded-[15px] pl-[5%] pt-[5%] font-light"
                            value={currentDefinition}
                            onChange={handleDefinitionChange}
                            onKeyDown={handleSave}
                        />

                        {terms.toReversed().map((flashcard, index) => (
                            <div className = "definitionList flex-wrap w-[95%] mt-[45px]" key={index}>
                                <h3 className = "flashcardBox w-[100%]">{flashcard.definition}</h3>
                            </div>
                        ))}


                    </div>
                </div>

            </div>
        </>
    )
}
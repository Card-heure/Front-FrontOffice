import {useState} from "react";

export default function CreateFlashcard() {
    const titleSave = localStorage.getItem('titleSave');
    // @ts-ignore
    const handleTitleEntered = (event) => {
        const inputValue = event.target.value;
        setCardTitleSave(inputValue);
        localStorage.setItem('flashSetTitle', inputValue);
        if (inputValue.trim().length > 2) {
            setTitleEntered(true);
        }
        else {
            setTitleEntered(false);
        }
    }

    const [flashSetTitle, setFlashSetTitle] = useState(
        <input
            type="text"
            className="enterTitle flex ml-[2%] w-[26%] leading-[34px] border-b-[1px] border-b-[solid] border-b-[black] font-extralight"
            onChange={handleTitleEntered}/>);

    const create = () => {
        setDisplayOptions(true);
        setEnterTitle("enterButtonIcon cursor-auto");
        setFlashSetTitle(
            <h1
                className="enterTitle flex ml-[2%] w-[26%] leading-[34px] border-b-[1px] border-b-[solid] border-b-[black] font-semibold"
                onChange={handleTitleEntered}> {cardTitleSave} </h1>);
    }

    const addOrSave = () => {
        return displayOptions ? <p className="checkmark"></p> : '+';
    };

    const [enterTitle, setEnterTitle] = useState("enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] mb-[12px] rounded-[50%] bg-[black] text-[white] font-normal text-center");
    const [titleEntered, setTitleEntered] = useState(false);
    const [cardTitleSave, setCardTitleSave] = useState("");
    const [displayOptions, setDisplayOptions] = useState(false);

    const [allCards, setAllCards] = useState([{
        id: 1,
        question: "",
        answer: "",
    }]);
    const [newCard, setNewCard] = useState("");

    function handleCardEntry(event) {

    }

    function addCard() {

    }

    return (
        <>
            <div className="subjectAndTitle flex h-[50px] items-center w-[55%] mx-[auto] mt-[75px] text-[160%] font-extralight text-left justify-center">
                <h1 className="subject max-w-[10%]"> Subject:</h1>
                <h1 className="subjectTitle max-w-[25%] ml-[2%] font-semibold">{titleSave}</h1>
                <h1 className="divider w-[2%] mx-[2%] text-center"> | </h1>
                <h1 className="flashcardSet max-w-[25%]"> Flashcard Set: </h1>
                {flashSetTitle}

                <div className="enterButton w-[5%] mx-[3%] pt-[12px]">
                    <button
                        className={titleEntered ? enterTitle : "enterButtonIcon hidden"}
                        onClick={create}>
                        {addOrSave()}
                    </button>
                </div>
            </div>

            <div className = {displayOptions ? "cardSection" : "cardSection hidden"}>
                <div className = "frontAndBack w-[100%] flex mt-[75px] min-h-[500px] mb-[75px]">

                    <div className = "front w-[50%] border-r-[black] border-r-[solid] border-r-[1px]">

                        <h1 className = "frontHeader font-light italic text-center text-[120%] mt-[20px] mb-[50px]"> Front </h1>

                        <div className = "frontWithNum flex justify-between items-center w-[70%] mx-[auto]">

                            <h2 className = "cardNumber text-center leading-[30px] h-[30px] w-[30px] bg-[rgb(18,_18,_18)] text-[white] text-[110%] border-[black] border-[1px] border-[solid] rounded-[50%]"> 1 </h2>

                            <input
                                className = "frontOfCard w-[85%] pl-[20px] min-h-[60px] outline-[none] border-[1px] border-[black] border-[solid] rounded-[8px]"
                                type = "text"
                                placeholder = "Term"
                                value = {newCard}
                                onChange = {handleCardEntry}
                            />
                        </div>

                    </div>

                    <div className="back w-[50%]">
                        <h1 className="backHeader font-light italic text-center text-[120%] mt-[20px]"> Back </h1>
                    </div>
                </div>
            </div>

        </>
    )
}
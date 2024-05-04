import {useState} from 'react';
export default function CreateANewSubject() {

    const [titleEntered, setTitleEntered] = useState(false);
    const [titleSave, setTitleSave] = useState("");
    const [displayOptions, setDisplayOptions] = useState(false);
    const [enterTitle, setEnterTitle] = useState("enterButtonIcon w-[30px] mx-[auto] h-[30px] mt-[8px] leading-[30px] rounded-[50%] bg-[black] text-[white] text-center");
    // @ts-ignore
    const handleTitleEntered = (event) => {
        const inputValue = event.target.value;
        setTitleSave(inputValue);
        localStorage.setItem('titleSave', inputValue);
        if (inputValue.trim().length > 2) {
            setTitleEntered(true);
        }
        else {
            setTitleEntered(false);
        }
    }
    const initiateSubject = () => {
        setDisplayOptions(true);
        setEnterTitle("enterButtonIcon cursor-auto");
        setSaveTitle(
            <h1
                className="enterTitle flex border-b-[1px] border-b-[solid] border-b-[black] justify-center ml-[12%] w-[64%] h-[35px] mb-[6px] text-center font-light italic"
                onChange={handleTitleEntered}> {titleSave} </h1>);
    }

    const [saveTitle, setSaveTitle] = useState(
        <input
            type="text"
            className="enterTitle flex border-b-[1px] border-b-[solid] border-b-[black] justify-center ml-[12%] w-[64%] h-[35px] mb-[6px] text-center font-extralight"
            onChange={handleTitleEntered}/>);

    const addOrSave = () => {
        return displayOptions ? <p className="checkmark"></p> : '+';
    };

    return (
        <>
            <h1 className="titlePrompt h-[50px] leading-[50px] mt-[3%] w-[60%] mx-[auto] text-center text-[180%] font-extralight">
                Enter the title of your new subject below</h1>

            <div className="createTitle w-[35%] h-[50px] mx-[auto] mt-[4%] flex text-[150%]">
                {saveTitle}

                <div className="enterButton w-[18%] ml-[6%] h-[50px]">
                    <button
                        className = {titleEntered ? enterTitle : "enterButtonIcon hidden"}
                        onClick = {initiateSubject}>
                        {addOrSave()}
                    </button>
                </div>
            </div>

            <div className={ displayOptions ? "addContent mt-[8%] w-[70%] mx-[auto]" : "hidden"}>
                <h1 className="getStarted h-[50px] leading-[50px] text-center text-[160%] font-light">Get started by
                    adding content</h1>
                <div
                    className="createtOptions mt-[80px] mb-[70px] mx-[auto] w-[100%] justify-between flex">
                    <a href='http://localhost:5173/home/newSubject/newflashcard'>
                        <button className="createContent flashcard">Create a Flashcard Set</button>
                    </a>
                        <button className="createContent test">Create a Test</button>
                        <button className="createContent mindmap">Create a Mind Map</button>
                </div>
            </div>
        </>
);
}
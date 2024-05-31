import {useState} from "react";

export default function SubjectDisplays () {
    const titleSave = localStorage.getItem('titleSave');

    const [circlesFlashcard, setCirclesFlashcard] = useState(
    <div className = "displayCircles w-[25px] h-[34px] justify-center">
        <div className = "circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
        <div className = "circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
        <div className = "circles m-auto w-[6px] h-[6px] my-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
    </div>);

    const [circlesTest, setCirclesTest] = useState(
        <div className = "displayCircles w-[25px] h-[34px] justify-center">
            <div className = "circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
            <div className = "circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
            <div className = "circles m-auto w-[6px] h-[6px] my-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
        </div>);

    const [circlesMindmap, setCirclesMindmap] = useState(
        <div className = "displayCircles w-[25px] h-[34px] justify-center">
            <div className = "circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
            <div className = "circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
            <div className = "circles m-auto w-[6px] h-[6px] my-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
        </div>);

    const [enterIconFlashcard, setEnterIconFlashcard] = useState(
        <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] rounded-[50%] bg-[black] text-[white] font-normal text-[140%] text-center">
            +
        </h2>
    );

    const [enterIconTest, setEnterIconTest] = useState(
        <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] rounded-[50%] bg-[black] text-[white] font-normal text-[140%] text-center">
            +
        </h2>
    );

    const [enterIconMindmap, setEnterIconMindmap] = useState(
        <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] rounded-[50%] bg-[black] text-[white] font-normal text-[140%] text-center">
            +
        </h2>
    );

    const [textColorFlashcard, setTextColorFlashcard] = useState (
        "mindmapDisplay border-y-[1px] border-y-[black] border-y-[solid] flex items-center px-[20px] justify-between"
    );

    const [textColorTest, setTextColorTest] = useState (
        "mindmapDisplay flex items-center px-[20px] justify-between"
    );

    const [textColorMindmap, setTextColorMindmap] = useState (
        "mindmapDisplay border-y-[1px] border-y-[black] border-y-[solid] flex items-center px-[20px] justify-between"
    );

    const [showHideFlashcard, setSHFlashcard] = useState (true);
    const [showHideTest, setSHTest] = useState (true);
    const [showHideMindmap, setSHMindmap] = useState (true);

    const displayDetailsFlashcard = () => {
        showHideFlashcard ? setSHFlashcard(false) : setSHFlashcard(true)
        if (showHideFlashcard) {
            setCirclesFlashcard(
                <div className="displayCircles w-[25px] h-[34px] flex items-center">
                    <div
                        className="circles flex m-auto w-[6px] h-[6px] rounded-[50%] border-[1px] border-[white] bg-[white] border-[solid]"></div>
                    <div className = "circles flex m-auto w-[6px] h-[6px] rounded-[50%] border-[1px] border-[white] bg-[white] border-[solid]"></div>
                    <div className = "circles flex m-auto w-[6px] h-[6px] rounded-[50%] border-[1px] border-[white] bg-[white] border-[solid]"></div>
                </div>);

            setEnterIconFlashcard(
                <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[28px] rounded-[50%] bg-[black] border-[white] border-[1px] border-[solid] font-normal text-[140%] text-center items-center">
                    +
                </h2>
            );

            setTextColorFlashcard(
                "flashcardDisplay border-y-[1px] border-y-[black] border-y-[solid] bg-[black] flex items-center px-[20px] justify-between text-[white]"
            );
        }
        else {
            setCirclesFlashcard(
                <div className = "displayCircles w-[25px] h-[34px] justify-center">
                    <div className = "circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
                    <div className = "circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
                    <div className = "circles m-auto w-[6px] h-[6px] my-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
                </div>);

            setEnterIconFlashcard(
                <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] rounded-[50%] bg-[black] text-[white] font-normal text-[140%] text-center">
                    +
                </h2>
            );

            setTextColorFlashcard(
                "flashcardDisplay border-y-[1px] border-y-[black] border-y-[solid] flex items-center px-[20px] justify-between"
            );
        }
    };

    const displayDetailsTest = () => {
        showHideTest? setSHTest(false) : setSHTest(true)
        console.log(showHideTest);
        if (showHideTest) {
            setCirclesTest(
                <div className="displayCircles w-[25px] h-[34px] flex items-center">
                    <div
                        className="circles flex m-auto w-[6px] h-[6px] rounded-[50%] border-[1px] border-[white] bg-[white] border-[solid]"></div>
                    <div className = "circles flex m-auto w-[6px] h-[6px] rounded-[50%] border-[1px] border-[white] bg-[white] border-[solid]"></div>
                    <div className = "circles flex m-auto w-[6px] h-[6px] rounded-[50%] border-[1px] border-[white] bg-[white] border-[solid]"></div>
                </div>);

            setEnterIconTest(
                <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[28px] rounded-[50%] bg-[black] border-[white] border-[1px] border-[solid] font-normal text-[140%] text-center items-center">
                    +
                </h2>
            );

            setTextColorTest(
                "testDisplay bg-[black] flex items-center px-[20px] justify-between text-[white]"
            );
        }
        else {
            setCirclesTest(
                <div className = "displayCircles w-[25px] h-[34px] justify-center">
                    <div className = "circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
                    <div className = "circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
                    <div className = "circles m-auto w-[6px] h-[6px] my-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
                </div>);

            setEnterIconTest(
                <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] rounded-[50%] bg-[black] text-[white] font-normal text-[140%] text-center">
                    +
                </h2>
            );

            setTextColorTest(
                "testDisplay flex items-center px-[20px] justify-between"
            );
        }
    };

    const displayDetailsMindmap = () => {
        showHideMindmap ? setSHMindmap(false) : setSHMindmap(true)
        console.log(showHideMindmap);
        if (showHideMindmap) {
            setCirclesMindmap(
                <div className="displayCircles w-[25px] h-[34px] flex items-center">
                    <div
                        className="circles flex m-auto w-[6px] h-[6px] rounded-[50%] border-[1px] border-[white] bg-[white] border-[solid]"></div>
                    <div className = "circles flex m-auto w-[6px] h-[6px] rounded-[50%] border-[1px] border-[white] bg-[white] border-[solid]"></div>
                    <div className = "circles flex m-auto w-[6px] h-[6px] rounded-[50%] border-[1px] border-[white] bg-[white] border-[solid]"></div>
                </div>);

            setEnterIconMindmap(
                <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[28px] rounded-[50%] bg-[black] border-[white] border-[1px] border-[solid] font-normal text-[140%] text-center items-center">
                    +
                </h2>
            );

            setTextColorMindmap(
                "mindmapDisplay border-y-[1px] border-y-[black] border-y-[solid] bg-[black] flex items-center px-[20px] justify-between text-[white]"
            );
        }
        else {
            setCirclesMindmap(
                <div className = "displayCircles w-[25px] h-[34px] justify-center">
                    <div className = "circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
                    <div className = "circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
                    <div className = "circles m-auto w-[6px] h-[6px] my-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
                </div>);

            setEnterIconMindmap(
                <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] rounded-[50%] bg-[black] text-[white] font-normal text-[140%] text-center">
                    +
                </h2>
            );

            setTextColorMindmap(
                "mindmapDisplay border-y-[1px] border-y-[black] border-y-[solid] flex items-center px-[20px] justify-between"
            );
        }
    };

    return (
        <>
            <div
                className="subjectAndTitle flex h-[40px] items-center w-[55%] mx-[auto] mt-[75px] mb-[50px] text-[160%] font-extralight text-left justify-center overflow-clip">
                <h1 className="subject max-w-[15%] mr-[12px]"> Subject:</h1>
                <h1 className="subjectTitle max-w-[30%] font-semibold">{titleSave}</h1>
            </div>

            <div className = {textColorFlashcard} onClick = {displayDetailsFlashcard}>
                <button className="flashcardDisplayButton w-[60%] flex items-center">
                    {circlesFlashcard}
                    <h2 className="displayFlashcardText ml-[10px] pt-[25px] pb-[25px]"> Display all Flashcard Sets </h2>
                </button>

                <button className="createFlashcardButton flex items-center w-[19%]">
                    <div className="createFlashcardCircle items-center">
                        {enterIconFlashcard}
                    </div>
                    <h2 className="createFlashcardText ml-[15px]">Create a new Flashcard Set </h2>
                </button>
            </div>

            <div className = {textColorTest} onClick = {displayDetailsTest}>
                <button className="testdDisplayButton w-[60%] flex items-center">
                    {circlesTest}
                    <h2 className="displayTestText ml-[10px] pt-[25px] pb-[25px]"> Display all Tests </h2>
                </button>

                <button className="createTestButton flex items-center w-[19%]">
                    <div className="createTestCircle items-center">
                        {enterIconTest}
                    </div>
                    <h2 className="createTestText ml-[15px]">Create a new Test </h2>
                </button>
            </div>

            <div className = {textColorMindmap} onClick = {displayDetailsMindmap}>
                <button className="mindmapDisplayButton w-[60%] flex items-center">
                    {circlesMindmap}
                    <h2 className="displayMindmapText ml-[10px] pt-[25px] pb-[25px]"> Display all Mind Maps </h2>
                </button>

                <button className="createMindmapButton flex items-center w-[19%]">
                    <div className="createMindmapCircle items-center">
                        {enterIconMindmap}
                    </div>
                    <h2 className="createMindmapText ml-[15px]">Create a new Mind Map </h2>
                </button>
            </div>
        </>
    )
}
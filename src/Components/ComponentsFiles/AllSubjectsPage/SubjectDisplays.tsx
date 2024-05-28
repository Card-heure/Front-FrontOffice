
export default function SubjectDisplays () {
    const titleSave = localStorage.getItem('titleSave');
    const circles = ("circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]");
    const finalCircle = ("circles m-auto w-[6px] h-[6px] my-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]");
    return (
        <>
            <div className = "subjectAndTitle flex h-[40px] items-center w-[55%] mx-[auto] mt-[75px] mb-[50px] text-[160%] font-extralight text-left justify-center overflow-clip">
                <h1 className = "subject max-w-[15%] mr-[12px]"> Subject:</h1>
                <h1 className = "subjectTitle max-w-[30%] font-semibold">{titleSave}</h1>
            </div>

            <div className = "flashcardDisplay border-t-[1px] border-t-[black] border-t-[solid] flex items-center px-[20px] justify-between">
                <button className = "flashcardDisplayButton w-[60%] flex items-center">
                    <div className = "displayCircles w-[25px] h-[34px] justify-center">
                        <div className ={circles}></div>
                        <div className ={circles}></div>
                        <div className ={finalCircle}></div>
                    </div>
                    <h2 className="displayFlashcardText ml-[10px] pt-[25px] pb-[25px]"> Display all Flashcard Sets </h2>
                </button>

                <button className="createFlashcardButton flex items-center w-[20%]">
                    <div className = "createFlashcardCircle items-center">
                        <h2 className = "enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] rounded-[50%] bg-[black] text-[white] font-normal text-[140%] text-center">
                            +
                        </h2>
                    </div>
                    <h2 className = "createFlashcardText ml-[15px]">Create a new Flashcard Set </h2>
                </button>
            </div>

            <div className = "testDisplay border-t-[1px] border-t-[black] border-t-[solid] flex items-center px-[20px] justify-between">
                <button className = "testdDisplayButton w-[60%] flex items-center">
                    <div className = "displayCircles w-[25px] h-[34px] justify-center">
                        <div className ={circles}></div>
                        <div className ={circles}></div>
                        <div className ={finalCircle}></div>
                    </div>
                    <h2 className = "displayTestText ml-[10px] pt-[25px] pb-[25px]"> Display all Tests </h2>
                </button>

                <button className = "createTestButton flex items-center w-[20%]">
                    <div className = "createTestCircle items-center">
                        <h2 className = "enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] rounded-[50%] bg-[black] text-[white] font-normal text-[140%] text-center">
                            +
                        </h2>
                    </div>
                    <h2 className = "createTestText ml-[15px]">Create a new Test </h2>
                </button>
            </div>

            <div
                className = "mindmapDisplay border-y-[1px] border-y-[black] border-y-[solid] flex items-center px-[20px] justify-between">
                <button className = "mindmapDisplayButton w-[60%] flex items-center">
                    <div className="displayCircles w-[25px] h-[34px] justify-center">
                        <div className={circles}></div>
                        <div className={circles}></div>
                        <div className={finalCircle}></div>
                    </div>
                    <h2 className="displayMindmapText ml-[10px] pt-[25px] pb-[25px]"> Display all Mind Maps </h2>
                </button>

                <button className= "createMindmapButton flex items-center w-[20%]">
                    <div className="createMindmapCircle items-center">
                        <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] rounded-[50%] bg-[black] text-[white] font-normal text-[140%] text-center">
                            +
                        </h2>
                    </div>
                    <h2 className = "createMindmapText ml-[15px]">Create a new Mind Map </h2>
                </button>
            </div>
        </>
    )
}
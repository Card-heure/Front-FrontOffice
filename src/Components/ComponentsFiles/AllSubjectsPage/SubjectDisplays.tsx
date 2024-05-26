export default function SubjectDisplays () {
    const titleSave = localStorage.getItem('titleSave');
    return (
        <>
            <div className = "subjectAndTitle flex h-[40px] items-center w-[55%] mx-[auto] mt-[75px] mb-[50px] text-[160%] font-extralight text-left justify-center overflow-clip">
                <h1 className = "subject max-w-[15%] mr-[12px]"> Subject:</h1>
                <h1 className = "subjectTitle max-w-[30%] font-semibold">{titleSave}</h1>
            </div>

            <div className = "flashcardDisplay border-t-[1px] border-t-[black] border-t-[solid]">
                <button>
                    <h2 className = "pt-[25px] pb-[25px]"> Display all Flashcard Sets </h2>
                </button>

                <button className="flex items-center w-[20%]">
                    <div className="items-center">
                        <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] rounded-[50%] bg-[black] text-[white] font-normal text-[140%] text-center">
                            +
                        </h2>
                    </div>
                    <h2 className="ml-[25px]">Create a new Flashcard Set </h2>
                </button>
            </div>

            <div className = "testDisplay border-t-[1px] border-t-[black] border-t-[solid]">
                <button>
                    <h2 className = "pt-[25px] pb-[25px]"> Display all Tests </h2>
                </button>

                <button className = "flex items-center w-[20%]">
                    <div className="items-center">
                        <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] rounded-[50%] bg-[black] text-[white] font-normal text-[140%] text-center">
                            +
                        </h2>
                    </div>
                    <h2 className="ml-[25px]">Create a new Test </h2>
                </button>
            </div>

            <div
                className = "mindmapDisplay border-t-[1px] border-t-[black] border-t-[solid] border-b-[1px] border-b-[black] border-b-[solid]">
                <button>
                    <h2 className = "pt-[25px] pb-[25px]"> Display all Mind Maps </h2>
                </button>

                <button className = "flex items-center w-[20%]">
                    <div className = "items-center">
                        <h2 className = "enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] rounded-[50%] bg-[black] text-[white] font-normal text-[140%] text-center">
                            +
                        </h2>
                    </div>
                    <h2 className = "ml-[25px]">Create a new Mind Map </h2>
                </button>
            </div>
        </>
    )
}
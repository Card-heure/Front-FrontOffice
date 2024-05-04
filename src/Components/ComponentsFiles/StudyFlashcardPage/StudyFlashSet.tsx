export default function StudyFlashSet() {
    const titleSave = localStorage.getItem('titleSave');
    const flashSetTitle = localStorage.getItem('flashSetTitle');

    return (
        <>
            <div className="subjectAndTitle flex h-[40px] items-center w-[55%] mx-[auto] mt-[75px] mb-[70px] text-[160%] font-extralight text-left justify-center overflow-clip">
                <h1 className="subject max-w-[10%]"> Subject:</h1>
                <h1 className="subjectTitle max-w-[25%] ml-[2%] font-bold">{titleSave}</h1>
                <h1 className="divider w-[2%] mx-[2%] text-center"> | </h1>
                <h1 className="flashcardSet max-w-[25%] h-[35px] items-baseline"> Flashcard Set: </h1>
                <h1 className = "flashSetTitle ml-[2%] w-[26%] font-bold">{flashSetTitle}</h1>
            </div>

            <div className = "cardAndFlip w-[60%] items-center mx-auto flex justify-between">
                <div className = "currentCard flex text-center items-center w-[650px] h-[300px] ml-[6%] border-[black] border-[1px] border-[solid] [box-shadow:-10px_11px_2px_rgb(199,_199,_201)] rounded-[20px]">
                    <p className = "currentCardText flex mx-[auto] px-[25px] font-light text-[140%]">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <button className = "flipOver flex flex-wrap justify-center w-[75px] h-[90px]">
                    <h1 className = "flipArrow text-[350%] h-[50px] leading-[50px]"> &#8594; </h1>
                    <h1 className = "flipText h-[35px] leading-[35px] font-light"> Flip Over </h1>
                </button>
            </div>

            <div className = "resultAndCount flex items-center justify-between h-[70px] w-[55%] mx-[auto] mt-[50px] mb-[150px]">
                <div className = "result w-[25%] justify-center flex">
                    <div className = "correct flex w-[50%] justify-center">
                        <button className = "correctCircle flex justify-center items-center text-[150%] w-[50px] h-[50px] rounded-[50%] border-[1px] border-[black] border-[solid] bg-[rgba(197,_255,_203,_.65)]">
                            &#x2713;
                        </button>
                    </div>
                    <div className = "incorrect flex w-[50%] justify-center">
                        <button className = "incorrectCircle flex justify-center items-center text-[150%] font-bold w-[50px] h-[50px] rounded-[50%] border-[1px] border-[black] border-[solid] bg-[rgba(255,_106,_106,_.65)]">
                            &#10005;
                        </button>
                    </div>
                </div>

                <div className = "count flex w-[20%] font-light text-[120%] mr-[8%]">
                    <p> Card 2 / 29</p>
                </div>
            </div>
        </>
    );
}
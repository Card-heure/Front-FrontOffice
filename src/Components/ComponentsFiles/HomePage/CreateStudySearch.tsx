export default function CreateStudySearch() {
    return (
        <>
        <button className="create flex items-center justify-center mt-[20px] w-[500px] h-[80px] mx-[auto]">
            <div className="createButton min-h-[35px] min-w-[35px] flex content-center items-center ml-[28px]">
                <img src="/src/assets/addIcon.png" className="addIcon w-[35px] h-[auto]"/>
            </div>
            <h1 className="createText ml-[20px] text-[110%]"> Create a new subject to begin adding material </h1>
        </button>

        <div className="orDivider w-[100px] mx-[auto] mt-[35px] text-center">
            <p className="or italic text-[120%]"> Or </p>
        </div>

        <div className="studyAddSearch flex items-center justify-around w-[100%] h-[100px] mt-[25px]">
            <button className = "studyAdd flex items-center justify-center w-[28%] ml-[18%] mr-[4%]">
                <div className="studyAddButton min-h-[35px] min-w-[35px] flex content-center items-center">
                    <img src = "/src/assets/DownArrow.png" className = "studyAddIcon w-[35px] h-[auto]"/>
                </div>
                <h1 className="createText ml-[15px] text-[110%]"> Study or add material to an existing subject </h1>
            </button>

            <div className = "search flex items-center justify-center w-[28%] mr-[18%] ml-[4%]">
                <input type = "search" placeholder = "Search All Subjects..."
                       className = "subjectSearchBar w-[265px] h-[45px] bg-[black] border-[black] border-[1px] border-[solid] rounded-[16px] p-[22px] "/>
                <button
                    className="subjectSearchButton min-h-[35px] min-w-[35px] flex content-center items-center ml-[28px]">
                    <img src="/src/assets/searchIcon.png" className="searchIcon w-[44px] h-[auto]"/>
                </button>
            </div>
        </div>
        </>
    )
}
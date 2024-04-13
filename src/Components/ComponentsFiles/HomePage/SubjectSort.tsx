import {useState} from "react";

export default function SubjectSort() {

    const originalSubjects = [
        "Economics",
        "Algebra",
        "English",
        "Statistics",
        "AP Government",
    ];

    const [subjects, setSubjects] = useState(originalSubjects);

    const [searchInput, setSearchInput] = useState("");
    const handleSearchInput = (event) => {
        const inputValue = event.target.value;
        setSearchInput(inputValue);
        const filteredSubjects = originalSubjects.filter((subject) => subject.toLowerCase().includes(inputValue.toLowerCase()));
        setSubjects(filteredSubjects);
    };

    const [sortOptionsHidden, setSortOptionsHidden] = useState(true);
    // 1st constant = what will be updated, 2nd is what will update it, useState = initial value before update
    const [sortType, setSortType] = useState("Newest Subjects First");

    const toggleSortOptions = () => {
        setSortOptionsHidden(!sortOptionsHidden); // the "!" means that it will set the boolean value to the opposite of whatever it currently is
    };

    const sortSubjects = (type) => {
        let sortedSubjects = [...subjects]; // the ellipses mean that "subjects" is an array (creating a new constant -sortedSubjects-
        // which copies the subjects array
        switch (type) {
            case "Newest Subjects First":
                sortedSubjects.sort((a, b) => b.localeCompare(a));
                break;
            case "Oldest Subjects First":
                sortedSubjects.sort((a, b) => a.localeCompare(b));
                break;
            case "A - Z":
                sortedSubjects.sort((a, b) => a.localeCompare(b));
                break;
            case "Z - A":
                sortedSubjects.sort((a, b) => b.localeCompare(a));
                break;
        }
        setSubjects(sortedSubjects);
        setSortType(type);
        setSortOptionsHidden(true);
    };

    // <ul className={sortOptionsHidden ? "sortOptions hidden" : "sortOptions"} --> sortOptionsHidden true ? then classname = "sortOptions hidden".
    //                                                                                                       Otherwise, just "sortOptions"
    // sortOptions is being used in the CSS file
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
                <button
                    className="studyAdd flex items-center justify-center w-[30%] h-[45px] overflow-hidden ml-[16%] mr-[4%]">
                    <div className="studyAddButton min-h-[35px] min-w-[35px] flex content-center items-center">
                        <img src="/src/assets/DownArrow.png" className="studyAddIcon w-[35px] h-[auto]"/>
                    </div>
                    <h1 className="createText ml-[6%] text-[110%]"> Study or add material to an existing subject </h1>
                </button>

                <div className="search flex items-center justify-center w-[30%] mr-[16%] ml-[4%]">
                    <input type="text"
                           placeholder="Search All Subjects..."
                           className={"subjectSearchBar w-[100%] h-[45px] bg-[rgb(18,_18,_18)] rounded-[16px] p-[22px] ml-[4%]"}
                           value = {searchInput}
                           onChange = {handleSearchInput}
                           id = "searchBar"
                    />
                    <button
                        className="subjectSearchButton min-h-[35px] min-w-[35px] flex content-center items-center ml-[7%] mr-[11%]">
                        <img src="/src/assets/searchIcon.png" className="searchIcon w-[44px] h-[auto]"/>
                    </button>
                </div>
            </div>

            <div className="subjectSection border-t-[black] border-t-[1px] border-t-[solid] mt-[65px]">
                <div className="sort w-[30%] mx-[auto] mt-[30px] text-center flex text-[rgb(87,_88,_87)]">
                    <div className="sortBy h-[30px] w-[14%] ml-[19%]">
                        <p className="overflow-hidden h-[30px] leading-[30px]">
                            Sort By:
                        </p>
                    </div>

                    <div className="sortMenu w-[48%] mr-[19%] relative bg-[rgb(255,_255,_255)]">
                        <div className="menuSelected">
                            <button
                                className="sortSelected overflow-hidden h-[30px] leading-[30px] text-[black]"
                                onClick={toggleSortOptions}
                            >
                                {sortType}
                            </button>
                        </div>

                        <ul className={sortOptionsHidden ? "sortOptions hidden" : "sortOptions"}
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                width: '100%',
                                border: '1px solid grey',
                                borderRadius: '12px',
                                background: 'white',
                                padding: '2px 4px 16px'
                            }}>
                            <li onClick={() => sortSubjects("Newest Subjects First")}>
                                <button>Newest Subjects First</button>
                            </li>
                            <li onClick={() => sortSubjects("Oldest Subjects First")}>
                                <button>Oldest Subjects First</button>
                            </li>
                            <li onClick={() => sortSubjects("A - Z")}>
                                <button>A - Z</button>
                            </li>
                            <li onClick={() => sortSubjects("Z - A")}>
                                <button>Z - A</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <ul className = "subject flex mx-[auto] w-[80%] flex-wrap pl-[3%] mt-[65px]">
                    {subjects.map((subject, index) => (
                        <li key={index}>{subject}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}
/* original
    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
        if (searchInput.trim().length > 0) {
            setSubjects(originalSubjects.filter((subject) => subject.toLowerCase().includes(searchInput.toLowerCase())));
        }
        else {
            setSubjects(originalSubjects)
        }
    }
 */
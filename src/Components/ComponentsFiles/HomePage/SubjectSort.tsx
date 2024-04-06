import React, { useState } from "react";

export default function SubjectSort() {
    const [sortOptionsHidden, setSortOptionsHidden] = useState(true);
    const [sortType, setSortType] = useState("Newest Subjects First");
    const [subjects, setSubjects] = useState([
        "Economics",
        "Algebra",
        "English",
        "Statistics",
        "AP Government",
    ]);

    const toggleSortOptions = () => {
        setSortOptionsHidden(!sortOptionsHidden);
    };

    const sortSubjects = (type) => {
        let sortedSubjects = [...subjects]; // Create a copy of the subjects array
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
            default:
                break;
        }
        setSubjects(sortedSubjects); // Update the subjects state with the sorted array
        setSortType(type); // Update the sort type
        setSortOptionsHidden(true); // Hide sort options after selection
    };

    return (
        <div className="subjectSection border-t-[black] border-t-[1px] border-t-[solid] mt-[65px]">
            <div className="sort w-[30%] mx-[auto] mt-[30px] text-center flex text-[rgb(87,_88,_87)]">
                <div className="sortBy h-[30px] w-[14%] ml-[19%]">
                    <p className="overflow-hidden h-[30px] leading-[30px]">
                        {" "}
                        Sort By:
                    </p>
                </div>

                <div className="sortMenu w-[48%] mr-[19%] relative bg-[rgb(255,_255,_255)]">
                    <div className="menuSelected">
                        <button
                            className="sortSelected overflow-hidden h-[30px] leading-[30px] text-[black]"
                            onClick={toggleSortOptions}
                            style={{ borderBottom: '1px solid black' }}
                        >
                            {sortType}
                        </button>
                    </div>

                    <ul className={sortOptionsHidden ? "sortOptions hidden" : "sortOptions"} style={{ position: 'absolute', top: '100%', left: 0, width: '100%', border: '1px solid grey', borderRadius: '12px', background: 'white', padding: '2px 4px 16px'}}>
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

            <ul className="subject flex mx-[auto] w-[80%] flex-wrap mt-[65px]">
                {subjects.map((subject, index) => (
                    <li key={index}>{subject}</li>
                ))}
            </ul>
        </div>
    );
}


/* import {useState} from "react";

export default function SubjectSort() {

    const SortOptionsHidden = "sortOptions w-[100%] mx-[auto] absolute hidden";
    const sortOptionsShow = "sortOptions w-[100%] pb-[16px] bg-[rgb(255,_255,_255)] border-[black] border-[solid] border-[1px] rounded-[16px] absolute";
    const [subjects, setSubjects] = useState(["Economics", "Algebra", "English", "Statistics", "AP Government"]);

    const showMenu = () => {
        if (sortOptions.className == SortOptionsHidden) {
            sortOptions.className = sortOptionsShow;
        }
        else if (sortOptions.className == sortOptionsShow) {
            sortOptions.className = SortOptionsHidden;
        }
    }

    const sortOldest = () => {
        sortSelected.innerHTML = oldestFirst.innerHTML;
        newestFirst.className = "";
        oldestFirst.className = "hidden";
        atoZ.className = "";
    }

    const sortAtoZ = () => {
        sortSelected.innerHTML = atoZ.innerHTML;
        newestFirst.className = "";
        oldestFirst.className = "";
        atoZ.className = "hidden";
        ztoA.className = "";
        const sorted = subjects.sort((a,b) => a.localeCompare(b));
        setSubjects(sorted);
    }

    const sortZtoA = () => {
        sortSelected.innerHTML = ztoA.innerHTML;
        newestFirst.className = "";
        oldestFirst.className = "";
        atoZ.className = "";
        ztoA.className = "hidden";
    }

    const sortNewest = () => {
        sortSelected.innerHTML = newestFirst.innerHTML;
        newestFirst.className = "hidden";
        oldestFirst.className = "";
        atoZ.className = "";
        ztoA.className = "";
    }



    return (
        <>
            <div className = "subjectSection border-t-[black] border-t-[1px] border-t-[solid] mt-[65px]">

                <div className="sort w-[30%] mx-[auto] mt-[30px] text-center flex text-[rgb(87,_88,_87)]">

                    <div className="sortBy h-[30px] w-[14%] ml-[19%]">
                        <p className = "overflow-hidden h-[30px] leading-[30px]"> Sort By:</p>
                    </div>

                    <div className = "sortMenu w-[48%] mr-[19%] relative bg-[rgb(255,_255,_255)]">
                        <div className="menuSelected">
                            <button className = "sortSelected overflow-hidden h-[30px] leading-[30px] text-[black]"
                                    id = "sortSelected"
                                    onClick = {showMenu}>Newest Subjects First</button>
                        </div>

                        <ul className = {SortOptionsHidden} id = "sortOptions">
                            <li className = "hidden" id = "newestFirst" onClick = {sortNewest}>
                                <button>Newest Subjects First</button>
                            </li>
                            <li className = "" id = "oldestFirst" onClick = {sortOldest}>
                                <button>Oldest Subjects First</button>
                            </li>
                            <li className = "" id = "atoZ" onClick = {sortAtoZ}>
                                <button>A - Z</button>
                            </li>
                            <li className = "" id = "ztoA" onClick = {sortZtoA}>
                                <button>Z - A</button>
                            </li>
                        </ul>
                    </div>

                </div>

                <ul className = "subject flex mx-[auto] w-[80%] flex-wrap mt-[65px]">
                    {subjects.map((subject, index) =>
                        (
                        <li key={index}>{subject}</li>
                        ))}
                </ul>
            </div>
        </>
    )
}
*/
export default function SubjectSort() {

    const sortOptionsHidden = "sortOptions w-[100%] mx-[auto] absolute hidden";
    const sortOptionsShow = "sortOptions w-[100%] pb-[16px] bg-[rgb(255,_255,_255)] border-[black] border-[solid] border-[1px] rounded-[16px] absolute";
    const showMenu = () => {
        if (sortOptions.className == sortOptionsHidden) {
            sortOptions.className = sortOptionsShow;
        }
        else if (sortOptions.className == sortOptionsShow) {
            sortOptions.className = sortOptionsHidden;
        }
    }

    const sortOldest = () => {
        sortSelected.innerHTML = oldestFirst.innerHTML;
        newestFirst.className = "";
        oldestFirst.className = "hidden";
        atoZ.className = "";
        ztoA.className = "";
    }

    const sortAtoZ = () => {
        sortSelected.innerHTML = atoZ.innerHTML;
        newestFirst.className = "";
        oldestFirst.className = "";
        atoZ.className = "hidden";
        ztoA.className = "";
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

                        <ul className = {sortOptionsHidden} id = "sortOptions">
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
                    <li>Economics</li>
                    <li>Algebra</li>
                    <li>English</li>
                    <li>Statistics</li>
                    <li>AP Government</li>
                </ul>
            </div>
        </>
    )
}
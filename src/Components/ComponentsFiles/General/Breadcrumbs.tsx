import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Breadcrumbs() {
    const location = useLocation();

    const [currentPage, setCurrentPage] = useState([]);

    useEffect(() => {
        // Update currentPage whenever location changes
        // @ts-ignore
        setCurrentPage(location.pathname.split('/').filter(crumb => crumb != '').map(crumb => crumb.trim()));
    }, [location.pathname]);

    const crumbs = currentPage.map((crumb, index) => {

        if (crumb == 'newSubject') {
            // @ts-ignore
            crumb = "New Subject";
        }
        if (crumb == 'newflashcard') {
            // @ts-ignore
            crumb = "New Flash Card";
        }
        if (crumb == "StudyFlashCardSet") {
            // @ts-ignore
            crumb = "Study Flashcard Set";
        }
        if (crumb == "SubjectView") {
            // @ts-ignore
            crumb = "Subject";
        }

        return (
        <span className="crumb ml-[2px]" key={index}>
            <Link to={`/${currentPage.slice(0, index + 1).join('/')}`}>{crumb}</Link>
        </span>
        )
    });

    return (
        <>
            <div className="breadcrumbs capitalize w-[90%] mx-[5%] mt-[50px] flex flex-nowrap">
                {crumbs}
            </div>
        </>
    );
}

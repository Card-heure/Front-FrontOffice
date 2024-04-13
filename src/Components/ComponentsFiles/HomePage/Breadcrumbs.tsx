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
            crumb = "New Subject";
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

import {Link, useLocation} from "react-router-dom";

export default function Breadcrumbs() {
    const location = useLocation()

    let currentPage = ''
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentPage += `/${crumb}`

            return (
                <div className = "crumb" key = {crumb}>
                    <Link to = {currentPage}>{crumb}</Link>
                </div>
            )
        })

    return (
        <>
            <div className = "breadcrumbs capitalize mx-[68px] mt-[50px]">
                {crumbs}
            </div>
        </>
    )
}
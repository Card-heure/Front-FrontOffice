import {Link, useLocation} from "react-router-dom";

export default function Breadcrumbs() {
    const location = useLocation()

    let currentPage = ''
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentPage += `/${crumb}`

            return (
                <div className = "crumb capitalize" key = {crumb}>
                    <Link to = {currentPage}>{crumb}</Link>
                </div>
            )
        })

    return (
        <>
            <div className = "breadCrumbs">
                {crumbs}
            </div>
        </>
    )
}
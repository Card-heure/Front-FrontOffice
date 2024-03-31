import Header from "#ComponentsFiles/HomePage/Header.tsx"
import Breadcrumbs from "#ComponentsFiles/HomePage/Breadcrumbs.tsx";
import CreateStudySearch from "#ComponentsFiles/HomePage/CreateStudySearch.tsx";
import SubjectSort from "#ComponentsFiles/HomePage/SubjectSort.tsx";
import SortMenu from "#ComponentsFiles/HomePage/SortMenu.tsx";
export default function Home () {
    return (
        <>
            <Header/>
            <Breadcrumbs/>
            <CreateStudySearch/>
            <SubjectSort/>
        </>
    )
}
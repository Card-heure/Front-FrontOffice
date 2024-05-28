import HeaderNoGreeting from "#ComponentsFiles/General/HeaderNoGreeting.tsx";
import Breadcrumbs from "#ComponentsFiles/General/Breadcrumbs.tsx";
import SubjectDisplays from "#ComponentsFiles/AllSubjectsPage/SubjectDisplays.tsx";

export default function SubjectView () {
    return (
        <>
            <HeaderNoGreeting/>
            <Breadcrumbs/>
            <SubjectDisplays/>
        </>
    )
};
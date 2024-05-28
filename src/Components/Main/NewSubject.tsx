import HeaderNoGreeting from "#ComponentsFiles/General/HeaderNoGreeting.tsx";
import Breadcrumbs from "#ComponentsFiles/General/Breadcrumbs.tsx";
import CreateANewSubject from "#ComponentsFiles/NewSubjectPage/CreateANewSubject.tsx";

export default function NewSubject() {
    return (
        <>
            <HeaderNoGreeting/>
            <Breadcrumbs/>
            <CreateANewSubject/>
        </>
    )
}
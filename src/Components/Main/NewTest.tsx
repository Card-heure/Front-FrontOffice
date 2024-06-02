import HeaderNoGreeting from "#ComponentsFiles/General/HeaderNoGreeting.tsx";
import Breadcrumbs from "#ComponentsFiles/General/Breadcrumbs.tsx";
import CreateTest from "#ComponentsFiles/NewTestPage/CreateTest.tsx";

export default function NewTest() {
    return (
        <>
            <HeaderNoGreeting/>
            <Breadcrumbs/>
            <CreateTest/>
        </>
    )
}
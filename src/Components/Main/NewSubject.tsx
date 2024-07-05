import HeaderNoGreeting from "#ComponentsFiles/General/HeaderNoGreeting.tsx";
import CreateANewSubject from "#ComponentsFiles/NewSubjectPage/CreateANewSubject.tsx";
import Footer from "#ComponentsFiles/General/Footer.tsx";

export default function NewSubject() {
  return (
    <>
        <HeaderNoGreeting/>
        <CreateANewSubject/>
        <Footer/>
    </>
  )
}
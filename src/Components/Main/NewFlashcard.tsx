import HeaderNoGreeting from "#ComponentsFiles/General/HeaderNoGreeting.tsx";
import CreateFlashcard from "#ComponentsFiles/NewFlashcardPage/CreateFlashcard.tsx";
import Footer from "#ComponentsFiles/General/Footer.tsx";

export default function NewFlashcard() {
  return (
    <>
        <HeaderNoGreeting/>
        <CreateFlashcard/>
        <Footer/>
    </>
  )
}
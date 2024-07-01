import HeaderNoGreeting from "#ComponentsFiles/General/HeaderNoGreeting.tsx";
import Breadcrumbs from "#ComponentsFiles/General/Breadcrumbs.tsx";
import CreateFlashcard from "#ComponentsFiles/NewFlashcardPage/CreateFlashcard.tsx";

export default function NewFlashcard() {
  return (
    <>
      <HeaderNoGreeting/>
      <Breadcrumbs/>
      <CreateFlashcard/>
    </>
  )
}
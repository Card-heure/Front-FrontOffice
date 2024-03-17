import Header from "#ComponentsFiles/Header.tsx";
import TitleCard from "#ComponentsFiles/TitleCard.tsx";
import AboutSection from "#ComponentsFiles/AboutSection.tsx";
import Scroll from "#ComponentsFiles/Scroll.tsx";
export default function Main() {
  return (
    <>
      <Header/>
      <Scroll/>
      <TitleCard/>
      <AboutSection/>
    </>
  )
}
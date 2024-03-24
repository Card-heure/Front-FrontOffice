import Header from "#ComponentsFiles/LandingPage/Header.tsx";
import TitleCard from "#ComponentsFiles/LandingPage/TitleCard.tsx";
import AboutSection from "#ComponentsFiles/LandingPage/AboutSection.tsx";
import Scroll from "#ComponentsFiles/LandingPage/Scroll.tsx";
import GoogleLogIn from "#ComponentsFiles/LandingPage/GoogleLogIn.tsx";
export default function Main() {
  return (
    <>
      <Header/>
      <Scroll/>
      <TitleCard/>
      <AboutSection/>
        <GoogleLogIn/>
    </>
  )
}
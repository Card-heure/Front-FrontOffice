import LandingHeader from "#ComponentsFiles/LandingPage/LandingHeader.tsx";
import TitleCard from "#ComponentsFiles/LandingPage/TitleCard.tsx";
import AboutSection from "#ComponentsFiles/LandingPage/AboutSection.tsx";
import Scroll from "#ComponentsFiles/LandingPage/Scroll.tsx";
import GoogleLogIn from "#ComponentsFiles/LandingPage/GoogleLogIn.tsx";
export default function Main() {
  return (
    <>
      <LandingHeader/>
      <Scroll/>
      <TitleCard/>
      <AboutSection/>
        <GoogleLogIn/>
    </>
  )
}
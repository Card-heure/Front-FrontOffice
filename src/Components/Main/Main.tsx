import LoginHeader from "#ComponentsFiles/LandingPage/LoginHeader.tsx";
import TitleCard from "#ComponentsFiles/LandingPage/TitleCard.tsx";
import AboutSection from "#ComponentsFiles/LandingPage/AboutSection.tsx";
import Scroll from "#ComponentsFiles/LandingPage/Scroll.tsx";
import GoogleLogIn from "#ComponentsFiles/LandingPage/GoogleLogIn.tsx";
export default function Main() {
  return (
    <>
      <LoginHeader/>
      <Scroll/>
      <TitleCard/>
      <AboutSection/>
        <GoogleLogIn/>
    </>
  )
}
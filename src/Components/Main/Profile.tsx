import HeaderNoGreeting from "#ComponentsFiles/General/HeaderNoGreeting.tsx";
import UserProfile from "#ComponentsFiles/UserProfilePage/UserProfile.tsx";
import Footer from "#ComponentsFiles/General/Footer.tsx";

export default function Profile() {
  return (
    <>
        <HeaderNoGreeting/>
        <UserProfile/>
        <Footer/>
    </>
  );
}
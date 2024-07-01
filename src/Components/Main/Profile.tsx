import HeaderNoGreeting from "#ComponentsFiles/General/HeaderNoGreeting.tsx";
import Breadcrumbs from "#ComponentsFiles/General/Breadcrumbs.tsx";
import UserProfile from "#ComponentsFiles/UserProfilePage/UserProfile.tsx";

export default function Profile() {
  return (
    <>
      <HeaderNoGreeting/>
      <Breadcrumbs/>
      <UserProfile/>
    </>
  );
}
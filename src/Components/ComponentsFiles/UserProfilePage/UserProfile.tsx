import {useEffect, useState} from "react";
import {TUpdateUser, TUser} from "../../../Types/TUser.ts";
import {apiRequest} from "../../../Utils/ApiRequest.ts";
import {EGender} from "../../../Types/enum/EGender.ts";
import {useNavigate} from "react-router-dom";

export default function UserProfile() {
  const navigator = useNavigate();
  const [me, setMe] = useState<TUser | null>(null);
  useEffect(() => {
    if (me) {
      setUpdatedUserName(me?.fullName);
      setUpdatedFirstName(me?.firstName);
      setUpdatedLastName(me?.lastName);
      setUpdatedEmailAddress(me?.email);
      setUpdatedBirthday(me?.birthDate?.toString());
      setUpdatedGender(EGender[me?.gender ?? 0]);
    }else {
      apiRequest<null, TUser>(`me`, 'GET').then((response) => {
        setMe(response.response)
      })
    }
  }, [me]);
  const [showGender, setShowGender] = useState("genderSelectionMenu hidden w-[250px] rounded-[10px] p-[25px] border-[1px] border-[solid] border-[black] text-[115%] font-light leading-[40px]")
  const [genderHidden, setGenderHidden] = useState(true);
  const [updatedUserName, setUpdatedUserName] = useState(me?.firstName);
  const [updatedFirstName, setUpdatedFirstName] = useState(me?.firstName);
  const [updatedLastName, setUpdatedLastName] = useState(me?.lastName);
  const [updatedEmailAddress, setUpdatedEmailAddress] = useState(me?.email);
  const [updatedBirthday, setUpdatedBirthday] = useState(me?.birthDate?.toString());
  const [updatedGender, setUpdatedGender] = useState(EGender[me?.gender ?? 0]);
  const [underlineUserName, setUnderlineUserName] = useState("changeUsername overflow-y-hidden text-[110%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px]");
  const [underlineFirstName, setUnderlineFirstName] = useState("changeFirstName overflow-y-hidden text-[110%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px]");
  const [underlineLastName, setUnderlineLastName] = useState("changeLastName overflow-y-hidden text-[110%] font-extralight h-[40px] leading-[40px] outline-none resize-none");
  const [underlineEmailAddress, setUnderlineEmailAddress] = useState("changeEmailAddress overflow-y-hidden text-[110%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px] w-[312px]");
  const [underlineBirthday, setUnderlineBirthday] = useState("changeBirthday text-[110%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px] w-[300px]");
  const modifyIcon = "/src/assets/pencilIcon.png";
  const saveCheckIcon = "/src/assets/saveCheckIcon.png";
  const [userNameIcon, setUserNameIcon] = useState(false);
  const [firstNameIcon, setFirstNameIcon] = useState(false);
  const [lastNameIcon, setLastNameIcon] = useState(false);
  const [emailIcon, setEmailIcon] = useState(false);
  const [birthdayIcon, setBirthdayIcon] = useState(false);
  const [genderIcon, setGenderIcon] = useState(false);

  function updateProfile() {
    apiRequest<TUpdateUser, TUser>(`api/user/${me?.id}`, 'PUT', {
      fullName: updatedUserName!,
      email: updatedEmailAddress!,
      firstName: updatedFirstName ?? null,
      lastName: updatedLastName ?? null,
      birthDate: updatedBirthday ? new Date(updatedBirthday) : null,
      gender: updatedGender? parseInt(Object.entries(EGender).find(([key,value]) => value === updatedGender)![0]) : 0
    }).then((response) => {
      console.log(response.response);
      setMe(response.response);
      window.location.reload();
    })
  }

  const modifyUsername = () => {
    const mod = document.getElementById("usernameField") as HTMLInputElement;
    if (mod.hasAttribute('readonly')) {
      mod.removeAttribute('readonly')
      setUnderlineUserName("changeUsername overflow-y-hidden text-[110%] font-extralight mr-[18px] border-b-[1px] border-b-[solid] border-b-[black] h-[40px] leading-[40px] outline-none resize-none mb-[45px]")
      mod.focus();

      const length = mod.value.length;
      mod.setSelectionRange(length, length);
      setUserNameIcon(true);
    } else {
      mod.setAttribute('readonly', "true");
      setUserNameIcon(false);
      setUnderlineUserName("changeUsername overflow-y-hidden text-[110%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px]");
      updateProfile()
    }
  };
  const modifyFirstName = () => {
    const mod = document.getElementById("firstNameField") as HTMLInputElement;
    if (mod.hasAttribute('readonly')) {
      mod.removeAttribute('readonly')
      setUnderlineFirstName("changeFirstName overflow-y-hidden text-[110%] font-extralight mr-[18px] border-b-[1px] border-b-[solid] border-b-[black] h-[40px] leading-[40px] outline-none resize-none mb-[45px]")
      mod.focus();

      const length = mod.value.length;
      mod.setSelectionRange(length, length);
      setFirstNameIcon(true);
    } else {
      mod.setAttribute('readonly', "true");
      setFirstNameIcon(false);
      setUnderlineFirstName("changeFirstName overflow-y-hidden text-[110%] font-extralight mr-[18px] h-[40px] leading-[40px] outline-none resize-none mb-[45px]")
      updateProfile()
    }
  };

  const modifyLastName = () => {
    const mod = document.getElementById("lastNameField") as HTMLInputElement;
    if (mod.hasAttribute('readonly')) {
      mod.removeAttribute('readonly')
      setUnderlineLastName("changeLastName overflow-y-hidden text-[110%] font-extralight mr-[18px] border-b-[1px] border-b-[solid] border-b-[black] h-[40px] leading-[40px] outline-none resize-none mb-[45px]")
      mod.focus();

      const length = mod.value.length;
      mod.setSelectionRange(length, length);
      setLastNameIcon(true);
    } else {
      mod.setAttribute('readonly', "true");
      setLastNameIcon(false);
      setUnderlineLastName("changeLastName overflow-y-hidden text-[110%] font-extralight mr-[18px] h-[40px] leading-[40px] outline-none resize-none mb-[45px]")
      updateProfile()
    }
  };

  const modifyEmailAddress = () => {
    const mod = document.getElementById("emailAddressField") as HTMLInputElement;
    if (mod.hasAttribute('readonly')) {
      mod.removeAttribute('readonly')
      setUnderlineEmailAddress("changeEmailAddress overflow-y-hidden text-[110%] font-extralight mr-[55px] border-b-[1px] border-b-[solid] border-b-[black] h-[40px] leading-[40px] outline-none resize-none mb-[45px] w-[312px]")
      mod.focus();

      const length = mod.value.length;
      mod.setSelectionRange(length, length);
      setEmailIcon(true);
    } else {
      mod.setAttribute('readonly', "true");
      setEmailIcon(false);
      setUnderlineEmailAddress("changeEmailAddress overflow-y-hidden text-[110%] font-extralight mr-[55px] h-[40px] leading-[40px] outline-none resize-none mb-[45px] w-[312px]")
      updateProfile();
    }
  };

  const modifyBirthday = () => {
    const mod = document.getElementById("birthdayField") as HTMLInputElement;
    if (!birthdayIcon) {
      setUnderlineBirthday("changeBirthday text-[110%] font-extralight mr-[175px] border-b-[1px] border-b-[solid] border-b-[black] h-[40px] leading-[40px] outline-none resize-none mb-[45px]")
      mod.focus();
      setBirthdayIcon(true);
    } else {
      setBirthdayIcon(false);
      setUnderlineBirthday("changeBirthday text-[110%] font-extralight mr-[175px] h-[40px] leading-[40px] outline-none resize-none mb-[45px]")
      updateProfile();
    }
  };

  const genderMenu = () => {
    if (genderHidden) {
      setShowGender("genderSelectionMenu w-[250px] rounded-[10px] p-[25px] border-[1px] border-[solid] border-[black] text-[115%] font-light leading-[40px]");
      setGenderHidden(false);
      setGenderIcon(true);
    }
    if (!genderHidden) {
      setShowGender("genderSelectionMenu hidden w-[250px] rounded-[10px] p-[25px] border-[1px] border-[solid] border-[black] text-[115%] font-light leading-[40px]");
      setGenderHidden(true);
      setGenderIcon(false);
    }
  };

  const changeUserName = (event) => {
    setUpdatedUserName(event.target.value);
  };

  const changeFirstName = (event) => {
    setUpdatedFirstName(event.target.value);
  };

  const changeLastName = (event) => {
    setUpdatedLastName(event.target.value);
  };

  const changeEmailAddress = (event) => {
    setUpdatedEmailAddress(event.target.value);
  };

  const changeBirthday = (event) => {
    setUpdatedBirthday(event.target.value);
  };


  const selectGender = (event) => {
    setUpdatedGender(event.target.value);
    setGenderHidden(true);
    setShowGender("genderSelectionMenu hidden w-[250px] rounded-[10px] p-[25px] border-[1px] border-[solid] border-[black] text-[115%] font-light leading-[40px]");
    setGenderIcon(false);
    updateProfile();
  };

  const logOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('expire');
    navigator('/login');

  };

  const deleteAccount = () => {
    apiRequest<null, null>(`api/user/${me?.id}`, 'DELETE').then(() => {
      localStorage.removeItem('jwt');
      localStorage.removeItem('expire');
      window.location.reload();
      navigator('/login');
    })
  };

  return (
    <>
      <div className="greeting w-[75%] mx-[auto] flex mt-[85px] mb-[60px]">
        <h1 className="text-[300%] mr-[30px]"> &#128075;</h1>
        <h1 className="text-[200%] font-light pt-[12px]"> Bonjour, {me?.fullName} !</h1>
      </div>
      <div className="sections w-[83%] mx-[auto] flex justify-between mb-[250px] pl-[3%]">

        <div className={"sectionOne text-black w-[26%] border-r-[3px] border-r-[black] border-r-[solid] py-[50px]"}>

          <h1 className="text-[120%] mb-[5px]"> Nom d'utilisateur </h1>
          <div className="editUsername flex items-start w-[68%]">
            <input readOnly={true}
                   className={underlineUserName}
                   id="usernameField"
                   onChange={changeUserName}
                   value={updatedUserName!}
            />
            <img src={userNameIcon ? saveCheckIcon : modifyIcon}
                 className="editPencil w-[20px] h-[auto] pt-[11px]"
                 id="usernameButton"
                 onClick={modifyUsername}
                 alt={"Modify/Save"}
            />
          </div>

          <h1 className="text-[120%] mb-[5px]"> Prénom </h1>
          <div className="editFirstName flex items-start w-[68%]">
            <input readOnly={true}
                   className={underlineFirstName}
                   id="firstNameField"
                   onChange={changeFirstName}
                   value={updatedFirstName ?? ""}
            />
            <img src={firstNameIcon ? saveCheckIcon : modifyIcon}
                 className="editPencil w-[20px] h-[auto] pt-[11px]"
                 id="firstNameButton"
                 onClick={modifyFirstName}
                 alt={"Modify/Save"}
            />
          </div>

          <h1 className="text-[120%] mb-[5px]"> Nom </h1>
          <div className="editLastName flex items-start w-[68%]">
            <input readOnly={true}
                   className={underlineLastName}
                   id="lastNameField"
                   onChange={changeLastName}
                   value={updatedLastName ?? ""}
            />
            <img src={lastNameIcon ? saveCheckIcon : modifyIcon}
                 className="editPencil w-[20px] h-[auto] pt-[11px]"
                 id="lastNameButton"
                 onClick={modifyLastName}
                 alt={"Modify/Save"}
            />
          </div>
        </div>

        <div className={"sectionTwo text-[black] w-[34%] border-r-[3px] border-r-[black] border-r-[solid] py-[50px]"}>
          <h1 className="text-[120%] mb-[5px]"> Email </h1>
          <div className="editEmailAddress flex items-start w-[75%]">
                    <input    readOnly={true}
                              className={underlineEmailAddress}
                              id="emailAddressField"
                              onChange={changeEmailAddress}
                              value={updatedEmailAddress}
                    />
            <img src={emailIcon ? saveCheckIcon : modifyIcon}
                 className="editPencil w-[20px] h-[auto] pt-[11px]"
                 id="emailAddressButton"
                 onClick={modifyEmailAddress}
                 alt={"Modify/Save"}
            />
          </div>

          <h1 className="text-[120%] mb-[5px]"> Date d'anniversaire </h1>
          <div className="editBirthday flex items-start w-[75%]">
            <input type="date"
                   className={underlineBirthday}
                   id="birthdayField"
                   onChange={changeBirthday}
                   value={updatedBirthday ? new Date(updatedBirthday!).toISOString().split('T')[0]: ""}
            />
            <img src={birthdayIcon ? saveCheckIcon : modifyIcon}
                 className="editPencil w-[20px] h-[auto] pt-[11px]"
                 id="birthdayButton"
                 onClick={modifyBirthday}
                 alt={"Modify/Save"}
            />
          </div>

          <h1 className="text-[120%] mb-[5px]"> Genre </h1>
          <div className="editGender flex items-start w-[75%]">
            <h3
              className="changeGender text-start text-[110%] mr-[4px] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px] w-[300px]"
              id="genderField">
              {updatedGender}
            </h3>
            <img src={genderIcon ? saveCheckIcon : modifyIcon}
                 className="editPencil w-[20px] h-[auto] pt-[11px]"
                 id="genderButton"
                 onClick={genderMenu}
                 alt={"Modify/Save"}
            />
          </div>
          <form className={showGender}>
            <input type="radio" id="femaleButton" value={EGender[0]} name="genderSelectionMenu" onClick={selectGender} checked={EGender[0] === updatedGender}/>
            <label htmlFor="femaleButton" className="ml-[15px] text-[black]"> Femme </label>
            <br/>
            <input type="radio" id="maleButton" value={EGender[1]} name="genderSelectionMenu" onClick={selectGender} checked={EGender[1] === updatedGender}/>
            <label htmlFor="maleButton" className="ml-[15px]"> Homme </label>
            <br/>
            <input type="radio" id="nonBinaryeButton" value={EGender[2]} name="genderSelectionMenu" onClick={selectGender} checked={EGender[2] === updatedGender}/>
            <label htmlFor="nonBinaryButton" className="ml-[15px]"> Non-Binaire </label>
            <br/>
            <input type="radio" id="otherButton" value={EGender[3]} name="genderSelectionMenu" onClick={selectGender} checked={EGender[3] === updatedGender}/>
            <label htmlFor="otherButton" className="ml-[15px]"> Autre </label>
          </form>
        </div>

        <div className={"sectionThree w-[34%] justify-center py-[50px] pl-[1%]"}>
          <div className="flex w-[90%] justify-center">
            <img src="/src/assets/emailIcon.png"
                 className="w-[80px] h-[auto]"
                 alt={"Mail icon"}
            />
          </div>
          <h3 className="text-[115%] w-[90%] text-center font-light leading-[50px] mb-[65px]"> Vous avez une question, un commentaire ou une suggestion ? N'hésitez pas à
            <span className="font-medium">
                            <a href="mailto:madison.owens32@gmail.com?subject=Card'heure Client Contact"> nous contacter</a>
                        </span> :)
          </h3>

          <button className="logOut font-medium text-[106%] w-[90%] mb-[25px]" onClick={logOut}>
            Se déconnecter
          </button>
          <button className="deleteAccount font-medium text-[106%] text-red-600 w-[90%]" onClick={deleteAccount}>Supprimer le compte</button>


        </div>
      </div>
    </>
  )
}
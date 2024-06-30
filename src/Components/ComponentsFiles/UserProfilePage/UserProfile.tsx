import {useState} from "react";

export default function UserProfile() {
    const [userName, setUserName] = useState("JeanDupoint");
    const [firstName, setFirstName] = useState("Jean");
    const [lastName, setLastName] = useState("Dupoint");
    const [emailAddress, setEmailAddress] = useState("jeandupoint@outlook.com");
    const [birthday, setBirthday] = useState("2001-12-19");
    const [gender, setGender] = useState("Female");
    const [showGender, setShowGender] = useState("genderSelectionMenu hidden w-[250px] rounded-[10px] p-[25px] border-[1px] border-[solid] border-[black] text-[115%] font-light leading-[40px]")
    const [genderHidden, setGenderHidden] = useState(true);
    const [updatedUserName, setUpdatedUserName] = useState(userName);
    const [updatedFirstName, setUpdatedFirstName] = useState(firstName);
    const [updatedLastName, setUpdatedLastName] = useState(lastName);
    const [updatedEmailAddress, setUpdatedEmailAddress] = useState(emailAddress);
    const [updatedBirthday, setUpdatedBirthday] = useState(birthday);
    const [updatedGender, setUpdatedGender] = useState(gender);
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

    const modifyUsername = () => {
        const mod = document.getElementById("usernameField") as HTMLInputElement;
        // @ts-ignore
        if (mod.hasAttribute('readonly')) {
            // @ts-ignore
            mod.removeAttribute('readonly')
            setUnderlineUserName("changeUsername overflow-y-hidden text-[110%] font-extralight mr-[18px] border-b-[1px] border-b-[solid] border-b-[black] h-[40px] leading-[40px] outline-none resize-none mb-[45px]")
            // @ts-ignore
            mod.focus();

            const length = mod.value.length;
            mod.setSelectionRange(length, length);
            setUserNameIcon(true);
        }
        else {
            mod.setAttribute('readonly', "true");
            setUserNameIcon(false);
            setUserName(updatedUserName);
            setUnderlineUserName("changeUsername overflow-y-hidden text-[110%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px]");

        }
    };
    const modifyFirstName = () => {
        const mod = document.getElementById("firstNameField") as HTMLInputElement;
        // @ts-ignore
        if (mod.hasAttribute('readonly')) {
            // @ts-ignore
            mod.removeAttribute('readonly')
            setUnderlineFirstName("changeFirstName overflow-y-hidden text-[110%] font-extralight mr-[18px] border-b-[1px] border-b-[solid] border-b-[black] h-[40px] leading-[40px] outline-none resize-none mb-[45px]")
            // @ts-ignore
            mod.focus();

            const length = mod.value.length;
            mod.setSelectionRange(length, length);
            setFirstNameIcon(true);
        }
        else {
            mod.setAttribute('readonly', "true");
            setFirstNameIcon(false);
            setFirstName(updatedFirstName);
            setUnderlineFirstName("changeFirstName overflow-y-hidden text-[110%] font-extralight mr-[18px] h-[40px] leading-[40px] outline-none resize-none mb-[45px]")
        }
    };

    const modifyLastName = () => {
        const mod = document.getElementById("lastNameField") as HTMLInputElement;
        // @ts-ignore
        if (mod.hasAttribute('readonly')) {
            // @ts-ignore
            mod.removeAttribute('readonly')
            setUnderlineLastName("changeLastName overflow-y-hidden text-[110%] font-extralight mr-[18px] border-b-[1px] border-b-[solid] border-b-[black] h-[40px] leading-[40px] outline-none resize-none mb-[45px]")
            // @ts-ignore
            mod.focus();

            const length = mod.value.length;
            mod.setSelectionRange(length, length);
            setLastNameIcon(true);
        }
        else {
            mod.setAttribute('readonly', "true");
            setLastNameIcon(false);
            setLastName(updatedLastName);
            setUnderlineLastName("changeLastName overflow-y-hidden text-[110%] font-extralight mr-[18px] h-[40px] leading-[40px] outline-none resize-none mb-[45px]")
        }
    };

    const modifyEmailAddress = () => {
        const mod = document.getElementById("emailAddressField") as HTMLInputElement;
        // @ts-ignore
        if (mod.hasAttribute('readonly')) {
            // @ts-ignore
            mod.removeAttribute('readonly')
            setUnderlineEmailAddress("changeEmailAddress overflow-y-hidden text-[110%] font-extralight mr-[55px] border-b-[1px] border-b-[solid] border-b-[black] h-[40px] leading-[40px] outline-none resize-none mb-[45px] w-[312px]")
            // @ts-ignore
            mod.focus();

            const length = mod.value.length;
            mod.setSelectionRange(length, length);
            setEmailIcon(true);
        }
        else {
            mod.setAttribute('readonly', "true");
            setEmailIcon(false);
            setEmailAddress(updatedEmailAddress);
            setUnderlineEmailAddress("changeEmailAddress overflow-y-hidden text-[110%] font-extralight mr-[55px] h-[40px] leading-[40px] outline-none resize-none mb-[45px] w-[312px]")
        }
    };

    const modifyBirthday = () => {
        const mod = document.getElementById("birthdayField") as HTMLInputElement;
        // @ts-ignore
        if (!birthdayIcon) {
            setUnderlineBirthday("changeBirthday text-[110%] font-extralight mr-[175px] border-b-[1px] border-b-[solid] border-b-[black] h-[40px] leading-[40px] outline-none resize-none mb-[45px]")
            // @ts-ignore
            mod.focus();
            setBirthdayIcon(true);
        }
        else {
            setBirthdayIcon(false);
            setBirthday(updatedBirthday);
            setUnderlineBirthday("changeBirthday text-[110%] font-extralight mr-[175px] h-[40px] leading-[40px] outline-none resize-none mb-[45px]")
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

    // @ts-ignore
    const changeUserName = (event) => {
        setUpdatedUserName(event.target.value);
    };

    // @ts-ignore
    const changeFirstName = (event) => {
        setUpdatedFirstName(event.target.value);
    };

    // @ts-ignore
    const changeLastName = (event) => {
        setUpdatedLastName(event.target.value);
    };

    // @ts-ignore
    const changeEmailAddress = (event) => {
        setUpdatedEmailAddress(event.target.value);
    };

    // @ts-ignore
    const changeBirthday = (event) => {
        setUpdatedBirthday(event.target.value);
    };


    // @ts-ignore
    const selectGender = (event) => {
            setUpdatedGender(event.target.value);
            setGenderHidden(true);
            setShowGender("genderSelectionMenu hidden w-[250px] rounded-[10px] p-[25px] border-[1px] border-[solid] border-[black] text-[115%] font-light leading-[40px]");
            setGender(updatedGender)
            setGenderIcon(false);
    };

    const logOut = () => {
        console.log("log out")
        console.log(userName);
        console.log(firstName);
        console.log(lastName);
        console.log(emailAddress);
        console.log(birthday);
        console.log(gender);
        localStorage.removeItem('jwt');
        localStorage.removeItem('expire');
        window.location.reload();
    };

    const deleteAccount = () => {
        console.log("delete account")
    };

    return (
        <>
            <div className = "greeting w-[75%] mx-[auto] flex mt-[85px] mb-[60px]">
                <h1 className = "text-[300%] mr-[30px]"> &#128075;</h1>
                <h1 className = "text-[200%] font-light pt-[12px]"> Hello, {firstName} !</h1>
            </div>
            <div className="sections w-[83%] mx-[auto] flex justify-between mb-[250px] pl-[3%]">

                <div className="sectionOne text-black w-[26%] border-r-[3px] border-r-[black] border-r-[solid] py-[50px]">

                    <h1 className="text-[120%] mb-[5px]"> Username </h1>
                    <div className="editUsername flex items-start w-[68%]">
                    <textarea readOnly = {true}
                        className= {underlineUserName}
                              id = "usernameField"
                              onChange = {changeUserName}>
                        {userName}
                    </textarea>
                        <img src={userNameIcon ? saveCheckIcon : modifyIcon}
                             className="editPencil w-[20px] h-[auto] pt-[11px]"
                             id = "usernameButton"
                             onClick = {modifyUsername}
                        />
                    </div>

                    <h1 className="text-[120%] mb-[5px]"> First Name </h1>
                    <div className="editFirstName flex items-start w-[68%]">
                    <textarea readOnly = {true}
                        className={underlineFirstName}
                        id = "firstNameField"
                        onChange = {changeFirstName}>
                        {firstName}
                    </textarea>
                        <img src={firstNameIcon ? saveCheckIcon : modifyIcon}
                             className="editPencil w-[20px] h-[auto] pt-[11px]"
                             id = "firstNameButton"
                             onClick = {modifyFirstName}
                        />
                    </div>

                    <h1 className="text-[120%] mb-[5px]"> Last Name </h1>
                    <div className="editLastName flex items-start w-[68%]">
                    <textarea readOnly = {true}
                        className={underlineLastName}
                        id = "lastNameField"
                        onChange = {changeLastName}>
                        {lastName}
                    </textarea>
                        <img src={lastNameIcon ? saveCheckIcon : modifyIcon}
                             className="editPencil w-[20px] h-[auto] pt-[11px]"
                             id = "lastNameButton"
                             onClick = {modifyLastName}
                        />
                    </div>
                </div>

                <div className="sectionTwo text-[black] w-[34%] border-r-[3px] border-r-[black] border-r-[solid] py-[50px]">
                    <h1 className="text-[120%] mb-[5px]"> Email </h1>
                    <div className="editEmailAddress flex items-start w-[75%]">
                    <textarea readOnly = {true}
                        className={underlineEmailAddress}
                              id = "emailAddressField"
                        onChange = {changeEmailAddress}>
                        {emailAddress}
                    </textarea>
                        <img src={emailIcon ? saveCheckIcon : modifyIcon}
                             className="editPencil w-[20px] h-[auto] pt-[11px]"
                             id = "emailAddressButton"
                             onClick = {modifyEmailAddress}
                        />
                    </div>

                    <h1 className="text-[120%] mb-[5px]"> Birthday </h1>
                    <div className="editBirthday flex items-start w-[75%]">
                        <input type="date"
                               className={underlineBirthday}
                               id = "birthdayField"
                               onChange={changeBirthday}
                               value={updatedBirthday}
                        />
                        <img src={birthdayIcon ? saveCheckIcon : modifyIcon}
                             className="editPencil w-[20px] h-[auto] pt-[11px]"
                             id = "birthdayButton"
                             onClick = {modifyBirthday}
                        />
                    </div>

                    <h1 className="text-[120%] mb-[5px]"> Gender </h1>
                    <div className="editGender flex items-start w-[75%]">
                        <h3
                            className="changeGender text-start text-[110%] mr-[4px] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px] w-[300px]"
                                id = "genderField">
                            {updatedGender}
                        </h3>
                        <img src={genderIcon ? saveCheckIcon : modifyIcon}
                             className="editPencil w-[20px] h-[auto] pt-[11px]"
                             id = "genderButton"
                             onClick = {genderMenu}
                        />
                    </div>
                    <form className ={showGender}>
                    <input type="radio" id="femaleButton" value="Female" name="genderSelectionMenu" onClick={selectGender}/>
                        <label htmlFor="femaleButton" className = "ml-[15px] text-[black]"> {gender} </label>
                    <br/>
                    <input type="radio" id="maleButton" value="Male" name="genderSelectionMenu" onClick={selectGender} />
                        <label htmlFor="maleButton" className = "ml-[15px]"> Male </label>
                    <br/>
                    <input type="radio" id="nonBinaryeButton" value="Non-Binary" name="genderSelectionMenu" onClick={selectGender}/>
                        <label htmlFor="nonBinaryButton" className = "ml-[15px]"> Non-Binary </label>
                    <br/>
                    <input type="radio" id="otherButton" value="Other" name="genderSelectionMenu" onClick={selectGender}/>
                        <label htmlFor="otherButton" className = "ml-[15px]"> Other </label>
                    </form>
                </div>

                <div className="sectionThree w-[34%] justify-center py-[50px] pl-[1%]">
                    <div className="flex w-[90%] justify-center">
                        <img src="/src/assets/emailIcon.png"
                             className = "w-[80px] h-[auto]"/>
                    </div>
                    <h3 className = "text-[115%] w-[90%] text-center font-light leading-[50px] mb-[65px]"> Have a question, comment, or suggestion? Please feel free to
                        <span className = "font-medium">
                            <a href = "mailto:madison.owens32@gmail.com?subject=Card'heure Client Contact"> contact us</a>
                        </span> :)
                    </h3>

                    <button className="logOut font-medium text-[106%] w-[90%] mb-[25px]" onClick = {logOut}>
                        Log Out
                    </button>

                    <button className="deleteAccount font-medium text-[106%] text-red-600 w-[90%]" onClick = {deleteAccount}>
                        Delete Account
                    </button>

                </div>
            </div>
        </>
    )
}
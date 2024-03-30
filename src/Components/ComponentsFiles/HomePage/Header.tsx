import {useState, useEffect } from 'react';
export default function Header() {
    const [greeting, setGreeting] = useState("Good Morning, User");
    const [greetingIcon, setGreetingIcon] = useState("src/assets/sun.png")
    const [greetingText, setGreetingText] = useState("greetingText text-center ml-[10px]")

    useEffect(() => {
        const date = new Date();
        const hour = date.getHours();
        console.log(hour);
        if (5 <= hour && hour < 12) {
            setGreeting("Good Morning, User");
            setGreetingIcon("src/assets/sun.png");
            setGreetingText("greetingText text-center ml-[10px]")
        }
        else if (12 <= hour && hour < 18) {
            setGreeting("Good Afternoon, User");
            setGreetingIcon("src/assets/sunset.png");
            setGreetingText("greetingText text-center ml-[20px]")
        }
        else {
            setGreeting("Good Evening, User");
            setGreetingIcon("src/assets/moon.png");
            setGreetingText("greetingText text-center ml-[10px]")
        }
    },
        []);

    return (

        <>
            <div className="header-bg h-[130px] flex items-center">
                <div className = "headerSect logo text-center justify-center w-[15%]">
                    <h1 className = "text-6xl font-bold">C'h</h1>
                </div>

                <div className = "headerSect greeting flex justify-center items-center mx-[10%] w-[50%]">
                    <img src = {greetingIcon} className = "greetingIcon w-[50px]"/>
                    <h1 className = {greetingText}>{greeting}</h1>
                </div>

                <div className = "headerSect flex justify-center profile w-[15%]">
                    <div className = "profileBox rounded-[12px] p-[1px]">
                        <img src = "src/assets/profileIcon.png" className = "w-[50px] h-[auto]"/>
                    </div>
                </div>
            </div>
        </>
    )
}
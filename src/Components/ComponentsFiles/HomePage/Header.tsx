import {useState, useEffect} from 'react';

export default function Header(props: { username: string | undefined }) {
  const [greeting, setGreeting] = useState("Good Morning, User");
  const [greetingIcon, setGreetingIcon] = useState("src/assets/sun.png")
  const [greetingText, setGreetingText] = useState("greetingText text-center ml-[10px]")

  useEffect(() => {
      const date = new Date();
      const hour = date.getHours();
      if (5 <= hour && hour < 12) {
        setGreeting("Bonjour, ");
        setGreetingIcon("src/assets/sun.png");
        setGreetingText("greetingText text-center ml-[10px]")
      } else if (12 <= hour && hour < 18) {
        setGreeting("Bonjour, ");
        setGreetingIcon("src/assets/sunset.png");
        setGreetingText("greetingText text-center ml-[20px]")
      } else {
        setGreeting("Bonsoir, ");
        setGreetingIcon("src/assets/moon.png");
        setGreetingText("greetingText text-center ml-[10px]")
      }
    },
    []);

  return (

    <>
      <div className="header h-[130px] flex items-center">
        <div className="headerSect logo text-center justify-center w-[15%]">
          <h1 className="text-6xl font-bold">C'h</h1>
        </div>

        <div className="headerSect greeting flex justify-center items-center mx-[10%] w-[50%]">
          <img src={greetingIcon} className="greetingIcon w-[50px]"/>
          <h1 className={greetingText}>{greeting}{props.username}</h1>
        </div>

        <div className="headerSect flex justify-center profile w-[15%]">
          <button className="profileBox rounded-[12px] p-[1px]">
            <a href="/profile">
              <img src="src/assets/profileIcon.png" className="w-[50px] h-[auto]"/>
            </a>
          </button>
        </div>
      </div>
    </>
  )
}
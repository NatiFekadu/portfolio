import Link from "next/link";
import Image from "next/image";
import logo from "../public/lightLogo.png";
// import dlogo from "../public/darkLogo.png";
// import { useTheme } from "next-themes";
// import { useEffect } from "react";

const Logo = () => {
  // const { theme, setTheme } = useTheme();

  // const initialTheme = localStorage.getItem("theme") || "light"; // Get stored theme or default to light
  // useEffect(() => {
  //   setTheme(initialTheme); // Set initial theme based on local storage
  // }, []);

  return (
    <Link href="/">
      <Image
        // src={theme === "dark" ? dlogo : logo}
        src={logo}
        alt="Logo"
        width={54}
        height={54}
        priority={true}
      />
    </Link>
  );
};

export default Logo;

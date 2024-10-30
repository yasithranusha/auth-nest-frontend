import Link from "next/link";
import Profile from "./Profile";
import { ModeToggle } from "@/components/ui/theme-toggle";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <header className="flex gap-4 p-4 backdrop-blur-md sticky top-0 items-center">
      <Link href={"/"}>Home</Link>
      <Link href={"/dashboard"}>DashBoard</Link>
      <Profile />
      <ModeToggle />
    </header>
  );
};

export default NavBar;

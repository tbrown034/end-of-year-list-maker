import Link from "next/link";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <div className="flex justify-between">
      <Link href="/">Home</Link>
      <NavBar />
    </div>
  );
};

export default Header;

import Link from "next/link"
import { IoMdHome } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";

const Navbar = () => {
    return (
<div className="flex sticky bottom-0 text-white bg-stone-500 py-5 justify-center gap-14 items-center">
<Link href="/" className="text-[35px]"><IoMdHome/></Link>
<Link href="/surah" className="text-[30px]"><FaBookOpen/></Link>
</div>
    )
}

export default Navbar
import Link from "next/link"

const Navbar = () => {
    return (
<div className="flex sticky bottom-0 text-white bg-stone-500 py-5 justify-center gap-10">
<Link href="/">HOME</Link>
<Link href="/surah">SURAH</Link>
</div>
    )
}

export default Navbar
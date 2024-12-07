
const NavBar = () => {
  return (
    <div className="flex justify-between px-36 py-5 shadow-xl">
        <div className=" flex gap-10">
    <h2 className="text-xl font-semibold">Link<span className="text-[#2acfcf] ">Cut</span> </h2>
    <ul className="flex gap-5">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
    </ul>
    </div>

    <div className="flex gap-4">
        <button className=" ">Login</button>
        <button className="bg-[#2acfcf] px-4 py-1 rounded-2xl hover:text-white">Sign Up</button>
    </div>

    </div>
  )
}

export default NavBar
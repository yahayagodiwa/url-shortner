

const Footer = () => {
  return (
    <footer>
       <div className="bg-cyan-900 text-white text-center py-8">
        <h2 className="text-lg font-semibold">Boost your links today</h2>
        <button className="bg-[#2acfcf] px-5 py-2 my-3 rounded-2xl hover:bg-[#69e9e9]"> Get Started</button>
        </div> 

        <div className="flex flex-col md:flex-row text-center gap-3 justify-between bg-[#232127] text-gray-200 py-3 px-5 md:px-32">
        <h2 className="text-xl font-semibold">Link<span className="text-[#2acfcf] ">Cut</span> </h2>
            <ul>
                <h3 className="text-lg font-semibold">Features
                </h3>
                <li>Link Shortening </li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>
            <ul>
                <h3 className="text-lg font-semibold">
                Resources
                </h3>
                <li> Blog</li>
                <li>Developers</li>
                <li> Support</li>
            </ul>
            <ul>
                <h3 className="text-lg font-semibold">Company</h3>
                <li>About</li>
                <li>Our Team</li>
                <li> Careers</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className="bg-[#232127] text-center text-white">
    Developed by <a href="https://github.com/yahayagodiwa" target="_blank">Yahya Godiwa</a>. 
    
  </div>
    </footer>
  )
}

export default Footer
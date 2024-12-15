

const Button = () => {
  return (
    <div className="relative group">
      <div className="relative w-64 h-14 opacity-90 overflow-hidden rounded-xl bg-[#ffffff] z-10">
        <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] 
        ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-[#d3d0da] to-white/10 opacity-30 -skew-x-12" />
        <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
          <button name="text" className="input font-semibold text-lg h-full 
          opacity-90 w-full px-16 py-3 rounded-xl bg-[#2acfcf]">
            Get Started
          </button>
        </div>
        <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r 
        from-[#7744f0] to-[#3b3054] blur-[20px]" />
      </div>
    </div>
  );
}

export default Button;

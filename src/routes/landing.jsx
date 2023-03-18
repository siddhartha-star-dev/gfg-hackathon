import Navbar from "../components/navbar/navbar";

const Landing = ()=>{
    return(
        <>
        {/* <Navbar/> */}
        <div className="flex flex-col items-center mx-12">
        <div className="text-3xl font-semibold mt-28  text-center leading-snug text-gray-700">Your <span className="text-[#cc29ff] text-4xl">Health Vault</span> is Ready.</div>
        <div className="text-3xl mt-9 text-center leading-snug ">A Next Gen Digital Health Record Platform</div>
        <button className="text-2xl font-semibold rounded-[2rem] border-2 px-8 py-3 mt-12 border-black ">Sign In</button>
        </div>
        </>
    )
}

export default Landing;
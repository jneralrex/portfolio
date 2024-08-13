import { FaGlobeAfrica, FaPhoneAlt, FaArrowLeft } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { useNavigate } from "react-router-dom";


const Contact = () => {
  const navigate = useNavigate()
  const handleBackNavigate = () => {
    navigate(-1);
  }
  return (
    <div className="absolute min-h-[100vh] left-0 right-0 bg-[#191d2b] bg-gradient-to-b from-[#191d2b] to-[#020924]">
      <div className=" w-full flex flex-col items-center md:grid md:grid-cols-3 lg:grid-cols-3">
        <div className=" flex gap-3 justify-center items-center w-[310px] text-4xl font-bold md:ml-5 md:text-5xl md:justify-self-start"><span className="text-gray-100">CONTACT</span> <span className="text-green-400">ME</span></div>
        <div className="ml-2 mt-16 w-[300px] text-gray-50 absolute text-center font-thin md:mt-0 md:justify-self-end md:mr-5">Would you like to talk? Please contact me through any of these avenues</div>
      </div>
      <div className="text-green-400 text-2xl ml-6 md:mt-7 md:mb-7" onClick={handleBackNavigate}><FaArrowLeft /></div>
      <div className=" mt-16 ml-2 flex flex-col mr-2 md:mr-5 md:ml-5 md:grid md:grid-cols-4 md:min-h-[79.5vh] md:mt-0">
      <div className="border-2 border-green-600 rounded shadow-gray-800 shadow-md m-2 h-[400px] md:h-[480px] md:rounded-none flex flex-col items-center md:col-span-2">
          <div className="flex flex-col justify-center items-center w-full h-full">
          <div className=" flex flex-row justify-center mb-1">
          <div className="text-blue-800 font-serif text-3xl mt-[-8px] md:text-4xl md:mt-[15px] md:mb-[10px] lg:text-5xl xl:text-6xl">Message:</div>
          </div>
            <div className="w-[95%] ">
              <form action="">
                <div className="flex flex-col gap-2">
                  <div className=" flex flex-row justify-center md ">
                    <input type="text" name="" placeholder="YOUR NAME" className="bg-[#212529] w-full rounded md:p-1 placeholder:text-left outline-none text-gray-200" />
                  </div>
                  <div className=" flex flex-row justify-center md ">
                    <input type="email" name="" placeholder="YOUR EMAIL" className="bg-[#212529] w-full rounded md:p-1 placeholder:text-left outline-none text-gray-200 " />
                  </div>
                 
                  <div className="">
                    <textarea name="" id="" cols="50" rows="10" placeholder="Message here..." className="bg-[#212529] rounded-md w-full outline-none text-gray-200 p-1 "></textarea>
                  </div>
                  <div className="w-full flex items-center justify-end mt-[-8px] md:mt-[1px] lg:mt-[-1px]"><input type="submit" value="Send Message" className="border-blue-600 border-2 p-1 rounded text-green-500"/></div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="border-2 border-green-600 p-4 rounded-full shadow-gray-800 shadow-md m-2 h-[200px] md:h-[480px] md:rounded-none flex flex-col items-center justify-between">
          <div className="flex flex-row items-center p-2 text-3xl lg:text-5xl xl:text-6xl"><span className="text-blue-700 font-serif">Location:</span></div>
          <div className="text-green-400 text-5xl md:text-9xl"><FaGlobeAfrica /></div>
          <div className="text-gray-300 font-bold lg:text-xl">Abuja, Nigeria</div>
        </div>
        <div className="border-2 border-green-600 p-4 rounded-full shadow-gray-800 shadow-md m-2 h-[200px] md:h-[480px] md:rounded-none flex flex-col items-center justify-between"><div className="flex flex-row items-center justify-center p-2 text-3xl lg:text-5xl xl:text-6xl"><span className="text-blue-700 font-serif">Tel:</span></div>
          <div className=" flex md:w-[150px] justify-between flex-row items-center lg:justify-around lg:w-[200px]">
            <div className="text-green-400 lg:text-2xl"><FaPhoneAlt /></div>
            <div className="text-gray-300 font-bold lg:text-xl">+2349056574771</div>
          </div>
          <div className="text-5xl font-bold font-serif">OR</div>
          <div className=" flex md:w-[150px] justify-between flex-row items-center lg:justify-around lg:w-[200px]">
            <div className="text-green-400 lg:text-2xl"><FaPhoneAlt /></div>
            <div className="text-gray-300 font-bold lg:text-xl">+2349056574771</div>
          </div>
        </div>
        <div className="border-2 border-green-600 p-4 rounded-full shadow-gray-800 shadow-md m-2 h-[200px] md:h-[480px] md:rounded-none flex flex-col items-center justify-between md:col-span-2"><div className="flex flex-row items-center justify-center p-2 text-3xl lg:text-5xl xl:text-6xl"><span className="text-blue-700 font-serif">Email:</span></div>
          <div className="text-green-400 text-5xl md:text-9xl"><GrMail /></div>
          <div className="justify-center flex md:w-[180px] flex-row items-center lg:justify-center lg:w-[200px]">
            <div className="text-gray-300 justify-center font-medium md:justify-center md:text-[13px] lg:text-[16px]">idahabubakar49@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
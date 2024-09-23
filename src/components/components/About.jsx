import me from "../assets/me.jpg"

const About = () => {

  return (
    <>
        <div className='lg:mx-40 bg-white  py-20' id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

                <div className="flex flex-col md:flex-row items-center space-x-12">
                    <img src={me} alt="" className="w-72 h-80 rounded object-cover mb-8 md:mb-0 "/>
                    <div className="flex-1">
                        <p className="text-lg mb-8">
                        Hi, I am a highly skilled Full Stack Web and Mobile Developer with 5 years of experience in designing and building dynamic, scalable applications..
                        </p>
                    </div> 
                </div>

                <h3 className="text-2xl font-bold text-center mt-12 mb-8">Education</h3>
                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-12 ">
                    <div className="flex-1">
                        <h4 className="text-2xl mb-2">UNIVERSITY OF ROEHAMPTON, LONDON, UK.</h4>
                        <p className=" font-sans mb-8">M.Sc. Web Development, 
                        September 2024</p>
                    </div>

                    <div className="flex-1">
                        <h4 className="text-2xl mb-2">OBAFEMI AWOLOWO UNIVERSITY, OSUN, NIGERIA.</h4>
                        <p className=" font-sans">B.Sc. Electronic and Electrical Engineering, 
                        September 2019</p>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default About

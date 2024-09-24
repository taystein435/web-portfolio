import { FaGithub } from "react-icons/fa";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import me from "../assets/me.jpg";
import "../App.css";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div
      className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white"
      id="home"
    >
      <div className="lf:w-1/2 ssm:w-fit">
        <img
          src={me}
          alt=""
          className="rounded-full w-60 h-60 object-cover mx-auto border-8 border-white"
        />

        <p className="text-2xl mx-16 m-5">
          <Typewriter
            options={{
              strings: [
                "Hi!",
                "I am a highly skilled Full Stack Web and Mobile Developer.",
                "with 5 years of experience in designing and building dynamic, scalable applications.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <hr />
        <div className="flex mx-16 mt-6 space-x-6 cursor-pointer">
          <a href="https://github.com/faithobetta">
            <FaGithub
              size={40}
              className="border-4 hover:border-indigo-800 rounded-full"
            />
          </a>
          <FaEnvelope
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <BsLinkedin
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <BsTwitter
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

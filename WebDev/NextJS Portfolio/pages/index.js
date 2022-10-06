import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import vector from "../public/vector.png";
import bitcoin from "../public/bitcoin.png";
import amazon from "../public/amazon.png";
import notebook from "../public/notebook.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="cursor-pointer text-3xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-red-500 hover:to-orange-600 font-burtons dark:text-white dark:hover:text-transparent dark:hover:bg-clip-text dark:hover:bg-gradient-to-tr dark:hover:from-red-500 dark:hover:to-orange-600 ">
              mrb1nary
            </h1>
            <ul className="flex items-center">
              <li className="cursor-pointer text-xl">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  color={darkMode ? "white" : ""}
                />
              </li>
              <li>
                <a
                  className="transition-all bg-gradient-to-tr from-cyan-500 to-cyan-700 text-white px-4 py-2 rounded-md ml-8 hover:bg-gradient-to-tr hover:from-cyan-700 hover:to-cyan-500"
                  href="/resume.pdf"
                  target="blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-black font-medium md:text-6xl dark:text-white">
              Anubhab Nayak
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer and Designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-6xl mx-auto dark:text-white">
              Student at Utkal University, currently pursuing Masters in
              Computer Applications. Open to offers for internships and
              full-time roles. I am a self-taught developer and designer. I have
              a passion for learning new things and I am always looking for
              opportunities to improve my skills.
            </p>
          </div>
          <div className="flex justify-center text-5xl gap-16 py-3">
            <a
              href="https://twitter.com/JAnubhab"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterCircle className="cursor-pointer text-twitter" />
            </a>
            <a
              href="https://github.com/mrb1nary"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub
                className="cursor-pointer"
                color={darkMode ? "white" : ""}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/anubhab-nayak-b84b35112/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="cursor-pointer text-linkedin" />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full h-80 w-80 mt-20 p-20 overflow-clip md:w-96 md:h-96">
            <Image
              src={vector}
              alt="avatar"
              objectFit="contain"
              width={1200}
              height={1200}
              layout="fill"
              className="flex justify-center items-center"
            />
          </div>
        </section>
        <section>
          {/* <div>
            <h3 className="text-2xl py-2 dark:text-white">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Student at Utkal University, currently pursuing Masters in
              Computer Applications. Open to offers for internships and
              full-time roles. I am a self-taught developer and designer. I have
              a passion for learning new things and I am always looking for
              opportunities to improve my skills.
            </p>
          </div> */}
          <div className="lg:flex gap-10 justify-center space-between">
            <div className="text-center text-black shadow-lg p-10 rounded-xl my-10 bg-gradient-to-tr from-cyan-400 to-teal-100 dark:bg-gradient-to-tr dark:from-gray-700 dark:to-gray-300">
              <Image src={amazon} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                <a
                  href="https://clone-ad6ce.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Amazon Web Clone
                </a>
              </h3>
              <p className="py-4">
                Fully responsive Amazon Clone with working cart and user
                authentication made using Firebase and React
              </p>
              <h4 className="py-4 text-teal-800 dark:text-white">
                Technology used:
              </h4>
              <p className="text-gray-800 py-2 dark:text-white">React</p>
              <p className="text-gray-800 py-2 dark:text-white">MaterialUI</p>
              <p className="text-gray-800 py-2 dark:text-white">Firebase</p>
            </div>
            <div className="text-center text-black shadow-lg p-10 rounded-xl my-10 bg-gradient-to-tr from-cyan-400 to-teal-100 dark:bg-gradient-to-tr dark:from-gray-700 dark:to-gray-300">
              <Image src={bitcoin} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                <a
                  href="https://cryptomrb1nary.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cryptocurrency Tracker
                </a>
              </h3>
              <p className="py-4">
                Track live prices of cryptocurrencies using CoinGecko API.
                Search over 100+ coins from the library
              </p>
              <h4 className="py-4 text-teal-800 dark:text-white">
                Technology used:
              </h4>
              <p className="text-gray-800 py-2 dark:text-white">React</p>
              <p className="text-gray-800 py-2 dark:text-white">Vanilla CSS</p>
              <p className="text-gray-800 py-2 dark:text-white">Axios</p>
            </div>
            <div className="text-center text-black shadow-lg p-10 rounded-xl my-10 bg-gradient-to-tr from-cyan-400 to-teal-100 dark:bg-gradient-to-tr dark:from-gray-700 dark:to-gray-300">
              <Image src={notebook} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                E-Kaksha
              </h3>
              <p className="py-4">
                Google Classroom but on steriods. A platform for teachers and
                students to interact and collaborate
              </p>
              <h4 className="py-4 text-teal-800 dark:text-white">
                Technology used:
              </h4>
              <p className="text-gray-800 py-2 dark:text-white">HTML</p>
              <p className="text-gray-800 py-2 dark:text-white">CSS</p>
              <p className="text-gray-800 py-2 dark:text-white">Javascript</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Screenshots are taken from the live website! Some of the projects
              are hosted on Firebase and some on Netlify.
            </p>
          </div>

          <div className="flex flex-col gap=10 py-10 lg:flex-row lg:flex-wrap lg:gap-10">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-large"
                width={"100%"}
                height={"60%"}
                layout="responsive"
                objectFit="fill"
              />
            </div>
          </div>
          <div className="flex flex-col gap=10 py-10 lg:flex-row lg:flex-wrap lg:gap-10">
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-large"
                width={"100%"}
                height={"60%"}
                layout="responsive"
              />
            </div>
          </div>
          <div className="flex flex-col gap=10 py-10 lg:flex-row lg:flex-wrap lg:gap-10">
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-large"
                width={"100%"}
                height={"60%"}
                layout="responsive"
                objectFit="fill"
              />
            </div>
          </div>
          <div className="flex flex-col gap=10 py-10 lg:flex-row lg:flex-wrap lg:gap-10">
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-large"
                width={"80%"}
                height={"30%"}
                layout="responsive"
              />
            </div>
          </div>
          {/* <div className="flex flex-col gap=10 py-10 lg:flex-row lg:flex-wrap lg:gap-10">
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-large"
                width={"100%"}
                height={"60%"}
                layout="responsive"
                objectFit="fill"
              />
            </div>
          </div>
          <div className="flex flex-col gap=10 py-10 lg:flex-row lg:flex-wrap lg:gap-10">
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-large"
                width={"100%"}
                height={"80%"}
                layout="responsive"
                objectFit="fill"
              />
            </div>
          </div> */}
        </section>
      </main>
    </div>
  );
}

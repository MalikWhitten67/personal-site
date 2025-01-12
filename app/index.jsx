import { useState, A } from "vaderjs";
import Nav from "../src/components/nav";
import Spotlight from "../src/components/spotlight";
import Footer from "../src/components/footer";
export default function App() {
  return (
     <html>
       <head>
        <title>Malik Whitten</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       </head>
       <body>
       <div>
       <div class="p-2 md:p-5 xl:p-5  bg-gradient-to-br  from-sky-500 to-rose-500 text-white h-[70vh] w-screen">
        <Nav />
        <div class="p-1 sm:p-0 md:p-12 xl:p-12">
          <div class="mt-12  text-4xl flex flex-col font-bold">
            <h1>Hello I am Malik Whitten</h1>
            <h1>
              I am a <span class=" underline">software Engineer.</span>
            </h1>
          </div>
          <div class="mt-5 ">
            <p class="text-md  sm:w-full md:w-[60%] x:w-[60%]">
              I am a Full stack developer, with a passion for building fast,
              secure software and tools. I love to learn new things, and always
              looking for new oppurtunities to grow my skills.
            </p>
          </div>

          <div class="bg-black p-2 rounded-md font-bold mt-5 text-sm w-fit ">
            Press <span class="font-mono">CTRL + K</span> to Open Spotlight
          </div>
        </div>

        <Spotlight />
        <Footer />
      </div>
      <div class="p-2 md:p-5   mt-12 xl:mt-0 md:mt-0 w-screen">
        <div class="xl:p-12 md:p-12 xl:flex justify-between">
          <div>
            <A
              href="https://postlyapp.com/"
              class="text-2xl xl:text-4xl md:text-4xl hpver:underline"
            >
              Postr
            </A>
            <div class="flex justify-between  xl:w-[500px] lg:w-[500px] gap-5">
              <h1 class="text-2xl xl:text-4xl md:text-4xl mt-2 xl:border lg:border md:border xl:border-l-0  lg:border-l-0 xl:border-t-0 lg:border-t-0 xl:border-b-0 lg:border-b-0  xl:border-r-1 lg:border-r-1 border-t-0 border-b-0  xl:w-[500px] lg:w-[500px]">
                Social Media App
              </h1>
              <p class="p-0 sm:p-0 xl:p-1 lg:p-5 lg:block xl:block hidden">
                01
              </p>
            </div>
            <hr class="xl:w-[500px] lg:w-[500px]" />
            <p class="xl:w-[50%] lg:w-[47%] text-sm mt-5">
              Postr is a social media app built to tackle the problem of
              transparency and data ownership. My vision for this project was to take over the social space with an app that gives the user full controll,
              no pay wall or anything!
            </p>
          </div>
          <div>
            <img src="/public/ssp.png" class="w-[400px] mt-12 h-fit" />
          </div>
        </div>
      </div>
      <div class="p-2 md:p-5 xl:p-5 mt-12 xl:mt-0 md:mt-0 w-screen">
        <div class="xl:p-12 md:p-12 flex xl:flex     justify-between">
          <div>
            
          <A href="https://postlyapp.com/" class="text-4xl hpver:underline">
              Ai Doctor
            </A>
            <div class="flex justify-between  xl:w-[500px] lg:w-[500px] gap-5">
              <h1 class="text-2xl xl:text-4xl md:text-4xl mt-2 xl:border lg:border md:border xl:border-l-0  lg:border-l-0 xl:border-t-0 lg:border-t-0 xl:border-b-0 lg:border-b-0  xl:border-r-1 lg:border-r-1 border-t-0 border-b-0  xl:w-[500px] lg:w-[500px]">
               Ai diagnosis app
              </h1>
              <p class="p-0 sm:p-0 xl:p-1 lg:p-5 lg:block xl:block hidden">
                02
              </p>
            </div>
            <hr class="xl:w-[500px] lg:w-[500px]" />
            <p class="xl:w-[30%] lg:w-[47%] text-sm mt-5">
              Apple doctor is a platform created as a project for mark cubans ai bootcamp, often times we go to google for an analysis and it sometimes is never correct
              so I developed a dataset to classify any symptons a user has and spit out an possible disease or illness and specify what to do, the app also allows you to send your diagnois to the doctor and realtime chat with  a doctor.
            </p>
          </div>
          <div>
            <img src="/public/apple_doctor.jpeg" class="w-[400px] mt-12 h-fit" />
          </div>
        </div>
      </div>
      
    </div>
       </body>
     </html>
  );
}

import React from 'react'

const GetInTouch = () => {
    const handleSubmit = async (event) => {
       event.preventDefault(); // Prevent default form submission
       Navigate('http://localhost:5173')
     };
   
     return (
       <div className="lg:px-20 md:px-16 px-6 flex mt-10 lg:flex-row lg:space-x-6 space-y-5 lg:space-y-0 flex-col py-7 ">
         <div className="flex  flex-1 lg:w-1/3 w-9/12 mx-auto  flex-col space-y-4">
           <div>
             {" "}
             <span className="text-transparent text-4xl font-black bg-clip-text bg-gradient-background">
               Get in touch{" "}
             </span>
           </div>
           <div className="text-sm text-gray-300">
             Have a project in mind? Looking to partner or work together? Reach
             through the form and I'll get back to you within 48 hours.
           </div>
           <div className=" flex lg:flex-col md:flex-row flex-col space-x-0 space-y-3  md:space-y-0 md:space-x-3 lg:space-x-0 lg:space-y-3">
             <div className=" flex space-x-3 items-center">
               <svg
                 width="29"
                 height="22"
                 viewBox="0 0 29 22"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   d="M24.2588 0.723295L22.4033 2.17289L14.503 8.04376L6.60268 2.11491L4.74719 0.665311C4.31007 0.303702 3.77647 0.0782824 3.21249 0.0169789C2.6485 -0.0443245 2.07893 0.0611826 1.57432 0.320429C1.06972 0.579675 0.652262 0.981267 0.373669 1.47545C0.0950763 1.96964 -0.0324088 2.5347 0.00700792 3.10064V19.9015C0.00700792 20.4243 0.214714 20.9258 0.584433 21.2955C0.954152 21.6652 1.4556 21.8729 1.97846 21.8729H6.60268V10.682L14.503 16.6109L22.4033 10.682V21.8729H27.0275C27.5504 21.8729 28.0518 21.6652 28.4215 21.2955C28.7913 20.9258 28.999 20.4243 28.999 19.9015V3.10064C29.0262 2.53959 28.8898 1.98271 28.6065 1.4977C28.3231 1.01269 27.905 0.620441 27.4029 0.368623C26.9008 0.116805 26.3364 0.0162676 25.7782 0.0792317C25.22 0.142196 24.6922 0.36595 24.2588 0.723295Z"
                   fill="url(#paint0_linear_2137_3)"
                 />
                 <defs>
                   <linearGradient
                     id="paint0_linear_2137_3"
                     x1="-1.46497e-07"
                     y1="10.9026"
                     x2="29.0024"
                     y2="10.9026"
                     gradientUnits="userSpaceOnUse"
                   >
                     <stop offset="0.140625" stop-color="#B16CEA" />
                     <stop offset="0.447917" stop-color="#FF5E69" />
                     <stop offset="0.71875" stop-color="#FF8A56" />
                     <stop offset="1" stop-color="#FFA84B" />
                   </linearGradient>
                 </defs>
               </svg>
   
               <div><a href="mailto:skartik1706@gmail.com?subject=To Hire you for a job">skartik1706@gmail.com</a></div>
             </div>{" "}
             <div className=" flex space-x-3 items-center">
               <svg
                 width="23"
                 height="23"
                 viewBox="0 0 23 23"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   d="M23 13.6079V22.1112H18.0702V14.1771C18.0702 12.1836 17.3569 10.8238 15.573 10.8238C14.2109 10.8238 13.3997 11.741 13.0436 12.6272C12.9134 12.9441 12.88 13.3855 12.88 13.8291V22.1112H7.94784C7.94784 22.1112 8.01468 8.67461 7.94784 7.28141H12.88V9.38331L12.8477 9.43171H12.88V9.38331C13.5345 8.375 14.7041 6.93339 17.3235 6.93339C20.5674 6.93339 23 9.05374 23 13.6079ZM2.78987 0.133301C1.10396 0.133301 0 1.23957 0 2.695C0 4.11817 1.0717 5.25786 2.72534 5.25786H2.7576C4.47808 5.25786 5.54632 4.11817 5.54632 2.695C5.51636 1.23957 4.47808 0.133301 2.78987 0.133301ZM0.2927 22.1112H5.22251V7.28141H0.2927V22.1112Z"
                   fill="url(#paint0_linear_2114_24)"
                 />
                 <defs>
                   <linearGradient
                     id="paint0_linear_2114_24"
                     x1="23"
                     y1="21.7804"
                     x2="2.70588"
                     y2="2.83918"
                     gradientUnits="userSpaceOnUse"
                   >
                     <stop offset="0.140625" stop-color="#B16CEA" />
                     <stop offset="0.447917" stop-color="#FF5E69" />
                     <stop offset="0.71875" stop-color="#FF8A56" />
                     <stop offset="1" stop-color="#FFA84B" />
                   </linearGradient>
                 </defs>
               </svg>
   
               <div><a href="https://www.linkedin.com/in/skartik-sk/">skartik-sk</a></div>
             </div>
             <div className=" flex space-x-3 items-center">
               <svg
                 width="23"
                 height="19"
                 viewBox="0 0 23 19"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   d="M23 2.24844C22.1564 2.625 21.2543 2.87031 20.3101 2.96875C21.2826 2.37813 22.0175 1.44531 22.3617 0.335938C21.4574 0.884375 20.4496 1.2625 19.3727 1.4375C18.513 0.515625 17.282 -0.0625 15.9231 -0.0625C13.3371 -0.0625 11.2465 2.02812 11.2465 4.61406C11.2465 4.98594 11.2898 5.34844 11.3719 5.69531C7.42383 5.53594 3.93359 3.67969 1.60469 0.845312C1.19414 1.56406 0.960938 2.37813 0.960938 3.24844C0.960938 4.89844 1.79883 6.35156 3.07383 7.20781C2.29102 7.18281 1.55469 6.97031 0.912109 6.61719V6.67656C0.912109 8.94844 2.53516 10.8328 4.69336 11.2703C4.29492 11.3797 3.87656 11.4375 3.44531 11.4375C3.13672 11.4375 2.83984 11.4078 2.55078 11.3516C3.15469 13.2 4.88906 14.5375 6.94883 14.575C5.33555 15.8156 3.29883 16.5484 1.09961 16.5484C0.716797 16.5484 0.340234 16.5281 -0.000976562 16.4828C2.08164 17.7844 4.55625 18.5625 7.21367 18.5625C15.9137 18.5625 20.7371 11.5156 20.7371 5.15156C20.7371 4.94687 20.7324 4.74219 20.7231 4.54062C21.6414 3.86875 22.3617 3.02656 23 2.24844Z"
                   fill="url(#paint0_linear_twitter)"
                 />
                 <defs>
                   <linearGradient
                     id="paint0_linear_twitter"
                     x1="23"
                     y1="18.5625"
                     x2="-0.000976562"
                     y2="-0.0625"
                     gradientUnits="userSpaceOnUse"
                   >
                     <stop offset="0.140625" stop-color="#B16CEA" />
                     <stop offset="0.447917" stop-color="#FF5E69" />
                     <stop offset="0.71875" stop-color="#FF8A56" />
                     <stop offset="1" stop-color="#FFA84B" />
                   </linearGradient>
                 </defs>
               </svg>

               <div><a href="https://x.com/skartik_sk">skartik_sk</a></div>
             </div>
           </div>
         </div>
   
         <form className="flex-1 lg:w-6/12 w-9/12 mx-auto"  action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScidu7hjQCjcLaszaQT-YMoXnGYa4jdD0b_czxNMFDzibNqgg/formResponse" >
         <div className="flex   flex-col  space-y-6">
           <div className="flex flex-col space-y-2 ">
             <p className="text-sm">Your Name</p>
             <input
             minLength={3}
             name="entry.1074946140"
               type="text"
               placeholder="Enter your name"
               className="w-full rounded-xl bg-[#1C1C22] p-4 "
             ></input>
           </div>
           <div className="flex flex-col space-y-2 ">
             <p className="text-sm">Your E-mail</p>
             <input
               minLength={3}
             name="entry.878227936"
               type="email"
               placeholder="Enter your Email"
               className="w-full rounded-xl bg-[#1C1C22] p-4 "
             ></input>
           </div>
           <div className="flex flex-col space-y-2 ">
             <p className="text-sm">Your Budget</p>
             <input
               minLength={3}
             name="entry.746722335"
               type="text"
               placeholder="1k-3k"
               className="w-full rounded-xl bg-[#1C1C22] p-4 "
             ></input>
           </div>
           <div className="flex flex-col space-y-2 my-2">
             <p className="text-sm">Tell me a bit more what you are looking for</p>
             <textarea
     minLength={3}
               name="entry.2074035549"
               id="info"
               className="w-full rounded-xl bg-[#1C1C22] p-4 "
             ></textarea>
             
           </div>
           
         <div className="py-3 "id="gform">
               <button type="submit"  className=" lg:w-5/12 md:w-6/12 w-8/12 bg-gradient-background font-bold rounded-full py-3 md:px-12 px-7">
                 Submit Now
               </button>
               </div>
         </div>
         </form>
   
       </div>
     );
   };

export default GetInTouch
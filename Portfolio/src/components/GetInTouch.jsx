import React from 'react'

const GetInTouch = () => {
    const handleSubmit = async (event) => {
       event.preventDefault(); // Prevent default form submission
       Navigate('http://localhost:5173')
     };
   
     return (
       <div className="lg:px-20 md:px-16 px-6 flex lg:flex-row lg:space-x-6 space-y-5 lg:space-y-0 flex-col py-7 ">
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
           <div className=" flex lg:flex-col md:flex-row  space-y-0 space-x-3 lg:space-x-0 lg:space-y-3">
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
               className="w-full rounded-sm bg-[#1C1C22] p-4 "
             ></input>
           </div>
           <div className="flex flex-col space-y-2 ">
             <p className="text-sm">Your E-mail</p>
             <input
               minLength={3}
             name="entry.878227936"
               type="email"
               placeholder="Enter your Email"
               className="w-full rounded-sm bg-[#1C1C22] p-4 "
             ></input>
           </div>
           <div className="flex flex-col space-y-2 ">
             <p className="text-sm">Your Budget</p>
             <input
               minLength={3}
             name="entry.746722335"
               type="text"
               placeholder="1k-3k"
               className="w-full rounded-sm bg-[#1C1C22] p-4 "
             ></input>
           </div>
           <div className="flex flex-col space-y-2 my-2">
             <p className="text-sm">Tell me a bit more what you are looking for</p>
             <textarea
     minLength={3}
               name="entry.2074035549"
               id="info"
               className="w-full rounded-sm bg-[#1C1C22] p-4 "
             ></textarea>
             
           </div>
           
         <div className="py-3 "id="gform">
               <button type="submit"  className=" lg:w-5/12 md:w-6/12 w-8/12 bg-gradient-background font-bold rounded-full py-3 px-12">
                 Submit Now
               </button>
               </div>
         </div>
         </form>
   
       </div>
     );
   };

export default GetInTouch
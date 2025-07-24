import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const Testimonials = () => {
  //https://github.com/SingupalliKartik/Portfolio/blob/main/Portfolio/public/imagebg.png
  const cards = [
    {
      url: "https://framerusercontent.com/images/GeXfOj1dLp4kXkVHJuX3phCo.jpg",
      title: "Vinay Jain",
      content:"He is an diligent in the field of UI/UX, web  and app . With his unwavering dedication, He is sure to excel and make a significant contribution.",
      star:4,
      position: "Web Developer",
      id: 1,
    },
    {
      url: "https://media.licdn.com/dms/image/v2/D5603AQFu-v_RNuL4XA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732512154903?e=1756339200&v=beta&t=lH_iYTZoEKky4Y5gwEEu37mE8JOqAPzQy6UPvS6btiE",
      title: "Shivam Singh",
      content:"Apart from great design & development skills, he is also skilled with fast adaption of working environment and building strong relations.",
position: "Founder @Devoic",
      star:5,
      id: 2,
    },
    {
      url: "https://media.licdn.com/dms/image/v2/D4D03AQF2q4qLba2AHg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726159882820?e=1756339200&v=beta&t=eys02XiOtIF8uH0xenY1pj6DSnSk6AK9dVn00PTM2AU",
      title: "Isha Sahu",
      content:"His creative thinking and technical expertise enable him to deliver exceptional results on every project ",
      position: "Web Developer",
      star:5,
      id: 3,
    },
    {
      url: "https://media.licdn.com/dms/image/v2/D4D03AQFcEfTthI7e-A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1683992322611?e=1756339200&v=beta&t=_k5X8R0jn4Pi2V98xfzoQ0aftamrwQSLlHg_huJdLzM",
      title: "Astha Swami",
      content: "He really creates amazing ui design with great ux implementation! The thing I admire the most is the simplicity in his designs .",
      position: "web Developer and Designer",
      star:3,
      id: 4,
    },
    {
      url: "https://media.licdn.com/dms/image/v2/D4D03AQHE1vMFvkZqkA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710610713157?e=1756339200&v=beta&t=YkdTHq-RWQrVHgoJKV4cfwzd9lT-1kBBKl40YzKlg3k",
      title: "Taniya",
      content: "He's skilled in Web and App Development, and has good eye for design. His wide-ranging expertise and fantastic teamwork, makes every project a success . I'd wholeheartedly recommend him for any task – he's sure to bring both skill and positive energy to the table!",
      position: "UI/UX Designer",
      star:5,
      id: 5,
    },
    {
      url: "https://media.licdn.com/dms/image/v2/D4D03AQHJBNXlOyiotg/profile-displayphoto-shrink_400_400/B4DZVdXkIwHYAk-/0/1741028215830?e=1756339200&v=beta&t=Ba2SI4g2qRrTFJBF03ryeJVlNThBGkBKvUm2uVD7ESA",

      title: "Neha Verma",
      content:"He is an enthusiast and deterministic as a person. He is sincere and focused with his work he believes in eager participation in the project work and always came with unique ideas to implement.He stands out with his thought of solving problem this quality of his resulted in the success of the project.",
      position: "UI/UX Designer",
      star:4,
      id: 6,
    },
   
  ];
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((current) => (current + 1) % cards.length);
    }, 3000); // Move to the next card every 3 seconds

    return () => clearInterval(interval);
  }, [cards.length]);
  return (
    <>
      <div className="relative pt-5 overflow-x-hidden">
        {/* <div>
          <img
            className="-z-10 absolute w-full h-full"
            src="https://raw.githubusercontent.com/SingupalliKartik/Portfolio/main/Portfolio/public/imagebg.png"
            alt=""
          />
        </div> */}
        <div className=" lg:px-20 md:px-14 px-7 py-4 ">
          <div className="text-4xl font-black flex justify-center ">
            <div>
              {" "}
              <p>Testimonials That </p>
              Speaks
              <span className="text-transparent    bg-clip-text bg-gradient-background">
                {" "}
                My Result{" "}
              </span>
            </div>
          </div>

          <div className="flex   md:px-12 lg:w-10/12 mx-auto space-x-5  py-10  ">

            {cards.map((card, index) => {
              return (
                index === currentCard && (
                    <motion.div
                    key={card.id} // Assuming each card has a unique id
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100, }} // Adjusted to prevent height increase
                    transition={{ duration: 1.5 }}

                     // Increased duration for smoother transition
                    className="bg-white bg-opacity-20 rounded-2xl p-4 space-y-4 w-full"
                  >
                    <div className="flex justify-between">
                        <div className=" flex-col flex space-y-3">

                       
                      <div className="flex space-x-2">
                        <div>
                          <img
                            className=" rounded-full h-12 w-12"
                            src={card.url}
                            alt=""
                          />
                        </div>
                        <div>
                          <div>{card.title}</div>
                          <div>{card.position}</div>
                        </div>{" "}
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(card.star)].map((_, i) => {
                             return (
                                <>
                                  <svg
                                    width="28"
                                    height="26"
                                    viewBox="0 0 28 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M16.6998 1.6275L18.9468 5.9375C19.114 6.25477 19.3539 6.52793 19.647 6.7346C19.94 6.94127 20.2779 7.07557 20.6328 7.1265L25.3788 7.7765C27.9168 8.1265 28.9008 11.2555 27.0238 12.9955L23.7738 15.9945C23.4968 16.2491 23.2888 16.5697 23.1694 16.9265C23.05 17.2832 23.0229 17.6645 23.0908 18.0345L23.8838 22.4325C24.3248 24.8825 21.7758 26.7925 19.5388 25.6725L15.0028 23.4225C14.6906 23.2697 14.3475 23.1903 13.9998 23.1903C13.6522 23.1903 13.3091 23.2697 12.9968 23.4225L8.46084 25.6725C6.22284 26.7825 3.67484 24.8825 4.11584 22.4325L4.90884 18.0335C5.04884 17.2835 4.78884 16.5135 4.22684 15.9935L0.97584 12.9955C-0.90116 11.2655 0.0828397 8.1255 2.62084 7.7755L7.36684 7.1255C7.72285 7.07775 8.06206 6.94471 8.35561 6.7377C8.64915 6.53068 8.88835 6.25582 9.05284 5.9365L11.3008 1.6275C12.4448 -0.5425 15.5648 -0.5425 16.6988 1.6275"
                                      fill="#FCD53F"
                                    />
                                  </svg>
                                </>
                              );}
                        )}
                      </div>
                      </div>
                      <div>
                        <svg
                          width="107"
                          height="94"
                          viewBox="0 0 107 94"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M74.3532 48.9734H99.3666C98.9399 73.8801 94.0332 77.9868 78.7266 87.0534C76.9666 88.1201 76.3799 90.3601 77.4466 92.1734C78.5132 93.9334 80.7532 94.5201 82.5666 93.4534C100.593 82.7868 106.887 76.2801 106.887 45.2401V16.4934C106.887 7.37343 99.4732 0.0134277 90.4066 0.0134277H74.4066C65.0199 0.0134277 57.9266 7.10676 57.9266 16.4934V32.4934C57.8732 41.8801 64.9666 48.9734 74.3532 48.9734Z"
                            fill="#667085"
                            fill-opacity="0.3"
                          />
                          <path
                            d="M16.6465 48.9734H41.6598C41.2332 73.8801 36.3265 77.9868 21.0198 87.0534C19.2598 88.1201 18.6732 90.3601 19.7398 92.1734C20.8065 93.9334 23.0465 94.5201 24.8598 93.4534C42.8865 82.7868 49.1798 76.2801 49.1798 45.2401V16.4934C49.1798 7.37343 41.7665 0.0134277 32.6998 0.0134277H16.6998C7.25984 0.0134277 0.166504 7.10676 0.166504 16.4934V32.4934C0.166504 41.8801 7.25984 48.9734 16.6465 48.9734Z"
                            fill="#667085"
                            fill-opacity="0.3"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className=" text-gray-200  ">
                      {card.content} </div>
                  </motion.div>
                )
              );
            })}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

import React, { useState,useLayoutEffect, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, Link } from 'react-router-dom';
import { Card } from './Card';
import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";
import { prototype } from 'postcss/lib/previous-map';

// Sample card data
const cardData= [
  {
    id: 'a',
    category: 'Android',
    title: 'Calfinity ',
    pointOfInterest: 260,
    content1:"Calcfinity marks my return to app development with Jetpack Compose. This all-in-one calculator app is the beginning of my journey into modern Android tech, showcasing a fresh approach to utility apps.",
    content2:"Our app includes a basic calculator for everyday arithmetic, a BMI calculator for health insights, and a food contents calculator for precise nutritional information. Each feature is designed to enhance your daily calculations with ease.",
    content3:"Calcfinity boasts a user-friendly design, ensuring smooth navigation with an intuitive interface. It dynamically adapts to Material You on Android 11+ and is built with Jetpack Compose to leverage the latest development technologies.",
    url: "https://lnkd.in/dZh6wucp",
    backgroundColor: '#000000'
  },
  {
    id: 'f',
    category: 'UI/UX',
    title: 'Lumina',
    content1:"The Planning Paradise is an exceptional event coordination UI design by Team Lumina—Abhijeet Raj, Singupalli Kartik, and Taniya S. A heartfelt thanks to Devoic for the opportunity to showcase our design talents and enhance the event planning experience.",
    content2:"Lumina simplifies event management with a user-friendly interface, allowing organizers to easily create and customize events. Enjoy seamless navigation, effortless booking, real-time notifications, and efficient feedback collection, ensuring a smooth event experience.",
    content3:"Our design makes event organization effortless. With features to set event details, promote events, and engage a wider audience, Lumina facilitates smooth interactions for both organizers and attendees. Explore and book events with ease, and receive timely updates.",
    url:"https://www.figma.com/proto/weNjcRe4acuExcZNBh6uj9/team-lumina?page-id=0%3A1&type=design&node-id=66-2&viewport=374%2C13%2C0.07&scaling=contain&starting-point-node-id=25%3A7",
    pointOfInterest: 120,
    backgroundColor: '#000000'
  },
  
  {
    id: 'c',
    category: 'UI/UX',
    title: 'Insurance Wala',
    content1:"Insurance Wala Excited -a comprehensive UI design for an insurance website and app, crafted using Figma! With the invaluable guidance from Devoic - Build A Strong Proof Of Work, I developed an intuitive interface to simplify insurance coverage selection.",
content2:"The design focuses on creating a seamless user experience, making it easy for customers to navigate and find the insurance they need. From home to auto insurance, every aspect was designed for clarity and ease of use.",
content3:"The UI features a cohesive color scheme and thoughtfully chosen fonts for a polished look. Designed for both the web and app versions, this project aims to enhance user interaction with a smooth, user-friendly interface.",
url:"https://www.figma.com/proto/7WpGzC8PN6fY5A0O36PEDB/Project-3-kartik-final?page-id=0%3A1&type=design&node-id=10-2&viewport=944%2C305%2C0.43&scaling=scale-down&starting-point-node-id=10%3A2&show-proto-sidebar=1",

    pointOfInterest: 80,
    backgroundColor: '#000000'
  },
  {
    id: 'g',
    category: 'Flutter',
    title: 'App Hustle',
    content1:"App Hustle is my music app developed using Flutter, designed with a beautiful UI and engaging animations. The app aims to enhance your music experience with comprehensive features and smooth functionality.",
    content2:"App Hustle allows users to view their song history, add songs to playlists, create custom playlists, and play their favorite tracks. The intuitive interface and dynamic animations make navigating the app a delight.",
    content3:"Built with Flutter, App Hustle ensures a responsive and visually appealing user experience. The app leverages Dart for its core functionality, providing a seamless and efficient music streaming service.",
    url:"https://github.com/SingupalliKartik/AppHustle",
    pointOfInterest: 200,
    backgroundColor: '#000000'
  },
  
];
const cardData2= [
  {
    id: 'd',
    category: 'Android',
    title: 'ZenTalk',
    content1:"ZenTalk is my latest app built with Kotlin for Android, integrating Firebase and Reality Messaging Service. This app offers a seamless platform for sending photos, creating user profiles, and ensuring secure sign-in with options for verification.",
    content2:"ZenTalk allows users to effortlessly send and receive photos, manage their profiles, and use Google accounts for quick and secure sign-in. Opt-in verification adds an extra layer of security, enhancing user confidence.",
    content3:"The app leverages Firebase for backend support and Reality Messaging Service for reliable messaging functionality. Kotlin ensures a robust and efficient Android application, combining modern design with secure authentication methods.",
    url:"https://github.com/SingupalliKartik/Zen-talk",
    pointOfInterest: 150,
    backgroundColor: '#000000'
  }, 
  {
    id: 'h',
    category: 'Web Development',
    title: 'Portfolio',
    content1:"My portfolio —a dynamic portfolio website developed using React, Framer Motion, and Tailwind CSS. This platform combines innovative animations and stylish UI to showcase my work and skills in a visually engaging way.",
    content2:"With a focus on aesthetics and functionality, the portfolio site features a clean, user-friendly interface. Cool animations and thoughtful design elements highlight my projects and achievements, making for a memorable browsing experience.",
    content3:"The website leverages Framer Motion for smooth, interactive animations that bring the UI to life. Tailwind CSS ensures a modern, responsive design with flexible styling options. Together, these technologies create an immersive user experience.",
    url:"https://www.linkedin.com/in/skartik-sk/",
    pointOfInterest: 60,
    backgroundColor: '#000000'
  },
  {
    id: 'e',
    category: 'Web Development',
    title: 'QuikPic',
    content1:"Meet QuikPic, a cutting-edge social networking platform crafted by Isha and myself, with expert guidance from Devoic and mentorship from Pranjal Gupta sir. Designed for effortless online connections, QuikPic aims to simplify and enhance your social interactions.",
    content2:"QuikPic offers a seamless user experience with easy authentication, profile management, and robust post functionality. Engage with your network through posts, likes, comments, and follows. Enjoy a smooth, interactive platform that brings people closer.",
    content3:"Our tech stack includes React.js and Next UI for a dynamic frontend, Node.js and Express.js for a robust backend, and MongoDB for efficient data management. We use Cloudinary for image hosting, JWT for authentication, and Nodemailer for email communications. Hosted on Render and Netlify.",
    url:"https://main--quikpikweb.netlify.app",
    pointOfInterest: 200,
    backgroundColor: '#000000'
  },
  {
    id: 'b',
    category: 'Flutter',
    title: 'Dhaaga',
    content1:"Dhaaga is my shopping app built using Flutter and Dart, designed with a sleek UI to support small businesses. The primary goal is to empower small cloth makers by providing them a platform to showcase and sell their products.",
    content2:"Dhaaga offers a user-friendly interface that makes browsing and purchasing products a breeze. The app ensures that small businesses can easily list their items, reaching a wider audience and boosting their sales.",
    content3:"The app is developed using Flutter for a responsive and smooth user experience, while Dart powers its functionality. This combination ensures a reliable and efficient shopping platform",

    
    url:"https://github.com/SingupalliKartik/dhaaga_app",
    pointOfInterest: 260,
    backgroundColor: '#000000'
  }
]
const calculateDynamicValue = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 600) { // Example breakpoint for small screens
    return 90;
  } else if (screenWidth >= 600 && screenWidth < 800) { // Medium screens
    return 85;
  } 
  else if (screenWidth >= 800 && screenWidth < 900) { // Medium screens
    return 79;
  }
  else if (screenWidth >= 900 && screenWidth < 1000) { // Medium screens
    return 70;
  }
  else if (screenWidth >= 1000 && screenWidth < 1100) { // Medium screens
    return 63;
  }
  else if (screenWidth >= 1100 && screenWidth < 1200) { // Medium screens
    return 58;
  }else { // Large screens
    return 48;
  }
};
const List = () => {
  const params = useParams();
  const navigate = useNavigate();
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const [dynamicValue, setDynamicValue] = useState(calculateDynamicValue());

  // Update dynamic value on window resize
  useLayoutEffect(() => {
    const handleResize = () => {
      setDynamicValue(calculateDynamicValue());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", `-${cardData.length * dynamicValue}%`]);
  const x1 = useTransform(scrollYProgress, [0,1], [`-${cardData.length * dynamicValue}%`, `0%`]);

  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      // console.log( window.scrollX, window.scrollY);
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('drag', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('drag', handleScroll);
    }; 
   
  }, []);
  const [xPosition, setXPosition] = useState(null);


  const handleCardClick = (e) => {
    if (xPosition === null) { // Capture the x position only once
      setXPosition(x.get());
    }
  };
  return (
    <section ref={targetRef} className="h-[400vh] relative items-center bg-neutral-900">
      <div className=" sticky md:top-[9%] top-5 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex align-middle gap-y-4  ">
          {cardData.map((card) => (
            <Card
              key={card.id}
              isSelected={params.id === card.id}
              {...card}
              scrollPosition={scrollPosition}
              c1={card.content1}
              c2={card.content2}
              c3={card.content3}
              url={card.url}
              onClick={handleCardClick} // Pass the click handler to each card
            />
          ))}
        </motion.div>
        <motion.div style={{ x:x1 }} className="flex gap-y-4  ">
          {cardData2.map((card) => (
            <Card
              key={card.id}
              isSelected={params.id === card.id}
              {...card}
              scrollPosition={scrollPosition}
              c1={card.content1}
              c2={card.content2}
              c3={card.content3}
              url={card.url}
              onClick={handleCardClick} // Pass the click handler to each card
            />
          ))}
        </motion.div>
        
        
      </div>
    </section>
  );
};

export const CardList = () => (
  <Router>
    <Routes>
      <Route path="/:id" element={<List />} />
      <Route path="/" element={<List />} />
    </Routes>
  </Router>
);
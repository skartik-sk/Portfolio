import React, { useState,useLayoutEffect, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, Link } from 'react-router-dom';
import { Card } from './Card';
import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";
import { prototype } from 'postcss/lib/previous-map';

// Sample card data
const cardData= [
  {
  id: 'i',
  category: 'Flutter', // Corrected category to Flutter
  title: 'Apna Hostel',
  content1: "Apna Hostel is my innovative mobile application designed to simplify and streamline hostel management for both students and administrators. My aim was to create a comprehensive, user-friendly platform that brings efficiency and convenience to the entire hostel ecosystem.",
  content2: "The app offers a robust set of features for students like fee payment tracking, digital notices, and complaint submission. For administrators, there's an associated admin dashboard/website for seamless management of student data, room allocations, payments, and communications, ensuring an all-in-one solution.",
  content3: "Built using Flutter and Dart for a cross-platform mobile experience, ensuring a smooth and responsive UI. The backend integrates with a robust database (e.g., Firebase/MongoDB) and potentially a web framework (e.g., Node.js/Express.js or Next.js) to power the associated admin dashboard/website, providing a complete management suite.",
  url: "https://drive.google.com/file/d/1OR-Dmb43ufqOIL7CIIhEWG99J0DkTLSO/view",
  pointOfInterest: 220,
  backgroundColor: '#000000'
},
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
    pointOfInterest: 0,
    backgroundColor: '#000000'
  },
  {
  id: 'k',
  category: 'Android', // Category set to Android
  title: 'QuikPic',
  content1: "Welcome to QuikPic, a dynamic and intuitive social media application built natively for Android. Designed to provide a seamless and engaging user experience, QuikPic allows users to connect with friends, share moments through photos, and interact effortlessly through likes, comments, and shares.",
  content2: "QuikPic offers secure user authentication (login, signup, logout), robust post functionality (share photos, comment, like, save, explore public content), and rich social interactions (follow/unfollow, view follower/following lists). It also provides real-time updates with dynamic feeds and instant notifications for new interactions.",
  content3: "Developed primarily with Kotlin as the programming language, utilizing Jetpack Compose for building the native Android UI declaratively. The app follows MVVM Architecture for clean code, uses Dagger Hilt for dependency injection, Retrofit for consuming RESTful APIs, and adheres to Material Design guidelines for a consistent look and feel.",
  url: "https://github.com/skartik-sk/quikpik-app", // Remember to replace this URL
  pointOfInterest: 200,
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
  {
  id: 'l',
  category: 'Web Development',
  title: 'GrowthSquare Brand Presence',
  content1: "Developed a dynamic web platform for GrowthSquare, primarily focused on establishing a strong brand presence online. This project was meticulously crafted to showcase their identity and offerings, creating a compelling digital storefront.",
  content2: "The website provides a comprehensive overview of GrowthSquare's work and initiatives, designed with future scalability in mind to integrate upcoming course-selling features seamlessly. It's built to be both informative and expandable for future business needs.",
  content3: "The frontend is powered by Next.js, ensuring a fast, SEO-friendly, and interactive user interface with a modern design and appealing color scheme. The backend is robustly built with Node.js, providing a scalable and efficient server-side architecture for seamless content delivery and future e-commerce functionalities.",
  url: "https://growthsq.in", // Remember to replace this URL
  pointOfInterest: 190,
  backgroundColor: '#000000'
}
];
const cardData2= [
  {
  id: 'm',
  category: 'Blockchain Development',
  title: 'CoreCensyx',
  content1: "CoreCensyx is a Web3-native AI Twitter bot designed to bring transparency and insight to on-chain activities. It automatically analyzes Ethereum wallet addresses found in tweets, providing users with instant, verifiable reputation scores and legitimacy summaries.",
  content2: "The agent leverages OpenAI to generate human-like summaries of wallet reputation, automatically detects tweets with Ethereum addresses, and responds with relevant insights. It checks and reflects verification status on-chain via Arbitrum, ensuring data integrity. This bot is a powerful tool for enhancing trust and understanding in the crypto space.",
  content3: "The backend smart contract is robustly deployed on Arbitrum One, built using Arbitrum Stylus (Rust) for efficient on-chain data storage and verification. It integrates Google Gemini for natural language explanations, providing clear and concise reputation summaries. A companion frontend allows users to register and verify themselves, completing the ecosystem.",
  url: "https://dorahacks.io/buidl/25878", // Remember to replace this URL
  pointOfInterest: 270, // High pointOfInterest for a complex, innovative project
  backgroundColor: '#000000'
},
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
  id: 'n',
  category: 'Blockchain Development',
  title: 'AnnonyShare',
  content1: "Welcome to AnnonyShare, a decentralized platform empowering collective action, transparency, and individual voices in the decentralized web. This project aims to enable individuals to safely raise concerns, engage in meaningful dialogue, and foster community-driven change without fear of censorship or reprisal.",
  content2: "AnnonyShare facilitates transparent and secure communication by leveraging Web3 technologies, allowing users to anonymously share information and participate in discussions. It's designed to build a foundation of trust within communities, driving collective action for positive impact in a decentralized environment.",
  content3: "Built with Next.js for a responsive and dynamic frontend, ensuring a smooth user experience. The platform extensively leverages cutting-edge Web3 technologies for its decentralized functionalities, utilizing smart contracts for secure interactions and data management on the blockchain. Notably, AnnonyShare is a proud **ETHIndia prize-winning project**, demonstrating its innovative approach and robust implementation.",
  url: "https://devfolio.co/projects/annonyshare-8842",
  pointOfInterest: 280, 
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
  },
  {
  id: 'j',
  category: 'Solana Development', // Category specifically for Solana
  title: 'DASHH - Decentralized Engagement Platform',
  content1: "DASHH is my innovative decentralized advertising platform, meticulously designed to connect brands with the masses through the power of micro-influencers. It's revolutionizing ad engagement by focusing on transparency, accountability, and direct interactions.",
  content2: "This platform leverages **Reclaim Protocol** for secure, private engagement verification and **Solana Blink Actions** to track campaigns and real-time interactions seamlessly. It ensures genuine user engagement and transparency through **zkTLS proofs**, currently supporting Instagram Story views with plans for expansion to other platforms. DASHH eliminates middlemen, offering a scalable, trust-based model for fair reward distribution.",
  content3: "Built primarily on the **Solana blockchain**, utilizing its high throughput and low fees for real-time updates and payments. It integrates the **Reclaim Protocol** for verifiable data, **Solana Blink Actions** for shareable, interactive transactions, and **zkTLS proofs** for privacy-preserving verification of off-chain data. The core logic is likely developed using **Rust** for on-chain programs and **TypeScript** for the front-end and off-chain interactions.",
  url: "https://blinks-mini.vercel.app",
  pointOfInterest: 250, // Adjusted pointOfInterest for a high-impact project
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
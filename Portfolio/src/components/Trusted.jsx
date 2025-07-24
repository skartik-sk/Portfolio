// Trusted.jsx
import React from 'react';
import MarqueeItem from './Marque'; // Assuming MarqueeItem is in the same directory

const Trusted = () => {
    const upperMarquee = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
"https://www.nicepng.com/png/full/34-348422_community-spotlight-rust-programming-language.png",
"https://www.svgrepo.com/show/374088/solidity.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
"https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
"https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
"https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        "https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg",
        "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDn0ojTITvcdAzMsfBMJaZC4STaDHzduleQ&s",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg"
      ];

    return (
        <div className="px-14 flex md:flex-row flex-col space-y-4 md:space-y-0  justify-between my-6 mb-12 overflow-x-hidden">
            <div className="text-xl font-bold  w-5/12">Worked With</div>
            <div className="flex space-x-3 ">
                <MarqueeItem images={upperMarquee} from={0} to={"-95%"} />
            </div>
        </div>
    );
};

export default Trusted;
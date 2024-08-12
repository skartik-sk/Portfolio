// Trusted.jsx
import React from 'react';
import MarqueeItem from './Marque'; // Assuming MarqueeItem is in the same directory

const Trusted = () => {
    const upperMarquee = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "https://static.vecteezy.com/system/resources/previews/016/833/872/original/github-logo-git-hub-icon-on-white-background-free-vector.jpg"
      ];

    return (
        <div className="px-14 flex md:flex-row flex-col space-y-4 md:space-y-0  justify-between my-6 mb-12 overflow-x-hidden">
            <div className="text-xl font-bold  w-5/12">Worked on</div>
            <div className="flex space-x-3 ">
                <MarqueeItem images={upperMarquee} from={0} to={"-95%"} />
            </div>
        </div>
    );
};

export default Trusted;
import React from "react";

const Footer = () => {
  return (
    <div className=" px-14 flex flex-col pb-5 space-y-5 w-full    ">
      <div className=" rounded-full bg-White-primary h-[2px] w-full"></div>
      <div>
        <div className="flex items-center  justify-between">
          <img
            className="w-12 h-12"
            src="https://raw.githubusercontent.com/SingupalliKartik/Portfolio/main/Portfolio/src/assets/logo.png"
            alt=""
          />
          <div className=" text-opacity-70 text-White-primary font-light flex space-x-4">
            <div>Home</div>
            <div>About</div>
            <div>Conact</div>
          </div>
        </div>
      </div>
      <div className=" flex justify-between">
        <div className=" text-opacity-55 text-gray-300 "><span>&copy;</span> Developed by Kartik</div>
        <div className=" space-x-4">
          <div className="p-[2px] bg-gradient-background rounded-full inline-block">
            <button className="p-3 rounded-full bg-Black-primary">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6511 8.58337V14H11.5108V8.94599C11.5108 7.67607 11.0564 6.80988 9.92009 6.80988C9.05243 6.80988 8.53565 7.39419 8.30883 7.95868C8.22588 8.16055 8.20459 8.44169 8.20459 8.72431V14H5.06281C5.06281 14 5.10539 5.44086 5.06281 4.55338H8.20459V5.8923L8.18404 5.92313H8.20459V5.8923C8.62154 5.25 9.36661 4.33169 11.0351 4.33169C13.1015 4.33169 14.6511 5.68236 14.6511 8.58337ZM1.77716 0C0.70323 0 0 0.704698 0 1.63182C0 2.53838 0.682676 3.26437 1.73605 3.26437H1.75661C2.85256 3.26437 3.53303 2.53838 3.53303 1.63182C3.51395 0.704698 2.85256 0 1.77716 0ZM0.186451 14H3.32676V4.55338H0.186451V14Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="p-[2px] bg-gradient-background rounded-full inline-block">
            <button className="p-3 rounded-full bg-Black-primary">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.11409 0.042C4.86055 0.00763635 5.09855 0 7 0C8.90145 0 9.13945 0.00827272 9.88527 0.042C10.6311 0.0757273 11.1402 0.194727 11.5856 0.367182C12.0521 0.543455 12.4753 0.819 12.8253 1.17536C13.1816 1.52473 13.4565 1.94727 13.6322 2.41436C13.8053 2.85982 13.9236 3.36891 13.958 4.11345C13.9924 4.86118 14 5.09918 14 7C14 8.90145 13.9917 9.13945 13.958 9.88591C13.9243 10.6305 13.8053 11.1395 13.6322 11.585C13.4565 12.0522 13.1812 12.4754 12.8253 12.8253C12.4753 13.1816 12.0521 13.4565 11.5856 13.6322C11.1402 13.8053 10.6311 13.9236 9.88654 13.958C9.13945 13.9924 8.90145 14 7 14C5.09855 14 4.86055 13.9917 4.11409 13.958C3.36955 13.9243 2.86045 13.8053 2.415 13.6322C1.94786 13.4565 1.52461 13.1812 1.17473 12.8253C0.818605 12.4757 0.543018 12.0527 0.367182 11.5856C0.194727 11.1402 0.0763636 10.6311 0.042 9.88654C0.00763635 9.13882 0 8.90082 0 7C0 5.09855 0.00827272 4.86055 0.042 4.11473C0.0757273 3.36891 0.194727 2.85982 0.367182 2.41436C0.543278 1.94732 0.819076 1.52429 1.17536 1.17473C1.52475 0.818683 1.94757 0.5431 2.41436 0.367182C2.85982 0.194727 3.36955 0.0763636 4.11409 0.042ZM9.828 1.302C9.08982 1.26827 8.86836 1.26127 6.99936 1.26127C5.13036 1.26127 4.90891 1.26827 4.17073 1.302C3.48791 1.33318 3.11755 1.44709 2.87064 1.54318C2.54418 1.67045 2.31064 1.82127 2.06564 2.06627C1.83339 2.29221 1.65466 2.56727 1.54255 2.87127C1.44645 3.11818 1.33255 3.48855 1.30136 4.17136C1.26764 4.90955 1.26064 5.131 1.26064 7C1.26064 8.869 1.26764 9.09045 1.30136 9.82864C1.33255 10.5115 1.44645 10.8818 1.54255 11.1287C1.65455 11.4323 1.83336 11.7078 2.06564 11.9337C2.29155 12.166 2.56709 12.3448 2.87064 12.4568C3.11755 12.5529 3.48791 12.6668 4.17073 12.698C4.90891 12.7317 5.12973 12.7387 6.99936 12.7387C8.869 12.7387 9.08982 12.7317 9.828 12.698C10.5108 12.6668 10.8812 12.5529 11.1281 12.4568C11.4545 12.3295 11.6881 12.1787 11.9331 11.9337C12.1654 11.7078 12.3442 11.4323 12.4562 11.1287C12.5523 10.8818 12.6662 10.5115 12.6974 9.82864C12.7311 9.09045 12.7381 8.869 12.7381 7C12.7381 5.131 12.7311 4.90955 12.6974 4.17136C12.6662 3.48855 12.5523 3.11818 12.4562 2.87127C12.3289 2.54482 12.1781 2.31127 11.9331 2.06627C11.7071 1.83405 11.4321 1.65532 11.1281 1.54318C10.8812 1.44709 10.5108 1.33318 9.828 1.302ZM6.10527 9.15791C6.6046 9.36577 7.1606 9.39382 7.67832 9.23728C8.19603 9.08074 8.64334 8.74931 8.94384 8.29961C9.24434 7.84991 9.3794 7.30983 9.32594 6.77161C9.27248 6.2334 9.03382 5.73044 8.65073 5.34864C8.40651 5.10458 8.11123 4.9177 7.78612 4.80146C7.46102 4.68522 7.11418 4.6425 6.77059 4.67639C6.42699 4.71028 6.09519 4.81993 5.79906 4.99745C5.50293 5.17496 5.24984 5.41593 5.05801 5.703C4.86618 5.99006 4.74039 6.31609 4.68969 6.65761C4.63899 6.99913 4.66464 7.34764 4.7648 7.67806C4.86495 8.00847 5.03712 8.31257 5.26891 8.56846C5.5007 8.82435 5.78634 9.02566 6.10527 9.15791ZM4.45582 4.45582C4.78992 4.12171 5.18657 3.85668 5.6231 3.67587C6.05963 3.49505 6.5275 3.40198 7 3.40198C7.4725 3.40198 7.94037 3.49505 8.3769 3.67587C8.81343 3.85668 9.21008 4.12171 9.54418 4.45582C9.87829 4.78992 10.1433 5.18657 10.3241 5.6231C10.505 6.05963 10.598 6.5275 10.598 7C10.598 7.4725 10.505 7.94037 10.3241 8.3769C10.1433 8.81343 9.87829 9.21008 9.54418 9.54418C8.86942 10.2189 7.95425 10.598 7 10.598C6.04575 10.598 5.13058 10.2189 4.45582 9.54418C3.78106 8.86942 3.40198 7.95425 3.40198 7C3.40198 6.04575 3.78106 5.13058 4.45582 4.45582ZM11.396 3.93782C11.4788 3.85972 11.5451 3.7658 11.5909 3.66162C11.6368 3.55744 11.6612 3.44513 11.6629 3.33132C11.6646 3.21751 11.6434 3.10453 11.6006 2.99906C11.5578 2.89359 11.4943 2.79778 11.4138 2.7173C11.3333 2.63682 11.2375 2.5733 11.132 2.53051C11.0266 2.48772 10.9136 2.46653 10.7998 2.46819C10.686 2.46985 10.5736 2.49433 10.4695 2.54017C10.3653 2.58602 10.2714 2.6523 10.1933 2.73509C10.0414 2.89611 9.95822 3.10999 9.96145 3.33132C9.96467 3.55265 10.054 3.76401 10.2106 3.92054C10.3671 4.07706 10.5784 4.16642 10.7998 4.16964C11.0211 4.17287 11.235 4.08971 11.396 3.93782Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="p-[2px]  bg-gradient-background rounded-full inline-block">
            <button className="p-3 rounded-full bg-Black-primary">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33145 5.928L13.543 0H12.3078L7.78384 5.147L4.16881 0H0L5.46578 7.784L0 14H1.2352L6.01338 8.564L9.83119 14H14L8.33145 5.928ZM6.64025 7.852L6.08646 7.077L1.67988 0.91H3.57694L7.13227 5.887L7.68605 6.662L12.3088 13.132H10.4117L6.64025 7.852Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

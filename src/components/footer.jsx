import React from "react";


const Footer = ()=>{

    return(
    <footer className="footer py-8 text-sm text-[#8892b0]">
        <div className="flex flex-col justify-center items-center">
            <p>Made by David Yu</p>
            <p>@ 2023. All rights reserved</p>
        </div>


        {/* <div className="social hidden md:flex fixed top-[50%] z-10">
            <inks layout="vertical" />
      </div> */}
    </footer>
    )
    }

export default Footer;
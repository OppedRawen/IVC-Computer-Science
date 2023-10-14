import React, { useState } from "react";
import ContributorModal from "./ContributorsModal";
import SocialLinks from "./SocialLinks";

const Footer = ()=>{

    const [open, setOpen] = useState(false)

    return(
    <footer className="footer py-8 text-sm text-[#8892b0]">
        <ContributorModal open={open} setOpen={setOpen} />
        <div className="flex flex-col justify-center items-center">
            <p onClick={()=>setOpen(true)} className="underline underline-offset-4 cursor-pointer">View all contributors</p>
            <p>&copy; {new Date().getFullYear()}. All rights reserved</p>
        </div>
        <div className="flex flex-row justify-center items-center mt-4">
            <p>Follow Us Here !: </p>
          <SocialLinks layout="horizontal"/>
            </div>

       
    </footer>
    )
    }

export default Footer;
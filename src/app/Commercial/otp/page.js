'use client';

import { FaPencilAlt } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import "../nav/page"
import Link from "next/link";
import Nav from "../nav/page";

export default function Otp(){
    return(
        <>
            <Nav/>
            <div className="otp">
                <div className="need">
                    <p><FaThumbsUp className="thumb"/> Your Phone number gives access to your account. </p>
                    <img src="/mob.png" alt="img"/><br/>
                    <h2>Need Help?</h2>
                    <h4>You Can Email Us <br/><span style={{color:"blue",cursor:'pointer'}}>Contact@dealacres.com</span></h4>
                </div>
                <div className="otpnum">
                    <p><b>Welcome back,</b><br/>Your number is registered with us. Please login to continue</p>
                    <p>+91-XXXXXXXXXX <FaPencilAlt style={{color:"skyblue"}}/></p>
                    <h1>Enter Your OTP</h1>
                    <input className="pin" />
                    <input className="pin" />
                    <input className="pin" />
                    <input className="pin" /><br/>
                    <p>Resend OTP</p>
                    <Link href="./select"><button className="needbut1">Verify & Login</button><br/></Link>
                    <Link href="./select"><button className="needbut2">Login via - E-mail</button></Link>
                </div>
            </div>
        </>
    )
}
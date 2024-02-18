"use client";
import { useState } from "react";
import Nav from "../nav/page"
import Link from "next/link";


export default function Select(){
    const [data,setdata]=useState("");
    const [agecolor,setagecolor]=useState("");
    const [owncolor,setowncolor]=useState("");
    const [builcolor,setbuilcolor]=useState("");
    function clicked(data){
        setdata(data);
        if(data=="owner"){
            if(owncolor=="blue"){
                setowncolor("rgba(140, 203, 225, 0.404)");
            }
            else{
                setowncolor("blue");
            }
            setagecolor("rgba(140, 203, 225, 0.404)");
            setbuilcolor("rgba(140, 203, 225, 0.404)");
        }
        if(data=="agent"){
            if(agecolor=="blue"){
                setagecolor("rgba(140, 203, 225, 0.404)");
            }
            else{
                setagecolor("blue");
            }
            setowncolor("rgba(140, 203, 225, 0.404)");
            setbuilcolor("rgba(140, 203, 225, 0.404)");
        }
        if(data=="builder"){
            if(builcolor=="blue"){
                setbuilcolor("rgba(140, 203, 225, 0.404)");
            }
            else{
                setbuilcolor("blue");
            }
            setowncolor("rgba(140, 203, 225, 0.404)");
            setagecolor("rgba(140, 203, 225, 0.404)");
        }
    }
    return(
        <>
            <Nav/>
            <div className="otp">
                <div className="otpnum" style={{paddingTop:"40px",paddingBottom:"60px"}}>
                    <h2><b>To Continue Please let us what you are?</b></h2><br/>
                    <button className="butt" onClick={()=>clicked("owner")} style={{borderColor:owncolor=="blue"?"blue":"rgba(140, 203, 225, 0.404)"}}>An Owner</button>
                    <button className="butt" onClick={()=>clicked("agent")} style={{borderColor:agecolor=="blue"?"blue":"rgba(140, 203, 225, 0.404)"}}>A Agent</button>
                    <button className="butt" onClick={()=>clicked("builder")} style={{borderColor:builcolor=="blue"?"blue":"rgba(140, 203, 225, 0.404)"}}>A Builder</button><br/>
                    <p>Please choose correctly, if you want to change in the future, it done through profile section</p>
                    <Link  href={data=="owner"?"/Commercial/Owner/detail":data=="agent"?"/Commercial/Agent/agent":"/Commercial/Builder/detail"}><button className="needbut1">Continue</button><br/></Link>
                </div>
                <div className="need" style={{backgroundColor:' rgba(30, 146, 188, 0.187)',width:'22vw'}}>
                    <p> This information creates a transparency and build trust with buyers/tenants </p>
                    <img src="/select.png" alt="img"/><br/>
                    <h4>Need Help?</h4>
                    <h4>You Can Email Us <br/><span style={{color:"blue",cursor:'pointer'}}>Contact@dealacres.com</span></h4>
                </div>
            </div>
        </>
    )
}
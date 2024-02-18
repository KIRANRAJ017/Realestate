'use client';
import Nav from "../nav/page"
import { PiNotePencilBold } from "react-icons/pi";
import { FaImage } from "react-icons/fa";
import { GiBank } from "react-icons/gi";
import { IoMdArrowDropright } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";


export default function Home(){

    const [data,setdata]=useState("");
    const [rescolor,setrescolor]=useState("");
    const [comcolor,setcomcolor]=useState("");

    function clicked(data){
        setdata(data);
        if(data=="Residential"){
            if(rescolor=="blue"){
                setrescolor("rgba(140, 203, 225, 0.404)");
            }
            else{
                setrescolor("blue");
            }
            setcomcolor("rgba(140, 203, 225, 0.404)");
        }
        if(data=="Commercial"){
            if(comcolor=="blue"){
                setcomcolor("rgba(140, 203, 225, 0.404)");
            }
            else{
                setcomcolor("blue");
            }
            setrescolor("rgba(140, 203, 225, 0.404)");
        }
    }

    return(
        <>
            <div>
                <Nav/>
                <div className="home">
                    <div className="form">
                        <h2 className="h1">Post Your Property for free</h2>
                        <h4 className="h4">Add Basic Details</h4>
                        <h4 className="h41"><b>Looking For..........</b></h4>
                        <button className="butt" style={{width:"80px"}}>sell </button> 
                        <button className="butt" style={{width:"80px"}}>rent </button><br/>
                        <h4><b>Property Type</b></h4>
                        <button className="butt" onClick={()=>clicked("Residential")} style={{borderColor:rescolor=="blue"?"blue":"rgba(140, 203, 225, 0.404)"}}>Residential</button> 
                        <button className="butt" onClick={()=>clicked("Commercial")} style={{borderColor:comcolor=="blue"?"blue":"rgba(140, 203, 225, 0.404)"}}>Commercial</button><br/><br/>
                        <button className="butt">Flat/Apartment </button> 
                        <button className="butt">Villa</button> 
                        <button className="butt">Plot</button><br/>
                        <button className="butt">Independent House </button> 
                        <button className="butt">Builder Floor</button><br/>
                        <h4><b>Add Your Contact Detail</b></h4>
                        <input placeholder="Phone Number" className="phone" /><br/>
                        <h5 className="h42">Are you a Registered User? <a href="#">Login</a></h5>
                        <Link href={data=="Residential"?"/Residential/otp":"/Commercial/otp"}><button className="start">Start Now</button></Link>
                    </div>
                    <div className="ad">  
                        <h4>Post property Ad to <br/>sell or rent online for </h4><br/>
                        <h1 className="float">FREE</h1>
                        <ul>
                            <li>Advertise For FREE</li>
                            <li>Sell 10 X faster</li>
                            <li>Connect with genuine buyer</li>
                            <li>Get unlimited enquiries</li>
                        </ul><br/>
                        <img src="home.png"  alt="home"/>
                    </div>
                </div>
                <div className="guide">
                    <p className="guidehead">Step by Step Guide for Free Property Listing</p>
                    <div className="steps">
                        <div className="step">
                            <PiNotePencilBold className="icon"/><br/>
                            <h3>Step 1 : Add proper detail</h3>
                            <p>Start filling the form with a few basic details like type of property, Area, Location, etc.</p>
                        </div>
                        <div className="step">
                            <FaImage className="icon"/><br/>
                            <h3>Step 2 : Add Images & Videos</h3>
                            <p>Upload your property images or videos either from your Mobile or Desktop.</p>
                        </div>
                        <div className="step">
                            <GiBank className="icon"/><br/>
                            <h3>Step 3 : Add Pricing</h3>
                            <p>Upload the expected price of your property, and now it is ready to post</p>
                        </div>
                    </div>
                    <div className="why">
                        <img src="/sofa.jpg" className="img"/>
                        <div className="whydeal">
                            <h3>Why Choose Deal Acres?</h3>
                            <p>Deal Acres is the only place where you can sell your property easily and quickly. If you are looking for one of the top free property listing sites in India, Deal Acres came first. When it comes to the free property listing it becomes difficult to pick one that will actually help you rent or sell your residential or commercial property, then Deal Acres is one of the friendliest and fastest-growing real estate website in India today, with some of the simple and easy facilities for uploading your property.
                                <br/><br/>
                                Property listing is the best way to reach out to potential customers who need to buy a home or home for rent. Homebuyers or tenants can shortlist the best among the pool of the real estate listing.<br/>
                              <br/>  So, a builder, an owner, or an agent does need not spend hours selling the house online or trying a hand at the online rental. Listing property is a process of a few minutes and you are done. Deal Acres has traffic and thousands of prospective homebuyers and tenants who visit the website every day. Sell your property quickly with Deal Acres.
                            </p>
                            <br/><br/>
                        </div>
                        <button className="start1" ><b>List Your Property for FREE NOW!</b></button>
                    </div>
                    <div className="about">
                        <div className="aboutin">
                        <h2>Everything you need to know about Deal Acres FREE Property Listing...</h2>
                        <h3>What is Free Property Listing?</h3>
                        <p>It is a process where a builder, as owner or agent can list their property for free on this real estate portal. Through this, you can sell or rent your property effectively and efficiently. It is the perfect way to reach the audience who want to rent their home or buy their dream home. By doing property listing you save your time for selling or renting it.</p>
                        <h3>Advantages of Free Listing</h3>
                        <ul>
                            <li>Provide free online exposure to more buyers.</li>
                            <li>A platform for selling and buying real estate.</li>
                            <li>Interact with and engage potential customers in your area.</li>
                            <li>Negotiate and expedite the purchase.</li>
                            <li>You can save money by working as your own real estate agent.</li>
                        </ul>
                        <h2>Frequently Asked Questions</h2>
                        <p className="ques"><IoMdArrowDropright className="arrow"/>How many free listings can I post deal acres?</p><hr/>
                        <p className="ques"><IoMdArrowDropright className="arrow"/>When will be my property become visible on the site?</p><hr/>
                        <p className="ques"><IoMdArrowDropright className="arrow"/>Is there any limit on responses on a free listings?</p><hr/>
                    </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <img src="sofa.jpg" className="cardimg"/><br/>
                            <h2>Top 10 best school in gurgaon fro Admission</h2>
                            <p>If you are looking for admission for your child in gurgaon schools,the here is top 10</p>
                            <div className="share">
                                <p>07 August 2023</p>
                                <CiShare2/>
                            </div>
                        </div>
                        <div className="card">
                            <img src="sofa.jpg" className="cardimg"/><br/>
                            <h2>Top 10 best school in gurgaon fro Admission</h2>
                            <p>If you are looking for admission for your child in gurgaon schools,the here is top 10</p>
                            <div className="share">
                                <p>07 August 2023</p>
                                <CiShare2/>
                            </div>
                        </div>
                        <div className="card">
                            <img src="sofa.jpg" className="cardimg"/><br/>
                            <h2>Top 10 best school in gurgaon fro Admission</h2>
                            <p>If you are looking for admission for your child in gurgaon schools,the here is top 10</p>
                            <div className="share">
                                <p>07 August 2023</p>
                                <CiShare2/>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <h1>FOOTER</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
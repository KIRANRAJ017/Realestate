'use client';

import Link from "next/link";
import Nav from "../nav/page";
import { useSearchParams } from 'next/navigation'


export default function Detail(){
    const searchParams = useSearchParams()
    const search = searchParams.get('query')
    return(    
        <>
        <Nav/>
        <p>{search}</p>
            <div className="detail">
                <div className="track">
                    <div className="trackele">
                        <p style={{color:'blue'}}>Basic Details<text className="trackline"></text></p>
                        <p>Location Details<text className="trackline"></text></p>
                        <p>Property Details<text className="trackline"></text></p>
                        <p>Photos<text className="trackline"></text></p>
                        <p>Pricing & Others</p>
                    </div>
                </div>
                <div className="det">
                    <div className="need" style={{backgroundColor:' rgba(30, 146, 188, 0.187)',width:'22vw'}}>
                        <p> An Accurate Location is the most essential as it helps you to connect the perfect buyer or tenant </p>
                        <img src="/map.png"/><br/>
                        <h4>Need Help?</h4>
                        <h4>You Can Email Us <br/><span style={{color:"blue",cursor:'pointer'}}>Contact@dealacres.com</span></h4>
                    </div>
                    <div className="otpnum" style={{paddingTop:"40px",paddingBottom:"20px",paddingRight:"40px",textAlign:'center'}}>
                        <h2><b>Your Property Location?</b></h2><br/>
                        <input placeholder="State" className="phone"  /><br/>
                        <input placeholder="City" className="phone" /><br/>
                        <input placeholder="Name of Project / Property"className="phone"  /><br/>
                        <input placeholder="Area / Sector" className="phone" /><br/>
                        <input placeholder="House No.  (Optional)" className="phone" /><br/>
                        <Link href="/Commercial/Agent/location"><button className="needbut1" style={{marginTop:'50px'}}>Continue</button><br/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
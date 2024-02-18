import Link from "next/link";
import Nav from "../nav/page";

export default function Agephoto(){
    return(
        <>
            <Nav/>
            <div className="whlpho">
            <div className="track">
                   
                   <div className="trackele">
                       <p style={{color:'blue'}}>Basic Details<text className="trackline"></text></p>
                       <p style={{color:'blue'}}>Location Details<text className="trackline"></text></p>
                       <p style={{color:'blue'}}>Property Details<text className="trackline"></text></p>
                       <p style={{color:'blue'}}>Photos<text className="trackline"></text></p>
                       <p>Pricing & Others</p>
                   </div>
               </div>
               <div className="det">
                   <div className="otpnum" style={{paddingRight:"40px"}}>
                       <h2>Price Details</h2>
                       <input placeholder="Expected Price" className="phone" style={{borderColor:'blue'}}/><br/>
                       <input placeholder="Price per Sq.Yd." className="phone" style={{borderColor:'blue',marginTop:'10px'}} /><br/>
                       <div  className="check">
                            <p><input type="checkbox" />All Inclusive Price</p>
                            <p><input type="checkbox" />Price Negotiable</p>
                       </div>
                       <h2>Do You Charge Brokerage </h2>
                       <div  className="check">
                            <text><input type="checkbox" />Yes</text>
                            <text><input type="checkbox" />No</text>
                            <text><input type="checkbox" />Fixed Charges</text>
                            <text><input type="checkbox" />Percentage of Price</text>
                       </div><br/>
                        <input placeholder="Enter Brokrage Charges" className="phone" /><br/>
                        <p><input type="checkbox" />Brokerage Negotiable</p>
                        <Link href="/Commercial/Agent/photos"><button className="needbut1">Continue</button></Link>
                   </div>
                   <div className="need" style={{backgroundColor:' rgba(30, 146, 188, 0.187)',width:'22vw'}}>
                       <p>Mention the Expected price of your property with your Brokerage Charges.</p>
                       <img src="/money.png"/><br/>
                       <h4>Need Help?</h4>
                       <h4>You Can Email Us <br/><span style={{color:"blue",cursor:'pointer'}}>Contact@dealacres.com</span></h4><br/><br/>
                   </div>
               </div>
            </div>
        </>
    )
}
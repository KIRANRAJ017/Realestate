import Nav from "../nav/page"
import Link from "next/link"

export default function Location(){
    return(
        <>
            <Nav/>
            <div>
            <div className="track">
                   
                   <div className="trackele">
                       <p style={{color:'blue'}}>Basic Details<text className="trackline"></text></p>
                       <p style={{color:'blue'}}>Location Details<text className="trackline"></text></p>
                       <p>Property Details<text className="trackline"></text></p>
                       <p>Photos<text className="trackline"></text></p>
                       <p>Pricing & Others</p>
                   </div>
               </div>
               <div className="det">
                   <div className="otpnum" style={{paddingTop:"40px",paddingRight:"40px"}}>
                       <h3><b>Now, tell us about your property</b></h3>
                       <h4 style={{position:'absolute',marginTop:'-20px'}}>Describe Your Property</h4>
                       <p>Write Several Thing which can describe your propety appropriately.</p>
                       <textarea placeholder="" className="input" /><br/>
                       <p>Add Room Details</p><br/> 
                       <div className="buttons">
                            <button className="numbutt">1</button>
                            <button className="numbutt">2</button>
                            <button className="numbutt">3</button>
                            <button className="numbutt">4</button>
                            <button className="numbutt">5</button>
                       </div>
                       <p>Number of Bathrooms</p><br/> 
                       <div className="buttons">
                            <button className="numbutt">1</button>
                            <button className="numbutt">2</button>
                            <button className="numbutt">3</button>
                            <button className="numbutt">4</button>
                            <button className="numbutt">5</button>
                       </div>
                       <p>Number of Balconies</p><br/> 
                       <div className="buttons">
                            <button className="numbutt">1</button>
                            <button className="numbutt">2</button>
                            <button className="numbutt">3</button>
                            <button className="numbutt">4</button>
                            <button className="numbutt">5</button>
                       </div>
                       <p>Other Rooms</p><br/> 
                       <div className="selroom">
                            <button>Pooja Room</button>
                            <button>Study Room</button>
                            <button>Servent Room</button>
                            <button>Store Room</button>
                       </div>
                       <p>Furnished</p><br/> 
                       <div className="selroom">
                            <button>Fully Furnished </button>
                            <button>Unfurnished </button>
                       </div>
                       <p>Flooring Details</p><br/>
                       <input placeholder="Total Floors " className="phone" style={{borderColor:'blue',marginTop:'-40px'}}/><br/>
                       <input placeholder="Property on Floor " className="phone" style={{borderColor:'blue',marginTop:'10px'}} /><br/>
                       <p>Availability Status </p><br/> 
                       <div className="selroom">
                            <button>Ready To Move</button>
                            <button>Under-Construction</button>
                       </div>
                       <Link href="/Residential/Agent/profile"><button className="needbut1" style={{marginTop:'20px'}}>Continue</button><br/></Link>
                   </div>
                   <div className="need" style={{backgroundColor:' rgba(30, 146, 188, 0.187)',width:'22vw'}}>
                       <p>Describe your property in brief so the buyer or renter can easily get to know how your property is what makes your property different from others.</p>
                       <img src="/location.png"/><br/>
                       <h4>Need Help?</h4>
                       <h4>You Can Email Us <br/><span style={{color:"blue",cursor:'pointer'}}>Contact@dealacres.com</span></h4><br/><br/>
                       <img src="/emoji.png" alt="emoji"/><br/>
                       <h2>You are Almost There</h2>
                   </div>
               </div>
            </div>
        </>
    )
}
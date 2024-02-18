import Link from "next/link";
import Nav from "../nav/page";


export default function Loc(){
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
                       <p>Floor Number</p> 
                       <button className="butt">Lower Basement</button>
                       <button className="butt">Upper Basement</button>
                       <button className="butt">Ground</button>
                       <div className="buttons" style={{marginTop:"10px"}}>
                            <button className="numbutt">1</button>
                            <button className="numbutt">2</button>
                            <button className="numbutt">3</button>
                            <button className="numbutt">4</button>
                            <button className="numbutt">5</button>
                       </div>
                       <p>Number of Floors</p><br/> 
                       <div className="buttons">
                            <button className="numbutt">1</button>
                            <button className="numbutt">2</button>
                            <button className="numbutt">3</button>
                            <button className="numbutt">4</button>
                            <button className="numbutt">5</button>
                       </div>
                        <p>Corner Shop <input type="checkbox" /> Yes <input type="checkbox" /> No</p>
                        <p>Is Main Road Facing <input type="checkbox" /> Yes <input type="checkbox" /> No</p>
                        <p>Personal Washroom <input type="checkbox" /> Yes <input type="checkbox" /> No</p>
                        <p>Pantry/ Cafeteria <input type="checkbox" /> Yes <input type="checkbox" /> No</p>
                        <p>Area</p>
                        <p>Carpet Area</p>
                        <input type="number" className="in"/> 
                        <select className="sel">
                        <option>Sq-ft</option>
                        <option>Sq-yrd</option>
                        <option>Sq-m</option>
                        <option>Acre</option>
                        <option>Hectare</option>  
                       </select>
                       <p>Width of Entrance</p>
                        <input type="number" className="in"/> 
                        <select className="sel">
                        <option>Sq-ft</option>
                        <option>Sq-yrd</option>
                        <option>Sq-m</option>
                        <option>Acre</option>
                        <option>Hectare</option>  
                       </select>
                       <h4>Availability Status </h4>
                       <button className="butt">Ready To Move </button>
                       <button className="butt">Under-Construction</button>
                       <p>Available From</p>
                       <select className="select" style={{width:'120px'}}>
                        <option>Month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>   
                        <option>May</option>  
                        <option>June</option>  
                        <option>July</option>  
                        <option>August</option>  
                        <option>September</option>  
                        <option>October</option>  
                        <option>November</option>  
                        <option>December</option>  
                       </select>
                       <select className="select" style={{width:'120px',marginLeft:'10px'}}>
                       <option>Year</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2026</option>
                        <option>2027</option> 
                        <option>2028</option>
                        <option>2029</option>
                        <option>2030</option>
                        <option>2031</option>
                        <option>2032</option>
                        <option>2023</option>   
                       </select>
                       <p>Age of Property</p>  
                       <button className="butt">New Construction</button>
                       <button className="butt">0-1 Years</button>
                       <button className="butt">1-5 Years</button>
                       <button className="butt">5-10 Years</button>
                       <button className="butt">+10 Years</button>
                       <p>Currently Leased Out<input type="checkbox" /> Yes <input type="checkbox" /> No</p>
                       <p>Assured Returns<input type="checkbox" /> Yes <input type="checkbox" /> No</p>
                       <h2>Price Details</h2>
                       <input placeholder="Expected Price" className="phone" style={{borderColor:'blue'}}/><br/>
                       <input placeholder="Price per Sq.Yd." className="phone" style={{borderColor:'blue',marginTop:'10px'}} /><br/>
                       <Link href="/Commercial/Builder/agephoto"><button className="needbut1" style={{marginTop:'20px'}}>Continue</button><br/></Link>
                   </div>
                   <div className="need" style={{backgroundColor:' rgba(30, 146, 188, 0.187)',width:'22vw'}}>
                       <p>Describe your property in brief so the buyer or renter can easily get to know how your property is what makes your property different from others.</p>
                       <img src="/shop.png"/><br/>
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
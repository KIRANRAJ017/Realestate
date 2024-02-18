import Nav from "../nav/page";

export default function Photos(){
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
                       <h2>Add Amenties and Features</h2>
                       <div  className="check">
                            <text><input type="checkbox" />Aerobics Room</text>
                            <text><input type="checkbox" />Gym</text>
                            <text><input type="checkbox" />Air Conditioning</text>
                            <text><input type="checkbox" />Indoor Games </text>
                            <text><input type="checkbox" />Amphitheatre</text>
                            <text><input type="checkbox" />Intercom Facility</text>
                            <text><input type="checkbox" />Arts & Craft Studio</text>
                            <text><input type="checkbox" />Internet/WiFi</text>
                            <text><input type="checkbox" />ATM</text>
                            <text><input type="checkbox" />Jogging Track</text>
                       </div>
                       <h2>Property Facing</h2>
                       <button className="butt" style={{borderColor:'blue',paddingLeft:'20px',paddingRight:'20px'}}>North</button>
                       <button className="butt" style={{borderColor:'blue',paddingLeft:'20px',paddingRight:'20px'}}>South</button>
                       <button className="butt" style={{borderColor:'blue',paddingLeft:'20px',paddingRight:'20px'}}>East</button>
                       <button className="butt" style={{borderColor:'blue',paddingLeft:'20px',paddingRight:'20px'}}>West</button>
                       <button className="butt" style={{borderColor:'blue',paddingLeft:'20px',paddingRight:'20px'}}>North-East</button>
                       <button className="butt" style={{borderColor:'blue',paddingLeft:'20px',paddingRight:'20px'}}>South-East</button>
                       <h2>Upload Floor Plan</h2>
                       
                       <h2><b>Add Media</b></h2><br/>
                       <div className="upsec" style={{textAlign:'center'}}>
                        <img src="/upload.png" /><br/>
                        <h4>Drag & Drop Image Here</h4>
                        <p>Uploaded photo is maximum is of 2MB</p>
                        <button type="file" className="uploadbut">Upload Media</button>
                       </div>
                   </div>
                   <div className="need" style={{backgroundColor:' rgba(30, 146, 188, 0.187)',width:'22vw'}}>
                       <p>Describe your property in brief so the buyer or renter can easily get to know how your property is what makes your property different from others.</p>
                       <img src="/home-photo.png"/><br/>
                       <h4>Need Help?</h4>
                       <h4>You Can Email Us <br/><span style={{color:"blue",cursor:'pointer'}}>Contact@dealacres.com</span></h4><br/><br/>
                   </div>
               </div>
               <div className="agree">
                    <h1>GDPR Agreement *</h1>
                    <input type="checkbox" />I agree to this website "Deal Acres" storing my submitted information; see more details below.<br/>
                    <p>The data based on a search query on Deal Acres has been made available for information/advertisement purposes. 
                        No warranty is implied for its accuracy. Nothing contained herein will be deemed to constitute any sort of legal advice, solicitation, 
                        marketing, offer of sale, an invitation to offer, or an invitation to get by the developer/builder or any other entity. You are advised 
                        to visit the relevant RERA website. And get more information about the builder and property directly. Before deciding on the project content 
                        displayed on dealacres.com. If you have any queries contact Deal Acres at contact@dealacres.com.</p>
                    <button className="needbut1" style={{marginLeft:'70px'}}>Post Property</button>
               </div>
            </div>
        </>
    )
}
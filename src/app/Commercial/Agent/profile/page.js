import Nav from "../nav/page";
import Link from "next/link";

export default function Profile()
{
    return(
        <>
        <Nav/>
            <div>
            <div className="track">
                   <div className="trackele">
                       <p style={{color:'blue'}}>Basic Details<text className="trackline"></text></p>
                       <p style={{color:'blue'}}>Location Details<text className="trackline"></text></p>
                       <p style={{color:'blue'}}>Property Details<text className="trackline"></text></p>
                       <p>Photos<text className="trackline"></text></p>
                       <p>Pricing & Others</p>
                   </div>
               </div>
               <div className="det">
                   <div className="need" style={{backgroundColor:' rgba(30, 146, 188, 0.187)',width:'22vw'}}>
                       <p>Click Perfact picture of your property so the renter or buyer see the best image of your property. </p>
                       <img src="/camera.png"/><br/>
                       <h4>Need Help?</h4>
                       <h4>You Can Email Us <br/><span style={{color:"blue",cursor:'pointer'}}>Contact@dealacres.com</span></h4>
                   </div>
                   <div className="otpnum" style={{paddingTop:"40px",paddingBottom:"20px",paddingRight:"40px",textAlign:'center'}}>
                       <h2><b>Add Media</b></h2><br/>
                       <div className="upsec">
                        <img src="/upload.png" /><br/>
                        <h4>Drag & Drop Image Here</h4>
                        <p>Uploaded photo is maximum is of 2MB</p>
                        <button type="file" className="uploadbut">Upload Media</button>
                       </div>
                       <p>At least add 3 images of your property for good visibility and high response.</p>
                       <Link href="/Commercial/Agent/agephoto"><button className="needbut1" style={{marginTop:'50px'}}>Continue</button><br/></Link>
                   </div>
               </div>
            </div>
        </>
    )
}
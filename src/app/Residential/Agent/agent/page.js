import Link from "next/link";
import Nav from "../nav/page";


export default function Agent(){
    return(
        <>
            <Nav/>
            <div className="agent">
                <h2>Before listing your property <br/>buyer should know about you?</h2>
                <div className="agentsec">
                <div className="otpnum">
                    <p style={{marginTop:'-10px'}}><b>Are You REAR Register?</b><br/></p>
                    <button className="agebut">Yes</button>
                    <button className="agebut">I have apllied</button>
                    <button className="agebut">Not Applicable</button><br/>
                    <p>Type of frim</p>
                    <button className="agebut">Partnership</button>
                    <button className="agebut">Proprietor</button>
                    <button className="agebut">Company</button><br/>
                    <h4>Company Details</h4>
                        
                    <input placeholder="Company Url (Optional)" className="phone" style={{marginLeft:'-10px'}}/><br/>
                    <input placeholder="Company Address1" className="phone" style={{marginLeft:'-10px'}}/><br/>
                    <input placeholder="Company Address1 (Optional)"className="phone" style={{marginLeft:'-10px'}} /> <br/>
                    <input placeholder="City" className="phone" style={{marginLeft:'-10px'}}/><br/>
                    <h4>Describe Your Company</h4>
                    <textarea className="input" style={{marginLeft:'-20px'}}></textarea>
                    <h4>Contact Details</h4>
                    <input type="number" placeholder="Mobile No" className="phone" style={{marginLeft:'-10px'}}/><br/>
                    <input type="number"placeholder="Enter Mobile No 2(Optional)" className="phone" style={{marginLeft:'-10px'}}/><br/>
                    <input type="number"placeholder="Enter Mobile No 3(Optional)"className="phone" style={{marginLeft:'-10px'}} /><br/>
                    <input type="number"placeholder="Enter Landline No 1(Optional)" className="phone" style={{marginLeft:'-10px'}}/><br/>
                    <input type="number"placeholder="Enter Landline No 2(Optional)" className="phone" style={{marginLeft:'-10px'}}/><br/>
                    <Link href="/Residential/Agent/detail"><button className="needbut1" style={{marginTop:'20px'}}>Continue</button></Link>
                </div>
                <div className="need">
                    <h4>This information helps buyer to connect with you easily</h4>
                    <img src="/man.png"/><br/>
                    <h2>Need Help?</h2>
                    <h4>You Can Email Us <br/><span style={{color:"blue",cursor:'pointer'}}>Contact@dealacres.com</span></h4>
                </div>
                </div>
            </div>
        </>
    )
}
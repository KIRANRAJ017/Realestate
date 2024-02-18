'use client';
import { FaRegUserCircle } from "react-icons/fa";


export default function Nav(){
    return(
        <>
            <div className="nav">
                <img src="/logo.png" alt="logo"  width="60px" className="logo"/>
                <FaRegUserCircle className="user"/>
            </div>
        </>
    )
}
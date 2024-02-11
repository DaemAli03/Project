import React, { useState } from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarker, FaPhone, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';
export default function Footer() {
    const[menu,setMenu] = useState("home")
return (
    <>
    <div className='container-fluid' style={{backgroundColor:'lightgray',height:'350px'}}>
        <div className='container d-flex mt-5'>
            <div className='row 'style={{marginTop:'100px'}}>
                <div className='col-4'>
                    <h1 style={{fontSize:'25px'}}>VEGEFOODS</h1>
                    <p style={{marginTop:'20px',fontSize:'19px'}}>Far far away, behind the word mountains , far from the countries Vokalia and Consonantia.</p>
                    <FaFacebook size={48} style={{marginTop:'20px',height:'40px'}} />
                    <FaInstagram size={48} style={{marginTop:'20px',height:'40px',marginLeft:'15px'}} />
                    <FaTwitter size={48} style={{marginTop:'20px',height:'40px',marginLeft:'15px'}} />
                </div>
                <div className='col-2' >
                    <h3>MENU</h3>
                    <li style={{marginTop:'15px'}} onClick={()=>{setMenu("about")}}><Link to="/about" className="text-dark fs-5" style={{textDecoration:'none'}}>About</Link>{menu==="about"?<hr/>:<></>}</li>
                    <li style={{marginTop:'30px'}} onClick={()=>{setMenu("shop")}}><Link to="/shop" className="text-dark fs-5"style={{textDecoration:'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                    <li style={{marginTop:'30px'}} onClick={()=>{setMenu("contact")}}><Link to="/contact" className="text-dark fs-5" style={{textDecoration:'none'}}>Contact Us</Link>{menu==="contact"?<hr/>:<></>}</li>
                </div>
                <div className='col-3'>
                    <h3>HELP</h3>
                    <p style={{marginTop:'20px',fontSize:'18px',fontWeight:'400'}}>Returns & Exchange</p>
                    <p style={{marginTop:'30px',fontSize:'18px',fontWeight:'400'}}>Terms & Conditions</p>
                    <p style={{marginTop:'30px',fontSize:'18px',fontWeight:'400'}}>Privacy Policy</p>
                </div>
                <div className='col-3'>
                    <h2>Have Any Questions</h2>
                    <p style={{fontWeight:'400'}}><FaMapMarker/>203 Fake St. Mountain View, </p><br/>
                    <p style={{fontWeight:'400'}}><FaPhone/>+2 392 3929 210</p><br/>
                    <p style={{fontWeight:'400'}}><FaEnvelope/>info@yourdomain.com</p><br/>
                </div>
            </div>
        </div>
    </div>
    </>
    
)
}

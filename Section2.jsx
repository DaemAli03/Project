import React from 'react'

import Img from '../Assets/about.jpg'
export default function Section2() {
return (
    <>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-6'>
                    <img src={Img} alt='Img' style={{width:'650px',height:'550px'}}/>
                </div>
                <div className='col-6' style={{marginTop:'100px'}}>
                    <h1 style={{fontSize:'50px'}}>
                        Welcome to Vegefoods an eCommerce website
                    </h1>
                    <p className='mt-3' style={{fontSize:'18px'}}>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    </p>
                    <p className='mt-3' style={{fontSize:'18px'}}>
                        But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
                    </p>
                    <button className='mt-3' style={{borderRadius:'15px',width:'150px',height:'40px',backgroundColor:'lightgreen',opacity:'.8'}}>Shop Now</button>
                </div>
            </div>
        </div>
    </>
)
}

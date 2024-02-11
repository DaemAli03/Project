import React from 'react';
import Card from 'react-bootstrap/Card';
import AlwaysFresh from '../Assets/alwaysfresh.jpeg';
import FreeShip from '../Assets/freeshipping.png';
import Superior from '../Assets/superiorquality.png';
import Support from '../Assets/support.jpg';
export default function Section() {
return (
    <div className='container d-flex mt-5 justify-content-around'>
        <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={FreeShip} style={{width:'130px' , marginLeft:'33px'}}/>
            <Card.Body style={{textAlign:'center'}}>
                <Card.Title >Free Shipping</Card.Title>
                <Card.Text>ON ORDER OVER $100</Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={AlwaysFresh} style={{width:'130px' , marginLeft:'45px'}} />
            <Card.Body style={{textAlign:'center'}}>
                <Card.Title>Always Fresh</Card.Title>
                <Card.Text>PRODUCT WELL PACKAGE</Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={Superior} style={{width:'130px' , marginLeft:'45px'}}/>
            <Card.Body style={{textAlign:'center'}}>
                <Card.Title>Superior Quality</Card.Title>
                <Card.Text>Quality Products</Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={Support} style={{width:'130px' , marginLeft:'48px'}}/>
            <Card.Body style={{textAlign:'center'}}>
                <Card.Title>Support</Card.Title>
                <Card.Text>24/7 SUPPORT</Card.Text>
            </Card.Body>
        </Card>
    </div>
)
}

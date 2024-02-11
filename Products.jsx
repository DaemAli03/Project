import React from 'react';
import Card from 'react-bootstrap/Card';
import './Products.css';
import { Productsdata, Productsdata1, Productsdata2 } from './ProductsData/Productsdata';
export default function Products() {
return (
    <>
        <div className='Desc'>
            <h3>
                Featured Products
            </h3>
            <h1>
                Our Products
            </h1>
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
            </p>
        </div>
        <div className='container d-flex mt-5 justify-content-around'>
            {Productsdata.map((item) => (
                <Card key={item.id} style={{ width: '12rem'}}>
                    <Card.Img variant="top" src={item.img} style={{ height: '150px', objectFit: 'cover' }} />
                    <Card.Body className='text-center'>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.price}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
        <div className='container d-flex mt-5 justify-content-around'>
            {Productsdata1.map((item) => (
                <Card key={item.id} style={{ width: '12rem'}}>
                    <Card.Img variant="top" src={item.img} style={{ height: '150px', objectFit: 'cover' }} />
                    <Card.Body className='text-center'>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.price}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
        <div className='container d-flex mt-5 justify-content-around'>
            {Productsdata2.map((item) => (
                <Card key={item.id} style={{ width: '12rem'}}>
                    <Card.Img variant="top" src={item.img} style={{ height: '150px', objectFit: 'cover' }} />
                    <Card.Body className='text-center'>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.price}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    </>
    
)
}

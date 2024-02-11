import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from '../../CartPage/CartContext/CartContext';
import { Fruits, Fruits1 } from '../Data/Data';
export const ProductLine3 = ( ) => {
    const { addToCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product);
    };
return (
    <>
        <div className='Desc' style={{marginTop:'55px'}}>
            <h3 style={{fontSize:'60px'}}>
                FRUITS
            </h3>
        </div>
        <div className='container d-flex mt-5 justify-content-around'>
            {Fruits.map((item) => (
                <Card key={item.id} style={{ width: '12rem'}}>
                    <Card.Img variant="top" src={item.img} style={{ height: '150px', objectFit: 'cover' }} />
                    <Card.Body className='text-center'>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.price}</Card.Text>
                        <Button variant="success" onClick={() => handleAddToCart(item)}>Add To Cart</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
        <div className='container d-flex mt-5 justify-content-around'>
            {Fruits1.map((item) => (
                <Card key={item.id} style={{ width: '12rem'}}>
                    <Card.Img variant="top" src={item.img} style={{ height: '150px', objectFit: 'cover' }} />
                    <Card.Body className='text-center'>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.price}</Card.Text>
                        <Button variant="success" onClick={() => handleAddToCart(item)}>Add To Cart</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    </>
)
}

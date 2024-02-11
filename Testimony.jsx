import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import Person1 from '../Assets/person_1.jpg';
import Person2 from '../Assets/person_2.jpg';
import Person3 from '../Assets/person_3.jpg';
export default function Testimony() {
return (
    <>
        <div className='Desc'>
            <h3>
                Testimony
            </h3>
            <h1>
                Our Satisfied Customers
            </h1>
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
            </p>
        </div>
        <div className='container d-flex mt-5 justify-content-around'>
            <Carousel>
                <Carousel.Item>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={Person1} />
                        <Card.Body style={{textAlign:'center' , marginBottom:'8px'}}>
                            <Card.Text>Far far away,behind the world,mountains,far from the countries Vokalia and Consonantia,there live the blind texts</Card.Text>
                            <Card.Title>Garreth Smith</Card.Title>
                            <Card.Text>Marketing Manager</Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={Person2} />
                        <Card.Body style={{textAlign:'center' , marginBottom:'8px'}}>
                            <Card.Text>Far far away,behind the world,mountains,far from the countries Vokalia and Consonantia,there live the blind texts</Card.Text>
                            <Card.Title>Garreht Smith</Card.Title>
                            <Card.Text>Interface Designer</Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={Person3} />
                        <Card.Body style={{textAlign:'center' , marginBottom:'8px'}}>
                            <Card.Text>Far far away,behind the world,mountains,far from the countries Vokalia and Consonantia,there live the blind texts</Card.Text>
                            <Card.Title>Garreth Smith</Card.Title>
                            <Card.Text>UI Designer</Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel>
        </div>
    </>
)
}

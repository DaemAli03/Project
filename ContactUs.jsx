import React from 'react';
import Card from 'react-bootstrap/Card';
export default function ContactUs() {
  return (
    <>
      <div className="container d-flex mt-5" >
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text>Address: 198 West 21th Street, Suite 721 New York NY 10016</Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem',marginLeft:'30px'}}>
            <Card.Body>
                <Card.Text>Phone: + 1235 2355 98</Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem',marginLeft:'30px'}}>
            <Card.Body>
                <Card.Text>Email: info@yoursite.com</Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem',marginLeft:'30px'}}>
            <Card.Body>
                <Card.Text>Website yoursite.com</Card.Text>
            </Card.Body>
        </Card>
      </div>
    </>
  )
}

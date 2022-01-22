import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Header } from './Header';
import Figure from 'react-bootstrap/Figure';

export default function WatchPartiesItem() {
  
  return <div>
    <Header/>
    <h1 style={{textAlign: 'center' }}>  Dahirs Watch Parties </h1>


    <Card className="text-center"     padding={20}>
  <Card.Header as="h5">Name of Watch Part</Card.Header>
  <Figure style= {{float: 'right'}}>
  <Figure.Image
  
    width={171}
    height={180}
    alt="171x180"
    src='https://github.com/dahiryusuf/final_project/blob/master/frontend/public/shutterstock_1361799455.jpg?raw=true'
  position= 'absolute'
    right='0'  />
     <Figure.Caption>
Movie Title
  </Figure.Caption>
</Figure>
  <Card.Body>
    <Card.Title>Date: Goes here</Card.Title>
    <Card.Text  style={{flexDirection: 'row' }}>
      Movie Choices: Spiderman, Die Hard, The Notebook
    </Card.Text>
    <Button variant="primary">Pick Movie</Button>
    <Button variant="secondary">Get Link</Button>
  </Card.Body>
</Card>
<Card >
  <Card.Header as="h5">Name of Watch Part</Card.Header>
  <Figure style= {{float: 'right'}}>
  <Figure.Image
  
    width={171}
    height={180}
    alt="171x180"
    src='https://github.com/dahiryusuf/final_project/blob/master/frontend/public/shutterstock_1361799455.jpg?raw=true'
  position= 'absolute'
    right='0'  />
     <Figure.Caption>
Movie Title
  </Figure.Caption>
</Figure>
  <Card.Body>
    <Card.Title>Date: Goes here</Card.Title>
    <Card.Text style={{flexDirection: 'row' }}>
      Movie Choices: Spiderman, Die Hard, The Notebook
    </Card.Text>
    <Button variant="primary">Pick Movie</Button>
    <Button variant="secondary">Get Link</Button>
  </Card.Body>
</Card>
<Card className="text-center">
  <Card.Header as="h5">Name of Watch Part</Card.Header>
  <Figure style= {{float: 'right'}}>
  <Figure.Image
  
    width={171}
    height={180}
    alt="171x180"
    src='https://github.com/dahiryusuf/final_project/blob/master/frontend/public/shutterstock_1361799455.jpg?raw=true'
  position= 'absolute'
    right='0'  />
     <Figure.Caption>
Movie Title
  </Figure.Caption>
</Figure>
  <Card.Body>
    <Card.Title>Date: Goes here</Card.Title>
    <Card.Text style={{flexDirection: 'row' }}>
      Movie Choices: Spiderman, Die Hard, The Notebook
    </Card.Text>
    <Button variant="primary">Pick Movie</Button>
    <Button variant="secondary">Get Link</Button>
  </Card.Body>
</Card></div>;
}

import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';

const Categories = () => {
    return (
        <div>
            <h3 style={{ margin: '40px 0px' }}>Our Product Categories</h3>
            <Container>
                <CardGroup>
                    <Row xs={1} md={2} lg={3} className="g-5">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://i.ibb.co/N9FJF0f/photo-1597362925123-77861d3fbac7-ixlib-rb-1-2.jpg/100px160" />
                                <Card.Body>
                                    <Card.Title>Vegetables</Card.Title>
                                    <Card.Text>
                                        This is a wider card
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://i.ibb.co/kxL9hj8/photo-1448907503123-67254d59ca4f-ixlib-rb-1-2.jpg/100px160" />
                                <Card.Body>
                                    <Card.Title>Meat</Card.Title>
                                    <Card.Text>
                                        This card has supporting text
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://i.ibb.co/6RG1C5q/photo-1619566636858-adf3ef46400b-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb.jpg/100px160" />
                                <Card.Body>
                                    <Card.Title>Fruits</Card.Title>
                                    <Card.Text>
                                        This is a wider card
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </CardGroup>
            </Container>
        </div>
    );
};

export default Categories;
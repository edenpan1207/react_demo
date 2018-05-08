import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, CardImg, CardBlock, CardBody, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Products extends React.Component {
    render() {
        return (
            <Col xs="12" sm="6" md="4" className="product-list">
                <Card>
                    <CardImg top width="100%" src={this.props.img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>價格：{this.props.price}</CardSubtitle>
                        <CardText>{this.props.desc}</CardText>
                        <Button onClick={this.props.clicked} disabled={this.props.disabled}>購買</Button>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button, Jumbotron, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import AlbumJson from './Album.json';
import Products from './components/Products';
import './index.scss';

export default class Main extends React.Component {
  state = {
    modal: false,
    cart: [],
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  addCart = (product) => {
    const cartList = this.state.cart;
    cartList.push(product);

    this.setState({
      cart: cartList,
    });
  }

  check = (totalPrice) => {
    alert(`已從您的信用卡扣除${totalPrice}元`);
  }

  render() {
    const totalPrice = this.state.cart.reduce((arr, index) => arr + index.price, 0);
    return (
      <Container>

        <Row>
          <Col xs="12">
            <Jumbotron>
              <h1 className="display-3">伽博唱片行</h1>
              <p className="lead">這是伽博唱片行的 React 練習</p>
              <p className="lead">
                <Button color="primary" onClick={this.toggle}>購物車 ({this.state.cart.length})</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          {
            AlbumJson.map(product => (
              <Products
                key={product.id.toString()}
                img={product.img}
                title={product.title}
                price={product.price}
                desc={product.desc}
                clicked={() => this.addCart(product)}
                disabled={this.state.cart.find(item => item.id === product.id)}
              />
            ))
          }
        </Row>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>購物車</ModalHeader>
          <ModalBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>品項</th>
                  <th>數量</th>
                </tr>
              </thead>
              <tbody>
                {this.state.cart.map((item, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                  </tr>
                ))
                }
              </tbody>
            </Table>
            <p>總價：{totalPrice}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.check(totalPrice)}>結帳</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>取消</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

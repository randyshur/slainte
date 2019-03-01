import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Modal, ModalBody, Col, Button, Form, FormGroup, } from 'reactstrap';
import Background from '../../assets/images/barrels.png';
import styled from 'styled-components';
import APIURL from '../../helpers/environment';

import LookupCreate from './LookupCreate';
import LookupEdit from './LookupEdit';
import LookupTable from './LookupTable'

const Header = styled.h6`
@import url('../../assets/fonts/druidhill-webfont.woff');
font-family: 'druidhill', sans-serif;
font-size: calc(12px + 5vw);
text-align: center;
-webkit-text-stroke: 1px red;
color: black;
text-shadow:
    3px 3px 0 #000,
  -1px -1px 0 #000,  
   1px -1px 0 #000,
   -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const styles = {
  mstyle: {
    color: 'black',
    backgroundImage: 'url(' + Background + ')',
    margin: '0 auto',
  },
  mcenter: {
    margin: '0 auto'
  }
}

class LookupIndex extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lookups: [],
      updatePressed: false,
      lookupToUpdate: {}
    }
  }

  fetchLookups = () => {
    fetch(`${APIURL}/api/bottler/all`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    }).then((res) => res.json())
      .then((lookupData) => {
        console.log('FETCH LOOKUPS data---' + lookupData)
        return this.setState({ lookups: lookupData })
      })
  }

  setUpdatedLookup = (event, lookup) => {
    this.setState({
      lookupToUpdate: lookup,
      updatePressed: true
    })
  }

  lookupUpdate = (event, lookup) => {

    fetch(`${APIURL}/api/bottler/${lookup.id}`, {
      method: 'PUT',
      body: JSON.stringify({ bottler: lookup }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    }).then((res) => {
      this.setState({ updatePressed: false })
      this.fetchLookups();
    })
    
  }

  lookupDelete = (event) => {

    fetch(`${APIURL}/api/bottler/${event.target.id}`, {
        method: 'DELETE',
        body: JSON.stringify({log: {id: event.target.id}}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
        })
    })
    .then((res) => this.fetchWorkouts())
    
  }

  componentDidMount() {
    this.fetchLookups()
  }

  render() {

    console.log('HERE----' + this.state.lookups.length)
  
    const lookups = this.state.lookups.length >= 1 ?
      <LookupTable lookups={this.state.lookups} delete={this.lookupDelete} update={this.setUpdatedLookup} /> :
      <h2>Enter Bottler</h2>

    return (
      <Modal isOpen={true}>
        <div className="modal-content" style={styles.mstyle}>
          <Header>Bottlers</Header>
          <ModalBody>

            <Container>
              <Row>
                <Col sm='12'>
                  <LookupCreate token={this.props.token} updateLookupsArray={this.fetchLookups} />
                </Col>
              </Row>
              <Row>
                <Col sm='12'>
                 {lookups}
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  {
                    this.state.updatePressed ? <LookupEdit t={this.state.updatePressed} update={this.lookupUpdate} lookup={this.state.lookupToUpdate} /> : <div></div>
                  }
                </Col>
              </Row>
            </Container>

            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Col sm={{ size: 12 }} className="text-center"><Link to="/"><Button color="danger">Close</Button></Link></Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </div>
      </Modal>
    );

  }
}

export default LookupIndex;
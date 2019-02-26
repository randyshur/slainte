import React, { Component } from 'react';
import LookupCreate from './LookupCreate';
import { Container, Row, Col } from 'reactstrap';
import LookupTable from './LookupTable';
import LookupEdit from './LookupEdit';

class LookupIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lookups: [],
            updatePressed: false,
            lookupToUpdate: {}
        }
    }

    fetchLookup = () => {

        fetch('http://localhost:3050/api/grain', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then((res) => res.json())
            .then((lookupData) => {
                return this.setState({ lookups: lookupData })
            })
    }

    lookupDelete = (event) => {
        fetch(`http://localhost:3050/api/grain/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ grain: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => this.fetchWorkouts())
    }

    workoutUpdate = (event, workout) => {
        fetch(`http://localhost:3000/api/grain/${workout.id}`, {
            method: 'PUT',
            body: JSON.stringify({ log: workout }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then((res) => {
            this.setState({ updatePressed: false })
            this.fetchLookups();
        })
    }

    setUpdatedLookup = (event, lookup) => {
        this.setState({
            lookupToUpdate: lookup,
            updatePressed: true
        })
    }

    componentDidMount() {
        this.fetchLookups()
    }

    render() {
        const lookups = this.state.lookups.length >= 1 ?
            <LookupsTable lookups={this.state.lookups} delete={this.lookupDelete} update={this.setUpdatedLookup} /> :
            <h2>Enter a new lookup</h2>

        return (
            <div>
            <Modal isOpen={true}>
                <ModalHeader>Log a Workout</ModalHeader>
                <ModalBody>
            <Container>
                <Row>
                    <Col md='3'>
                        <LookupCreate token={this.props.token} updateLookupsArray={this.fetchLookups} />
                    </Col>
                    <Col md='9'>
                        {lookups}
                    </Col>
                    <Col md="12">
                        {
                            this.state.updatePressed ? <LookupEdit t={this.state.updatePressed} update={this.lookupUpdate} lookup={this.state.lookupToUpdate} /> : <div></div>
                        }
                    </Col>
                </Row>
            </Container>
            </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default LookupIndex;
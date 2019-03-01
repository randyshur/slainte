import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../../helpers/environment';

class LookupCreate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            bottler: '',

        };
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = (event) => {
        fetch(`${APIURL}/api/bottler/`, {
            method: 'POST',
            body: JSON.stringify({ bottler: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => response.json())
            .then((bottlerData) => {
                this.props.updateLookupsArray();
                this.setState({
                    id: '',
                    bottler: ''
                })
            })

    }

    render() {
        return (
            <React.Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label for="bottler" sm={2}>Bottlers</Label>
                        <Col sm={10}>
                            <Input onChange={this.handleChange} type="text" name="bottler" id="bottler" placeholder={"Enter Bottler"} required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{ size: 12 }} className="text-center"><Button type="submit" color="success">Create Bottler</Button></Col>
                    </FormGroup>
                </Form>
                <hr />
            </React.Fragment>
        )
    }
}

export default LookupCreate;
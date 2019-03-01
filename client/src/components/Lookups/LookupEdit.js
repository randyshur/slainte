import React from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalBody} from 'reactstrap';

class LookupEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: '',
            bottler: ''
        }
    }

    componentWillMount(){
        this.setState({
            id: this.props.lookup.id,
            bottler: this.props.lookup.bottler
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state);
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="bottler">Result</Label>
                                <Input id="bottler" type="text" name="bottler" value={this.state.bottler} placeholder="enter bottler" onChange={this.handleChange}/>
                            </FormGroup>
                            <Button type="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default LookupEdit;
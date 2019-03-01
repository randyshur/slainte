import React from 'react';
import { Table, Button } from 'reactstrap';

const LookupTable = (props) => {

    console.log('HERE IN TABLE----')
    console.log(props.lookups)

    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Bottler</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.lookups.map((bottler, id, ) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{bottler.id}</th>
                                    <td>{bottler.bottler}</td>
                                    <td>{bottler.active?'YES':'--'}</td>
                                    <td>
                                        <Button id={bottler.id}  color="danger">Delete</Button>|
                                        <Button id={bottler.id} onClick={e => this.props.update(e, bottler)} color="warning">Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default LookupTable;
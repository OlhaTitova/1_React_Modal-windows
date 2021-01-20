import React, { Component } from 'react';
import Button from '../Button/Button';
import ModalBase from '../ModalBase/ModalBase';

class ModalDelete extends Component {
    render() {

        return (
            <ModalBase
                header="Do you want to delete this file?"
                text="Once you delete this file, it won't be possible to undo this action."
                textConfirm="Are you sure want to delete it?"
                closeButton={true}
                action={[
                    <Button text='Ok' backgroundColor="btn-delete-modal" />,
                    <Button onClick={this.props.onClose} text='Cancel' backgroundColor="btn-delete-modal" />
                ]}
                bgColorHeader="#c03f31"
                bgColorBody="#e74c3c"
                bgColorFooter="#e74c3c"
                onClose={this.props.onClose}
            />
        )
    }
}

export default ModalDelete;

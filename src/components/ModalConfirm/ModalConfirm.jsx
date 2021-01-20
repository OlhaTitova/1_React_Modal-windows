import React, { Component } from 'react';
import Button from '../Button/Button';
import ModalBase from '../ModalBase/ModalBase';

class ModalConfirm extends Component {
    render() {
        return (
            <ModalBase
                header="Confirm"
                text="You have started writing or editing a post."
                textConfirm="Are you sure you want to leave this page?"
                closeButton={false}
                action={[
                    <Button text='Stay on this page' backgroundColor="btn-confirm-modal" />,
                    <Button onClick={this.props.onClose} text='Leave this page' backgroundColor="btn-confirm-modal" />,
                ]}
                bgColorHeader="#016BE1"
                bgColorBody="#27A3E3"
                bgColorFooter="#27A3E3"
                onClose={this.props.onClose}
            />
        )
    }
}

export default ModalConfirm;
import React, { Component } from 'react';
import './WrapperButton.scss';
import Button from '../Button/Button';
import ModalConfirm from '../ModalConfirm/ModalConfirm';
import ModalDelete from '../ModalDelete/ModalDelete';


class WrapperButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleModalDelete: false,
            toggleModalConfirm: false,
        }
    }

    openModalDelete = () => {
        this.setState({ toggleModalDelete: true })
    }

    openModalConfirm = () => {
        this.setState({ toggleModalConfirm: true })
    }

    closeModalDelete = () => {
        this.setState({ toggleModalDelete: false })
    }

    closeModalConfirm = () => {
        this.setState({ toggleModalConfirm: false })
    }

    render() {
        return (
            <div className="wrapper-button">
                <Button
                    onClick={this.openModalDelete}
                    className={this.props.className}
                    text="Open first modal"
                    backgroundColor='btn-delete'
                />
                <Button
                    onClick={this.openModalConfirm}
                    className={this.props.className}
                    text="Open second modal"
                    backgroundColor="btn-confirm"
                />
                {
                    this.state.toggleModalDelete &&
                    <ModalDelete
                        onClose={this.closeModalDelete}
                    />
                }
                {
                    this.state.toggleModalConfirm &&
                    <ModalConfirm
                        onClose={this.closeModalConfirm}
                    />
                }
            </div>
        )
    }
}

export default WrapperButton;
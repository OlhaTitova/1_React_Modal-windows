import React, {Component} from 'react';
import Button from './Button';
import './App.scss';


class Modal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }     

    render() {
        const {header, text, textConfirm, bgColorHeader, bgColorBody, bgColorFooter, closeButton, action, textBtn, backgroundColor} = this.props.fields;
        return(
            <div>
                <Button text={textBtn} backgroundColor={backgroundColor} onClick={() => this.showModal()} />
                {
                    this.state.isOpen &&
                    <div className="wrapper" onClick={() => this.showModal()}>
                        <div className="modal"  onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header" style={{backgroundColor: bgColorHeader}}>
                                <h5 className="modal-title">{header}</h5>
                                    {closeButton ? <span className="close" onClick={() => this.showModal()}>&times;</span> : ''}
                            </div>
                            <div className="modal-body" style={{backgroundColor: bgColorBody}}>
                                <p className="text-modal">{text}</p>
                                <p>{textConfirm}</p>
                            </div>
                            <div className="modal-footer" style={{backgroundColor: bgColorFooter}}>
                                {action[0]}
                                {action[1]}
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }

    showModal = () => {
        this.setState ({
            isOpen: !this.state.isOpen
        })
    }
}

export default Modal;
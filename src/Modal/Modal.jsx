import { Component } from "react";

class Modal extends Component{
    onClose = () => {
        this.props.onCloseHend()
    }
    render() {
        return (<div className="Overlay" onClick={this.onClose}>
            <div className="Modal">
                {this.props.children}
                <img src={this.props.imgUrl} alt=""/>
            </div>
        </div>)
    }
}
export default Modal;
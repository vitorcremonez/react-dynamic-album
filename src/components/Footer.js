import React, {Component} from 'react';

import $ from 'jquery';
import ModalAlbumCreator from "./ModalAlbumCreator";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div className="text-black-50 p-5">
                <div className="font-weight-bold">
                    Dynamic Album!
                </div>
                <div>
                    <a href={'#'} onClick={() => this.toggle()}>
                        Create my dynamic album too!
                    </a>
                    <ModalAlbumCreator isOpen={this.state.modal} toggle={this.toggle}/>
                </div>
                <div>
                    Created by Vitor Cremonez <a href="https://github.com/vitorcremonez/react-dynamic-album">github</a>
                </div>
            </div>
        );
    }

};

export default Footer;
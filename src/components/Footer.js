import React, {Component} from 'react';

import $ from 'jquery';
import ModalAlbumCreator from "./ModalAlbumCreator";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalNewAlbum: false,
            modalEditAlbum: false,
        };
        this.toggleNewAlbum = this.toggleNewAlbum.bind(this);
        this.toggleEditAlbum = this.toggleEditAlbum.bind(this);
    }

    toggleNewAlbum() {
        this.setState({modalNewAlbum: !this.state.modalNewAlbum});
    }

    toggleEditAlbum() {
        this.setState({modalEditAlbum: !this.state.modalEditAlbum});
    }

    render() {
        return (
            <div className="text-black-50 p-5">
                <div className="font-weight-bold">
                    Dynamic Album!
                </div>
                <div>
                    <a href={'javascript:void(0)'} onClick={() => this.toggleNewAlbum()}>
                        Create my dynamic album too!
                    </a>
                    {' or '}
                    <a href={'javascript:void(0)'} onClick={() => this.toggleEditAlbum()}>
                        Edit this!
                    </a>
                    <ModalAlbumCreator isOpen={this.state.modalNewAlbum} toggle={this.toggleNewAlbum}/>
                    <ModalAlbumCreator isOpen={this.state.modalEditAlbum} toggle={this.toggleEditAlbum} album={this.props.album}/>
                </div>
                <div>
                    Created by Vitor Cremonez <a href="https://github.com/vitorcremonez/react-dynamic-album" target={'_blank'}>github</a>
                </div>
            </div>
        );
    }

};

export default Footer;
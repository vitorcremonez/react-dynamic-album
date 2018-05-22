import React, {Component} from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';
import $ from "jquery";

class ModalAlbumCreator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.album && props.album.title ? props.album.title : "",
            description: props.album && props.album.description ? props.album.description : "",
            images: props.album && props.album.images ? props.album.images : [],
        };
    }

    renderLink() {
        const obj = {
            title: this.state.title,
            description: this.state.description,
            images: this.state.images,
        };
        const recursiveEncoded = $.param(obj);

        return (
            <a href={`${window.location.origin}?${recursiveEncoded}`} target={'_blank'}>
                {`${window.location.origin}?${recursiveEncoded}`}
            </a>
        );
    }

    renderImagesForm() {
        return this.state.images.map((image, index) => {
            return (
                <div>
                    <Label className="font-weight-bold">Image #{index + 1}:</Label>
                    <Input
                        type="text"
                        placeholder="Description..."
                        className="mb-2"
                        value={this.state.images[index].description}
                        onChange={(event) => {
                            const images = this.state.images;
                            images[index].description = event.target.value;
                            this.setState({images: images});
                        }}
                    />
                    <Input
                        type="text"
                        placeholder="https://examplehost.com/your-image.png"
                        className="mb-2"
                        value={this.state.images[index].url}
                        onChange={(event) => {
                            const images = this.state.images;
                            images[index].url = event.target.value;
                            this.setState({images: images});
                        }}
                    />
                    <img
                        className="rounded mb-2"
                        src={this.state.images[index].url}
                        width={200}
                    />
                </div>
            );
        })
    }

    renderForm() {
        return (
            <Form>
                <FormGroup>
                    <Label className="font-weight-bold">Title:</Label>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Album title"
                        value={this.state.title}
                        onChange={(event) => this.setState({title: event.target.value})}
                    />
                </FormGroup>

                <FormGroup>
                    <Label className="font-weight-bold">Description:</Label>
                    <Input
                        type="textarea"
                        name="text"
                        placeholder="Album description"
                        value={this.state.description}
                        onChange={(event) => this.setState({description: event.target.value})}
                    />
                </FormGroup>

                <FormGroup>
                    <FormGroup>
                        <div className="p-2 rounded" style={{backgroundColor: '#EEE'}}>
                            { this.renderImagesForm() }

                            <div className="text-center">
                                <Button type="button" color="danger" onClick={() => {
                                    this.setState({
                                        images: [
                                            ...this.state.images,
                                            {
                                                description: "",
                                                url: "",
                                            }
                                        ]
                                    });
                                }}>
                                    + Image
                                </Button>
                            </div>
                        </div>
                    </FormGroup>
                </FormGroup>

                <div className="text-center p-2 responsive-text"
                     style={{borderWidth: 2, borderColor: '#EEE', borderStyle: 'dashed', borderRadius: 5}}>
                    {this.renderLink()}
                </div>
            </Form>
        );
    }


    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={() => this.props.toggle()}>
                <ModalHeader>
                    Dynamic Album!
                </ModalHeader>
                <ModalBody>
                    {this.renderForm()}
                </ModalBody>
            </Modal>
        );
    }
}

export default ModalAlbumCreator;
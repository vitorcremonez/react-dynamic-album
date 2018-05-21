import React, {Component} from 'react';
import {PhotoSwipeGallery} from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';

class Album extends Component {
    constructor(props) {
        super(props);
        this.items = [];

        this.props.images.forEach((image) => {
            const item = {
                src: image.url,
                title: image.description,
                w: 0,
                h: 0,
            };
            this.items = [
                ...this.items,
                item
            ];
        });
    }

    componentDidMount() {
        this.configureItemsSizes(this.items);
    }

    configureItemsSizes(items) {
        items.forEach((item) => {
            let img = new Image();
            img.src = item.src;
            img.onload = () => {
                item.w = img.width;
                item.h = img.height;
            };
        });
    }

    getThumbnailContent = (item) => {
        return (
            <p>
                <h4 style={{display: item.title === '' ? 'none' : 'block'}}>
                    {item.title}
                </h4>
                <img
                    src={item.src}
                    width={'100%'}
                />
            </p>
        );
    };

    render() {
        return (
            <p>
                <PhotoSwipeGallery items={this.items} thumbnailContent={this.getThumbnailContent}/>
            </p>
        );
    }
}

Album.defaultProps = {
    images: [],
};

export default Album;
import React, {Component} from 'react';
import {PhotoSwipeGallery} from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';

let items = [
    {
        src: 'https://cnet2.cbsistatic.com/img/r55D9EFCaaNpPVUay88jTv5-gZ4=/830x467/2017/06/27/13484418-bfd9-41e2-8f2d-9b4afb072da8/apple-macbook-pro-15-inch-2017-14.jpg',
        title: 'Lorem Ipsum Dolor.',
        w: 0,
        h: 0,
    },
    {
        src: 'https://cnet2.cbsistatic.com/img/r55D9EFCaaNpPVUay88jTv5-gZ4=/830x467/2017/06/27/13484418-bfd9-41e2-8f2d-9b4afb072da8/apple-macbook-pro-15-inch-2017-14.jpg',
        title: 'Lorem Ipsum Dolor.',
        w: 0,
        h: 0,
    }
];

class Album extends Component {
    componentDidMount() {
        this.configureItemsSizes(items);
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
                <h4>
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
                <PhotoSwipeGallery items={items} thumbnailContent={this.getThumbnailContent}/>
            </p>
        );
    }
}

export default Album;
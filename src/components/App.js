import React, {Component} from 'react';
import Album from "./Album";
import Footer from "./Footer";
import deparam from "node-jquery-deparam";
import RichText from "./RichText";

class App extends Component {
    getAlbum() {
        return deparam(decodeURIComponent(window.location.search.substring(1)));
    }

    render() {
        let album = this.getAlbum();

        if (Object.keys(album).length === 0 && album.constructor === Object) {
            return (
                <div className="text-center">
                    <Footer/>
                </div>
            );
        }

        return (
            <div className="text-center">
                <h1>
                    { album.title && album.title !== "" ? album.title : "vazio"}
                </h1>
                <p>
                    <RichText>
                        { album.description && album.description !== "" ? album.description : "vazio"}
                    </RichText>
                </p>
                <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
                    <div style={{width: '100%', maxWidth:800}}>
                        <Album images={album.images}/>
                    </div>
                </div>
                <Footer album={album}/>
            </div>
        );
    }
}

export default App;

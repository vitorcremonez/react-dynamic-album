import React, {Component} from 'react';
import Album from "./Album";
import Footer from "./Footer";
import deparam from "node-jquery-deparam";
import RichText from "./RichText";

class App extends Component {

    render() {
        let album = deparam(decodeURIComponent(window.location.search.substring(1)));

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
                <div style={{display:'flex', justifyContent: 'center', alignItems:'center', backgroundColor:'red'}}>
                    <div style={{width: '100%', maxWidth:800}}>
                        <Album images={album.images}/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;

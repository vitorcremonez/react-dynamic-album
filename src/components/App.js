import React, {Component} from 'react';
import Album from "./Album";
import Footer from "./Footer";

class App extends Component {
    render() {
        return (
            <div className="text-center">
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut erat mattis turpis bibendum luctus at egestas ipsum. Donec in accumsan nunc. Nunc non erat tellus. Curabitur ut hendrerit urna. Nulla ipsum tellus, rutrum ut magna vitae, dictum feugiat nisi. Duis vel ornare arcu, a rutrum massa. In vel massa massa. Suspendisse auctor lacus enim. Praesent elementum convallis odio, id consectetur velit volutpat nec. In hac habitasse platea dictumst.
                </p>
                <Album/>
                <Footer/>
            </div>
        );
    }
}

export default App;

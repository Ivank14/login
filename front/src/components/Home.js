import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax, withController } from 'react-scroll-parallax';
 
class Image extends Component {
    handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.props.parallaxController.update();
    };
 
    render() {
        return <img src="../assets/galaxy.jpg" onLoad={this.handleLoad} />;
    }
}
export class Home extends Component {
    render() {
        return (
            <ParallaxProvider>
                <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                    <Image />
                    <img src="../assets/galaxy.jpg"/>
                </Parallax>
            </ParallaxProvider>
        )
    }
}
export default Home;
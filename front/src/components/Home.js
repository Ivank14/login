import React, { Component } from 'react';
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import "../css/Home.scss"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  textAlign: "center",
  fontFamily: "sans-serif",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image1 =
  "https://www.halt.org/wp-content/uploads/2017/03/types-of-lawyers.jpg";
const image2 =
  "https://noticias.infocif.es/sites/default/files/styles/n1000x540/public/i/a/califacacion-empresas-noticias-infocif.jpg";
const image3 =
  "https://noticias.infocif.es/sites/default/files/styles/n1000x540/public/i/a/califacacion-empresas-noticias-infocif.jpg";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";


export class Home extends Component {
  render() {
    return (
      <div class="home-module">
      <div class='curve'>
        <section>
        <div class= 'content'>
            <h1>Forma parte de la mejor comunidad en tres pasos</h1>
        </div>
        </section>
      </div>
      <div style={styles}>

      <div class= 'a'> holaaaaa</div> 
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 500 }}>
            <div style={insideStyles} class='profile-image2'>
              <img src="http://www.seitelettronica.it/wp-content/uploads/2015/08/profilo-fb-grigio-1.jpg" />                    
          </div>
          <div  class= 'content1' >
            <h1> 1) Crea tu perfíl</h1>                 
          </div>
          </div>
        </Parallax>
        <div class= 'a'> holaaaaa</div>    

        <Parallax bgImage={image2} strength={-100}
        renderLayer={percentage => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(245, 240, 66, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500
              }}
            />
          </div>
        )}>

          <div  style={{ height: 500 }} class="container">
          <div style={insideStyles}>
            <h1> 2) califica usuarios</h1>                 
          </div>

          </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax
          bgImage={image4}
          strength={200}
          renderLayer={percentage => (
            <div>
              <div
                style={{
                  position: "absolute",
                  background: `rgba(255, 125, 0, ${percentage * 1})`,
                  left: "50%",
                  top: "50%",
                  borderRadius: "50%",
                  transform: "translate(-50%,-50%)",
                  width: percentage * 500,
                  height: percentage * 500
                }}
              />
            </div>
          )}
        >
          <div style={{ height: 500 }}>
            <div style={insideStyles} > <font color='white' size='15' >monitorea tus skills</font> </div>
          </div>
        </Parallax>
        <div style={{ height: 500 }} />
        <h2>{"\u2728"}</h2>
      </div>
      </div>
    )
  }
}
export default Home;
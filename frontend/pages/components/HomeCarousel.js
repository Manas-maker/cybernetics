import React, { Component } from "react";
import loadable from "@loadable/component";
const Carousel = loadable(() => import("react-spring-3d-carousel"))
import Link from 'next/link'
import landBack from '@/public/landing-feet.png'
import Image from "next/image";
import { config } from "react-spring";
import { Reenie_Beanie } from 'next/font/google'

const reenie = Reenie_Beanie({
  weight: '400',
  subsets: ['latin'],
})


const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    );
  };
  
  export default class Example extends Component {
    state = {
      goToSlide: 0,
      offsetRadius: 2,
      showNavigation: false,
      enableSwipe: true,
      config: config.gentle
    };
  
    slides = [
      {
        key: 1,
        content: <div className="syntaxia-carousel"><Image src={landBack} objectFit='cover' className="hoverBoard"/><div className="carousel-inner"><Link href="https://google.com/search?q=cats" className={reenie.className}>ABOUT SYNTAXIA</Link></div></div>
      },
      {
        key: 2,
        content: <div className={"syntaxia-carousel"}><Image src={landBack} objectFit='cover' className="hoverBoard"/><div className="carousel-inner"><Link href="https://google.com/search?q=cats" className={reenie.className}>EVENTS</Link></div></div>
      },
      {
        key: 3,
        content: <div className="syntaxia-carousel"><Image src={landBack} objectFit='cover' className="hoverBoard"/><div className="carousel-inner"><Link href="https://google.com/search?q=cats" className={reenie.className}>RULES & REGULATIONS</Link></div></div>
      },
      {
        key: 4,
        content: <div className="syntaxia-carousel"><Image src={landBack} objectFit='cover' className="hoverBoard"/><div className="carousel-inner"><Link href="https://google.com/search?q=cats" className={reenie.className}>REGISTER</Link></div></div>
      },
      {
        key: 5,
        content: <div className="syntaxia-carousel"><Image src={landBack} objectFit='cover' className="hoverBoard"/><div className="carousel-inner"><Link href="https://google.com/search?q=cats" className={reenie.className}>CONTACT US</Link></div></div>
      }
    ].map((slide, index) => {
      return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });
  
    onChangeInput = (e) => {
      this.setState({
        [e.target.name]: parseInt(e.target.value, 10) || 0
      });
    };
  
    handleTouchStart = (evt) => {
      if (!this.state.enableSwipe) {
        return;
      }
  
      const firstTouch = getTouches(evt)[0];
      this.setState({
        ...this.state,
        xDown: firstTouch.clientX,
        yDown: firstTouch.clientY
      });
    };
  
    handleTouchMove = (evt) => {
      if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
        return;
      }
  
      let xUp = evt.touches[0].clientX;
      let yUp = evt.touches[0].clientY;
  
      let xDiff = this.state.xDown - xUp;
      let yDiff = this.state.yDown - yUp;
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          /* left swipe */
          this.setState({
            goToSlide: this.state.goToSlide + 1,
            xDown: null,
            yDown: null
          });
        } else {
          /* right swipe */
          this.setState({
            goToSlide: this.state.goToSlide - 1,
            xDown: null,
            yDown: null
          });
        }
      }
    };
  
    render() {
      return (
        <div
          style={{ width: "80%", height: "500px", margin: "0 auto" }}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
        >
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
          />
          <div
            style={{
              margin: "0 auto",
              marginTop: "2rem",
              width: "50%",
              display: "flex",
              justifyContent: "space-around"
            }}
          >
           
                     </div>
        </div>
      );
    }
  }
  
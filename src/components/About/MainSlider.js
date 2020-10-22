import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "pure-react-carousel/dist/react-carousel.es.css";
import Slide from "./Slide";

class MainSlider extends Component {
    render() {
        const fullpageApi = this.props.fullpageApi;
        const slides = this.props.slides;

        const imagesSlider = [
            require("../../assets/main/slider/propper-sized/1.jpg"),
            require("../../assets/main/slider/propper-sized/2.jpg"),
            require("../../assets/main/slider/propper-sized/3.jpg"),
            require("../../assets/main/slider/propper-sized/4.jpg"),
            require("../../assets/main/slider/propper-sized/5.jpg"),
            require("../../assets/main/slider/propper-sized/6.jpg"),
            require("../../assets/main/slider/propper-sized/7.jpg"),
            require("../../assets/main/slider/propper-sized/8.jpg"),
            require("../../assets/main/slider/propper-sized/9.jpg"),
            require("../../assets/main/slider/propper-sized/10.jpg"),
            require("../../assets/main/slider/propper-sized/11.jpg"),
            require("../../assets/main/slider/propper-sized/12.jpg"),
            require("../../assets/main/slider/propper-sized/13.jpg"),
            require("../../assets/main/slider/propper-sized/14.jpg"),
        ];

        return (
            <div className="container bg MainSlider fp-auto-height section fp-auto-height-responsive">
                <FontAwesomeIcon
                    onClick={() => {
                        fullpageApi.moveSlideLeft();
                    }}
                    icon={faChevronLeft}
                    className="fpControlArrow left"
                />
                <FontAwesomeIcon
                    onClick={() => {
                        fullpageApi.moveSlideRight();
                    }}
                    icon={faChevronRight}
                    className="fpControlArrow right"
                />
                {imagesSlider.map((slide) => (
                    <Slide
                        // key={slide.title}
                        // description={slide.description}
                        // title={slide.title}
                        img={slide}
                    />
                ))}
            </div>
        );
    }
}

export default MainSlider;

import React, { useRef, useEffect, useState } from "react";
import { withStyles } from "@material-ui/styles";
import { TheatersOutlined } from "@material-ui/icons";
import { subscribeToWindowSizeChange, unSubscribeToWindowSizeChange } from "../../services/responsiveService";
import { strings } from "../../services/stringService";

const CarouselComponentStyles = theme => {
    return {
        root: {
            "& .carousel-wrapper": {
                width: "100%",
                overflow: "hidden",
                "& .carousel": {
                    transition: "transform 250ms ease-in-out",
                    transform: "translateX(0)"
                }
            },
            "& .controls-container": {
                width: "100%",
                overflowX: "auto",
                marginTop: theme.spacing(1.5),
                "& .control-wrapper": {
                    cursor: "pointer",
                    "& .control": {
                        boxShadow: theme.shadows[4],
                        display: "block",
                        transition: "background-color 250ms ease",
                        width: theme.spacing(3.5),
                        height: theme.spacing(0.75),
                        margin: theme.spacing(1),
                        "&.active": {
                            backgroundColor: theme.palette.primary.main
                        }
                    },
                    "&:hover": {
                        "& .control": {
                            backgroundColor: theme.palette.primary.main
                        }
                    }
                }
            }
        }
    }
}

const CarouselComponent = ({ classes, children }) => {
    let [active, setActive] = useState(0),
        carouseWrapperRef = useRef(),
        carouselRef = useRef();

    useEffect(() => {
        buildCarousel();
        subscribeToWindowSizeChange(onWindowSizeChange);
        return () => {
            unSubscribeToWindowSizeChange(onWindowSizeChange);
        }
    }, []);

    function buildCarousel(){
        let carouselWrapper = getCarouselWrapper(),
            carouselItems = getCarouselItems(),
            carousel = getCarousel();
        function resizeCarousel(){
            carousel.style.width = `${carouselWrapper.clientWidth * carouselItems.length}px`;
        }
        function resizeCarouselItems(){
            Array.prototype.forEach.call(carouselItems, element => {
                element.style.width = carouselWrapper.clientWidth;
            });
        }
        setActive(active => {
            resizeCarousel();
            resizeCarouselItems();
            translateWrapper(0);
            hideNonactiveItems(0, carouselItems);
            return 0;
        });
        
    }

    function hideNonactiveItems(activeItem, items){
        Array.prototype.forEach.call(items, (element, i) => {
            if(i !== activeItem) element.setAttribute("aria-hidden", true);
            else element.removeAttribute("aria-hidden");
        });
    }

    function getCarouselWrapper(){
        return carouseWrapperRef.current;
    }

    function getCarouselItems(){
        return getCarousel().children;
    }

    function getCarousel(){
        return carouselRef.current;
    }

    function getChildren(){
        return Array.isArray(children) ? children : [children];
    }

    function goToSlide(slideNumber){
        if(slideNumber === active) return;
        return setActiveItem(slideNumber);
    }

    function setActiveItem(activeItem){
        let carouselWrapper = getCarouselWrapper(),
            carouselItems = getCarouselItems(),
            carousel = getCarousel();
        //translate carousel itme into view
        translateWrapper(activeItem * carouselWrapper.clientWidth);
        //make sure a screen reader doesn't read out the res
        hideNonactiveItems(activeItem, carouselItems);
        //set new active item
        setActive(() => activeItem);
    }

    function onWindowSizeChange(){
        buildCarousel();
    }

    function translateWrapper(distance){
        getCarousel().style.transform = `translateX(-${distance}px)`;
    }

    return (
        <div aria-label={strings.aria.carousel.name} className={`${classes.root}`}>
            <div ref={carouseWrapperRef} className={`carousel-wrapper`}>
                <div ref={carouselRef} className={`carousel flex row align-vertical-start`}>
                    {children}
                </div>
            </div>
            <div aria-label={strings.aria.carousel.controls} className={`controls-container flex row align-vertical-center align-horizontal-center`}>
                {getChildren().map((node, index) => {
                    return (
                        <div aria-hidden={index === active} aria-label={strings.aria.carousel[index < active ? "previous" : "next"]} className={`control-wrapper`} key={`control-${index}`} onClick={() => goToSlide(index)}>
                            <span className={`control background-white ${active === index ? "active" : ""}`}></span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default withStyles(CarouselComponentStyles)(CarouselComponent);
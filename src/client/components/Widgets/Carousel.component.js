import React, { useRef, useEffect, useState } from "react";
import { withStyles } from "@material-ui/styles";
import { TheatersOutlined } from "@material-ui/icons";
import { subscribeToWindowSizeChange, unSubscribeToWindowSizeChange } from "../../services/responsiveService";

const CarouselComponentStyles = theme => {
    return {
        root: {
            "& .carousel-wrapper": {
                width: "100%",
                overflow: "hidden",
                "& .carousel": {
                    transition: "transform 750ms ease-in-out",
                    transform: "translateX(0)"
                }
            },
            "& .controls-container": {
                width: "100%",
                overflowX: "auto",
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
                    },
                    "&:not(:last-child)": {
                        marginRight: theme.spacing(1)
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
        resizeCarousel();
        resizeCarouselItems();
        hideNonactiveItems(active, carouselItems);
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

    function goToSlide(slideNumber){
        if(slideNumber === active) return;
        return setActiveItem(slideNumber);
    }

    function setActiveItem(activeItem){
        let carouselWrapper = getCarouselWrapper(),
            carouselItems = getCarouselItems(),
            carousel = getCarousel();
            //translate carousel itme into view
        carousel.style.transform = `translateX(-${activeItem * carouselWrapper.clientWidth}px)`;
        //make sure a screen reader doesn't read out the res
        hideNonactiveItems(activeItem, carouselItems);
        //set new active item
        setActive(() => activeItem);
    }

    function onWindowSizeChange(){
        buildCarousel();
    }

    return (
        <div className={`${classes.root}`}>
            <div ref={carouseWrapperRef} className={`carousel-wrapper`}>
                <div ref={carouselRef} className={`carousel flex row align-vertical-start`}>
                    {children}
                </div>
            </div>
            <div className={`controls-container flex row align-vertical-center align-horizontal-center`}>
                {children.map((node, index) => {
                    return (
                        <div className={`control-wrapper`} key={`control-${index}`} onClick={() => goToSlide(index)}>
                            <span className={`control background-white ${active === index ? "active" : ""}`}></span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default withStyles(CarouselComponentStyles)(CarouselComponent);
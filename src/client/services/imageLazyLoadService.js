export const lazyLoadImage = (imagesSrcArray, imageRef) => {
    if(!imagesSrcArray || !imagesSrcArray.length) throw new Error("didnt receive any images");
    if(!imageRef || !imageRef.src) throw new Error("didnt receive vaid image element");

    //need to hold state of highest quality image loaded
    let highestQualityLoaded = 0;
    //array will be sorted from lowest to highest quality image src's
    //we will casually load from lowest to highest quality
    imagesSrcArray.forEach((imageSrc, index) => {
        let img = new Image();

        img.src = imageSrc;

        img.onload = () => {
            if(index >= highestQualityLoaded){
                highestQualityLoaded = index;
                //set image to new highest quality
                imageRef.src = img.src;
            }
        };
    });
}
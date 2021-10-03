export {}
enum PhotoOrientation{
    landscape,
    portrait,
    square
}

interface picture{
    title: string;
    date:  string;
    orientation: PhotoOrientation;
}

function showPicture(picture: picture){
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
}
let myPic = {
    title: "Black magic woman",
    date: "30-09-21",
    orientation: PhotoOrientation.portrait
}
showPicture(myPic);
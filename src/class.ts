export {}
enum PhotoOrientation{
    landscape,
    portrait,
    square,
    panorama
}
class  Picture {
    public id: number;
    public title: string;
    public orientation: PhotoOrientation;

    public constructor(id: number, title:string, orientation:PhotoOrientation){
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    //comportamiento
    public toString(){
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;   
    }
}
class Album{
    public id: number;
    public title: string;
    public pictures: Picture[];
    public constructor(id: number, title: string){
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    public addPicture(picture:Picture){
        this.pictures.push(picture);
    }
}
const album:Album = new Album(1,'Personal pictures');
const picture: Picture = new Picture(1,'Johnsession',PhotoOrientation.square);
album.addPicture(picture);
console.log('album',album);

//accediendo a miembros publicos
picture.id = 100;
picture.title = 'Great picture';
album.title = "Great album";
console.log('album',album);
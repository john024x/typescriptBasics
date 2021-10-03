export {}
enum PhotoOrientation{
    landscape,
    portrait,
    square,
    panorama
}
//superclase
class Item{
    protected _id: number;
    protected _title: string;

    constructor(id: number, title:string){
        this._id = id;
        this._title = title;
    }
    get id(){
        return this._id;
    }
    set id(id: number){
        this._id = id;
    }
    get title(){
        return this._title;
    }
    set title(title: string){
        this._title = title;
    }
}
//get y set
class  Picture extends Item{
    private _orientation: PhotoOrientation;

    public constructor(id: number, title:string, orientation:PhotoOrientation){
        super(id,title);
        this._orientation = orientation;
    }

    get orientation(){
        return this._orientation;
    }
    set orientation(O: PhotoOrientation){
        this._orientation = O;
    }
    //comportamiento
    public toString(){
        return `[id: ${this._id}, title: ${this._title}, orientation: ${this._orientation}]`;   
    }
}
class Album extends Item{
    private pictures: Picture[];
    public constructor(id: number, title: string){
        super(id,title);//constructor de la super clase
        this.pictures = [];
    }
    get id(){
        return this._id;
    }
    set id(id: number){
        this._id = id;
    }
    get title(){
        return this._title;
    }
    set title(title: string){
        this._title = title;
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
console.log('picutre_id',picture.id);
picture.id = 100; //cambia el valor mediante set
picture.title = 'New picture title';
album.title = 'New album title';
console.log('album',album);
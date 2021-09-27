//Number
//Manera explicita
let phone: number;
phone = 4555;
//Boolean
let isPro: boolean;
isPro = true;
//Strings
let user: string;
user = "Hello";
//Template String
//Uso de back-tick ``
let userInfo: string;
userInfo = `
    User Info:
        Username: ${user}
        FirstName: ${user + 'Fuentes'}
        Phone: ${phone}
        isPro: ${isPro}
`;
//Any
let idUser:any;
idUser = 1;//Number
idUser = '1';
//Void
function showInfo(user:any): any{
    console.log('User info',user.id,user.username,user.FirstName);
    // return 1;
}



//Inferido
let phoneNumber = 455;
//Number
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
//Boolean
let isUserPro = false;
//String 
let userName: String;
let OtherId;
OtherId = 1;
OtherId = '1';
//Any
let surprise: any = 'Hi typescript'; //No se deberia usar
const res = surprise.substring(6);
//void
function showFormatInfo(user:any){
    console.log(`
    User Info:
        Username: ${user.id}
        FirstName: ${user.username}
        Phone: ${user.phoneNumber}
        isPro: ${user.isUserPro}
    `);
}
//Tipo: Never
function handleError(code:number, message:string){

        //Process your code here
        //Generate a message
        throw new Error(`${message}. Code: ${code}`);

}
handleError(404,'Not found');
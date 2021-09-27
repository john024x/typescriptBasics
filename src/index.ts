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
console.log('userInfo',userInfo);
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

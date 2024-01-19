//ДЗ 1 Без Аа

//Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містити літери А (великої або малої)

^(.{6,})[^Аа]$
//або
var re = /(.{6,})[^Аа]/;


//ДЗ 2 Параноя

//За допомогою регулярного виразу створіть масив з адресами, гідними довіри (gmail.com та yahoo.com). Постарайтеся також зробити просту валідацію до @
//- одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
 ];
 
 
 var emailRegex = /[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;
 
 var trustedEmails = arr.filter(function(obj) {
    return emailRegex.test(obj.email);
 });
 
 console.log('email(s), які заслуговують довіри', trustedEmails);
function PrintName(){
    console.log("waleed")

} 

function PrintAge(birthyear){
    
    const age = 2024 - birthyear

    console.log(age)
}

PrintAge(2001);
PrintName();

function printageandname(name, birthyear){

    const age = 2024 - birthyear
    console.log(`Hello ${name} you are ${age} years old`)

}
printageandname("waleed", 2001);


function printHello(name , language){

    if (language === "en"){
        console.log(`Hello ${name}`)
    }

    else if (language === "es")
    console.log(`Hola ${name}`)

    else if (language === "fr")
{    console.log(`Bonjour ${name}`) }

    else if (language === "tr")
{    console.log(`Merhaba ${name}`) }
}

printHello("waleed","en")
printHello("waleed","es")
printHello("waleed","tr")


function printMax(x,y){
    console.log(Math.max(x,y))
}

printMax(5,9)
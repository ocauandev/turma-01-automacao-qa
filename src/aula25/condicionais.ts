
const statusCode: number = 500;
if(statusCode === 200){
    console.log("Ok: recurso recebido");

} else if (statusCode === 201)
{
    console.log("Created: recurso criado");

}
else{

    console.log(`Status inesperado: ${statusCode}`);




}

// Elvis Operator ?:
const resultado = statusCode < 400 ? "Passou" : "falhou";
console.log(resultado);

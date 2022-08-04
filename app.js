/* // express é um framework 
const express = require ("express");

let app = express(); //  essa função executa outras funções do express, como uma bliblioteca 

//criando um servidor
app.listen(3000, ()=>{ ///esse metodo chama o app =express para imprimir na porta 3000
    console.log("servidor rodando")
})
 */

const express = require ("express");

let app = express();

app.get('/', (req,res)=> res.send("ola mundo"));

//criando um servidor
app.listen(3000, ()=>console.log("Servidor rodando na porta 3000"))



/* // express é um framework 
const express = require ("express");

let app = express(); //  essa função executa outras funções do express, como uma bliblioteca 

//criando um servidor
app.listen(3000, ()=>{ ///esse metodo chama o app =express para imprimir na porta 3000
    console.log("servidor rodando")
})
 */

/* const express = require ("express");

let app = express();

app.get('/', (req,res)=> res.send("ola mundo"));



//criando um servidor
app.listen(3000, ()=>console.log("Servidor rodando na porta 3000"))

 */

const express = require ("express");

let app = express()

let cachorros = [
    {
        id: 1,
        nome :"astro",
        raca : "srd",
        porte: "pequeno"

    },
    {
        id: 2,
        nome: "astro ",
        raca: "border collie",
        porte: "medio"
    }
    {
        id: 3,
        nome: 'Pandora',
        raca: 'Cavalier',
        porte: 'Pequeno'
    }
]

app.use(express.json())
app.get("/cachorros", (req, res) => {
    res.status(200).send(cachorros)
})

app.post('/cachorros', (req, res) => {
    cachorros.push(req.body)
    res.status(201).send(cachorros)
})

app.put('/cachorros/:id', (req, res) => {
    let cachorro = cachorros.find(cach => cach.id == req.params.id)

    if (!cachorro){
        return res.status(400).json({ error: 'Usuário não encontrado.' });
    }

    cachorro.nome = req.body.nome
    cachorro.raca = req.body.raca
    cachorro.porte = req.body.porte
    res.send(cachorros)
})

app.delete('/cachorros/:id', (req, res) => {
    let cachorro = cachorros.find(cach => cach.id == req.params.id)
    cachorros.splice(cachorros.indexOf(cachorro), 1)
    res.status(204).send(cachorros)
})

app.listen (3000, () => {
    console.log("rodando na posta 3000")
})


import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const data = [
    {id: "0", taskName: "Trabalhos Faculdade", colorIcon: "#4b0082", icon: "Student", taskBlock: [
        {
            blockID: "0block0",
            weekDay: "Sábado - 24/09/2022",
            tarefas: [
                {id: "task0", nome: "Trabalho de Sociedade e tecnologia", complete: false, description: "Ler o livro e destacar ideias da autora"}, {id: "task1", nome: "Trabalho de inglês", complete: false, description: "Tema: \nPassado simples na forma afirmativa + Expressões de tempo"},
                {id: "task2", nome: "Trabalho de Engenharia do Software 2", complete: false, description: "Terminar o caso de uso"}, {id: "task3", nome: "Trabalho de Estrutura de dados", complete: false, description: "Fazer os relatórios sobre os tempos de execução obtidos"}
            ]
        }
    ]},
    {id: "1", taskName: "Atividades diárias", colorIcon: "#1e90ff", icon: "Sun", taskBlock: [
        {
            blockID: "1block0",
            weekDay: "Domingo - 25/09/2022",
            tarefas: [

                {id: "task0", nome: "Limpar a casa", complete: true, description: "Varrer a casa e arrumar os quartos"}, {id: "task1", nome: "Lavar a louça", complete: true, description: "Lavar a louça do almoço"},
            ]
        },
        {
            blockID: "1block1",
            weekDay: "Segunda - 26/09/2022",
            tarefas: [

                {id: "task0", nome: "Aniversário", complete: false, description: "Comprar um bolo de aniversário"},
            ]
        }
    ]},
]

app.get("/groups", (request, response) => {
    return response.json(data);
})

app.get("/groups/:id", (request, response) => {
    var id = request.params.id;

    return response.json(data[id]);
})

app.post("/groups", (req, res) => {
    data.push(
        {id: data.length, taskName: req.body.group_name, colorIcon: req.body.color_icon, icon: req.body.icon_selected, taskBlock: []}
    )

    res.redirect("http://localhost:5173");
})

app.listen(3333, () => console.log("Server running"));
import express, { response } from "express";
import cors from "cors";
import { sample_food, sample_tags, sample_users } from "./data";

const app = express();
app.use(express.json);

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/foods",(req, res) => {
    res.send(sample_food);
})

app.get("/api/foods/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const foods = sample_food.filter(food => food.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
    res.send(foods);
})

app.get("/api/foods/tags", (req, res) => {
    res.send(sample_tags);
})

app.get("/api/foods/tags/:tagName",(req, res) => {
    const tagName = req.params.tagName;
    const foods = sample_food.filter(food => food.tags.includes(tagName));
    res.send(foods);
})

app.get("/api/foods/:foodId",(req, res) => {
    const foodId = req.params.foodId;
    const food = sample_food.find(food => food.id === foodId);
    res.send(food);
})

app.post("/api/users/login",(req,res) => {
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);

    if(user){
        res.send();
    }

})

// const generateTokenResponde = (user:any){
//     Tentar instalar o JTW depois
// }

const port = 5000;

app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})
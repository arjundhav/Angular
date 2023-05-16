import express from "express";
import cors from "cors";
import { Sample_Food, sample_tags } from './data';

const app = express();
const bport=5000;

app.use(cors({
    credentials:true,
    origin: [`http://localhost:4200/`],
}));

app.get('/api/foods', (req, res) => {
    res.send(Sample_Food);
});

app.get('/api/foods/search/:searchTerm', (req, res) => {
    const searchTerm = req.params.searchTerm;
    const foods = Sample_Food.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(foods);
});

app.get('/api/foods/search/:tag', (req, res) => {
    const tag = req.params.tag;
    const foods = Sample_Food.filter(food => food.tags.includes(tag));
    res.send(foods);
});

app.get('/api/foods/:id', (req, res) => {
    const id = req.params.id;
    const food = Sample_Food.find(food => food.id === id);
    res.send(food);
});



app.listen(bport, () => console.log(`Backend is running on http://localhost:${bport}`));

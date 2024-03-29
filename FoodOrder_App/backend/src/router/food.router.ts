import { Router } from "express";
import { Sample_Food, sample_tags, sample_users } from "../data";

const router=Router()

router.get("/", (req, res) => {
    res.send(Sample_Food)
});

router.get("/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const foods = Sample_Food.filter(food => food.name.toLowerCase()
        .includes(searchTerm.toLowerCase()));
    res.send(foods)
});

router.get("/tags", (req, res) => {
    res.send(sample_tags)
    
});

router.get("/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const foods = Sample_Food.filter(food => food.tags?.includes(tagName));
    res.send(foods)
});

router.get("/:foodId", (req, res) => {
    const foodId = req.params.foodId;
    const food = Sample_Food.find(food => food.id == foodId);
    res.send(food)
});
export default router
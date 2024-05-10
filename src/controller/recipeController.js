const Recipe = require("../model/recipe");

class RecipeController
{
    static async create(req, res)
    {
        const json = req.body
        const {title, description, ingredients, prepare, user} = json

        if(!title)
            return res.status(400).json({ message: "O título é obrigatório." });
        if(!description)
            return res.status(400).json({ message: "A descrição é obrigatória." });
        if(!ingredients)
            return res.status(400).json({ message: "Os ingredientes são obrigatórios." });
        if(!prepare)
            return res.status(400).json({ message: "O modo de preparo é obrigatório." });
        if(!user)
            return res.status(400).json({ message: "Algo de muito errado aconteceu." });

        const recipe = new Recipe({
            title: title,
            description: description,
            ingredients: ingredients,
            prepare: prepare,
            user: user
        })

        try {
            await Recipe.create(recipe);
            res.status(201).send({ message: "Receita registrada com sucesso" });
        }
        catch (error) {
            return res.status(500).send({ message: "Error : ", data: error.message })
        }
    }
}
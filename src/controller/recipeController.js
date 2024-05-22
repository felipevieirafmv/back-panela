const Recipe = require("../model/recipe");

class RecipeController
{
    static async create(req, res)
    {
        const json = req.body
        const { title, description, ingredients, prepare, user } = json

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
    
    static async getByUser(req, res)
    {
        const { user } = req.query

        try
        {
            const recipes = await Recipe.find({ user: user })
            res.status(201).send(recipes);
        }
        catch(error)
        {
            return res.status(500).send({ message: "Error : ", data: error.message })
        }
    }

    static async getById(req, res)
    {
        const { id } = req.query

        try
        {
            const recipe = await Recipe.findById(id)
            res.status(201).send(recipe);
        }
        catch(error)
        {
            return res.status(500).send({ message: "Error : ", data: error.message })
        }
    }

    static async updateById(req, res)
    {
        const { _id, title, description, ingredients, prepare } = req.body

        const recipe = await Recipe.findById(_id)

        if(!title || title == "")
            title = recipe.title
        if(!description || description == "")
            description = recipe.description
        if(!ingredients)
            ingredients = recipe.ingredients
        if(!prepare)
            prepare = recipe.prepare

        try
        {
            const output = await recipe.update({
                title: title,
                description: description,
                ingredients: ingredients,
                prepare: prepare
            })
            console.log(output)
            res.status(201).send({ message: "Receita atualizada com sucesso" });
        }
        catch(error)
        {
            return res.status(500).send({ message: "Error : ", data: error.message })
        }
    }

    static async deleteById(req, res)
    {
        const { _id } = req.body

        try
        {
            await Recipe.deleteOne({ "_id": _id })
            res.status(201).send({ message: "Receita excluida com sucesso" });
        }
        catch(error)
        {
            console.log(error)
            return res.status(500).send({ message: "Error : ", data: error.message })
        }
    }
}

module.exports = RecipeController;

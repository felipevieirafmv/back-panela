const User = require('../model/user');

class UserController
{
    static async register(req, res)
    {
        const json = req.body;
        const {name, email, password, confirmPassword} = json;

        if(!name)
            return res.status(400).json({ message: "O nome é obrigatório." });
        if(!email)
            return res.status(400).json({ message: "O e-mail é obrigatório." });
        if(!password)
            return res.status(400).json({ message: "A senha é obrigatória." });
        if (password != confirmPassword)
            return res.status(400).json({ message: "As senhas não conferem." });

        const userExists = await User.findOne({ email: email });
        if(userExists)
            return res.status(422).json({ message: "E-mail já cadastrado" });

        if(name.length < 3)
            return res.status(400).json({ message: "Nome pequeno demais." });
        if(email.length < 6)
            return res.status(400).json({ message: "E-mail pequeno demais." });
        if(password.length < 6)
            return res.status(400).json({ message: "Senha pequena demais." });

        const user = new User({
            name: name,
            email: email,
            password: password,
        })

        try {
            await User.create(user);
            res.status(201).send({ message: "Usuário cadastrado com sucesso" });
        }
        catch (error) {
            return res.status(500).send({ message: "Error : ", data: error.message })
        }
    }

    static async login(req, res)
    {
        const json = req.body;
        const { email, password } = json;

        if (!email)
            return res.status(422).json({ message: "O e-mail é obrigatório." });
        if (!password)
            return res.status(422).json({ message: "A senha é obrigatória." });

        const user = await User.findOne({ email });
        if(user.password != password)
            return res.status(422).send({ message: "Email ou senha não conferem." });

        return res.status(200).send({ userId: user._id })
    }
}

module.exports = UserController;

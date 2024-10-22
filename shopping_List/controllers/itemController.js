import Items from "../models/items.js";

const createItem = async (req, res) =>{
    try {
        const item = await Items.create(req.body)
        res.status(201).json(item)
    } catch (error) {
        res.status(500).json({error: "An error occured while creating the Item"})
    }
}

export default createItem;
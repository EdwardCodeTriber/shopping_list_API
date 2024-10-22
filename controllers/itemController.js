import items from "../models/items";

const createItem = async (req, res) =>{
    try {
        const item = await items.create(req.body)
        res.status(201).json(item)
    } catch (error) {
        res.status(500).json({error: "An error occured while creating the Item"})
    }
}

export default createItem;
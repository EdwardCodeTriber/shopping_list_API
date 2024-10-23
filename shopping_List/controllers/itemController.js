import Items from "../models/items.js";

const createItem = async (req, res) =>{
    try {
        const item = await Items.create(req.body)
        res.status(201).json(item)
    } catch (error) {
        res.status(500).json({error: "An error occured while creating the Item"})
    }
}

const getItems = async (req, res) =>{
    try {
        const {page = 1, limit = 5} = req.query;
        const skip = (page - 1) * limit;
        const items = await Items.find().skip(skip).limit(limit)

        const totalItems = await Items.countDocuments()

        res.status(200).json({items, totalItems, page, limit})

    } catch (error) {
        console.error(error)
        res.status(500).json({error: "An error has occured"})
    }
}

const getItem = async (req, res) => {
    try {
        const itemId = await req.params.id
        const item = await Items.findById(itemId)
        res.status(200).json(item);
    } catch (error) {
       if(error.kind === "ObjectId"){
        res.status(400).json({error: "Invalid Item ID"})
       } else{
        res.status(500).json({error: "An error occured"})
       }
    }
}

export default {
    createItem,
    getItems,
    getItem
};
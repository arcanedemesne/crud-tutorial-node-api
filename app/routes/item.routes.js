module.exports = app => {
    const items = require("../controllers/item.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Item
    router.post("/", items.create);
  
    // Retrieve all Items
    router.get("/", items.findAll);
  
    // Retrieve all checked Items
    router.get("/isChecked", items.findAllChecked);
  
    // Retrieve a single Item with id
    router.get("/:id", items.findOne);
  
    // Update a Item with id
    router.put("/:id", items.update);
  
    // Delete a Items with id
    router.delete("/:id", items.delete);
  
    // Create a new Item
    router.delete("/", items.deleteAll);
  
    app.use('/api/items', router);
};

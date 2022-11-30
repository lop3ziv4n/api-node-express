const express = require("express");
const controllers = require("../controllers/book.controller.js");

const routes = (app) => {

    const router = express.Router();

    /**
     * @openapi
     * /api/books:
     *   get:
     *     description: All books
     *     responses:
     *       200:
     *         description: Returns all the books
     */
    router.get("/", controllers.getAll);

    /**
     * @openapi
     * /api/books/{id}:
     *   get:
     *     parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        type: string
     *        description: The book Id.
     *     description: Get a book by id
     *     responses:
     *       200:
     *         description: Returns the requested books
     */
    router.get("/:id", controllers.getById);

    /**
     * @openapi
     * /api/books:
     *   post:
     *     parameters:
     *      - in: body
     *        name: book
     *        description: New book
     *        schema:
     *          type: object
     *          properties:
     *            title:
     *              type: string
     *            author:
     *              type: string
     *            published:
     *              type: boolean
     *     responses:
     *       201:
     *         description: Created
     */
    router.post("/", controllers.create);

    /**
     * @openapi
     * /api/books/{id}:
     *   put:
     *     parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        type: string
     *        description: The book ID.
     *      - in: body
     *        name: book
     *        description: Update book
     *        schema:
     *          type: object
     *          properties:
     *            title:
     *              type: string
     *            author:
     *              type: string
     *            published:
     *              type: boolean
     *     responses:
     *       201:
     *         description: Created
     */
    router.put("/:id", controllers.update);

    /**
     * @openapi
     * /api/books/{id}:
     *   delete:
     *     parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        type: string
     *        description: The book ID.
     *     description: Delete a book by id
     *     responses:
     *       200:
     *         description: Returns the requested book
     */
    router.delete("/:id", controllers.remove);

    app.use('/api/books', router);
}

module.exports = routes;
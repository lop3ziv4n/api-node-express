const Book = (sequelize, Sequelize, DataTypes) => {
    return sequelize.define("books", {
        title: {type: DataTypes.STRING},
        author: {type: DataTypes.STRING},
        published: {type: DataTypes.BOOLEAN}
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
}

module.exports = Book;
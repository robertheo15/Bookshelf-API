const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require("./handler");

const routes = [
  {
    //store
    method: "POST",
    path: "/books",
    handler: addBookHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  {
    //get
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    //get specific
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookByIdHandler,
  },
  {
    //edit
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBookByIdHandler,
  },
  {
    //delete
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;

const fs = require('fs');
const books = require('./books.json');


/**
 *
 * @returns {[{author: string, name: string, id: number}, {author: string, name: string, id: number}, {author: string, name: string, id: number}, {author: string, name: string, id: number}]}
 */
function getAll() {
  return books
}
/**
 *
 * @param id
 * @returns {{author: string, name: string, id: number} | {author: string, name: string, id: number} | {author: string, name: string, id: number} | {author: string, name: string, id: number}}
 */
function getOne(id) {
  return books.find(book => book.id === parseInt(id));
}

/**
 *
 * @param id
 * @returns {{author: string, name: string, id: number} | {author: string, name: string, id: number} | {author: string, name: string, id: number} | {author: string, name: string, id: number}}
 */
function createProduct(id) {
  return books.find(book => book.id === parseInt(id));
}
/**
 *
 * @param id
 * @returns {{author: string, name: string, id: number} | {author: string, name: string, id: number} | {author: string, name: string, id: number} | {author: string, name: string, id: number}}
 */
function updateProduct(ctx) {
  return ctx.body
}
/**
 *
 * @param id
 * @returns {{author: string, name: string, id: number} | {author: string, name: string, id: number} | {author: string, name: string, id: number} | {author: string, name: string, id: number}}
 */
function deleteProduct(id) {
  const updatedata = books.filter(book => book.id !== parseInt(id));
  const addData = JSON.stringify(updatedata)
  fs.writeFile("F:/ts-dev/koajs/src/database/books.json", addData, function (err) {
    if (err) {
      return console.log(err);
    }
  })
  return updatedata
}

/**
 *
 * @param data
 */
function add(data) {
  const updatedBooks = [data, ...books];
  return fs.writeFileSync('./src/database/books.json', JSON.stringify({
    data: updatedBooks
  }));

}
/**
 *
 * @param data
 */
function homePage(data) {
  return "HELLO"
}

module.exports = {
  getOne,
  getAll,
  add,
  createProduct,
  updateProduct,
  deleteProduct,
  homePage
};

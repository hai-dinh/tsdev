fs = require("fs")
faker = require('faker');

let data = []
for (var i = 1; i <= 100; i++) {
    const datafaker = {
        id: i,
        name: faker.name.findName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        product: faker.commerce.productName(),
        color: faker.commerce.color(),
        date: faker.datatype.datetime(),
        image: faker.image.image()
    }
    data.push(datafaker);

}
const addData = JSON.stringify(data)
fs.writeFile("F:/ts-dev/koajs/src/database/books.json", addData, function (err) {
    if (err) {
        return console.log(err);
    }
})

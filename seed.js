const db = require("./server/db/database");
const Cats = require("./server/db/cats");

const cats = [
  {
    name: "Moxie",
    imageUrl: "public/cat 1.jpg",
  },
  {
    name: "Mer",
    imageUrl: "public/cat 2.jpg",
  },
  {
    name: "Tom",
    imageUrl: "public/cat 3.jpg",
  },
  {
    name: "Fish",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      cats.map((cat) => {
        return Cats.create(cat);
      })
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seeding success!");
      db.close();
    })
    .catch((err) => {
      console.error("Oh noes! Something went wrong!");
      console.error(err);
      db.close();
    });
}

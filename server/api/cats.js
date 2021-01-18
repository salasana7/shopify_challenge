const router = require("express").Router();
const Cat = require("../db/cats");

router.get("/cats", async (req, res, next) => {
  try {
    const students = await Cat.findAll();
    res.json(students);
  } catch (error) {
    next(error);
  }
});

router.post("/cats", async (req, res, next) => {
  try {
    if (req.body.imageUrl) {
      await Cat.findOrCreate({
        where: {
          name: req.body.name,
          imageUrl: req.body.imageUrl,
        },
      });
    } else {
      await Cat.findOrCreate({
        where: {
          name: req.body.name,
        },
      });
    }
    res.json("success");
  } catch (error) {
    next(error);
  }
});

router.delete("/:catId", async (req, res, next) => {
  try {
    await Cat.destroy({
      where: { id: req.params.catId },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;

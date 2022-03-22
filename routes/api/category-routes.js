const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryFind = await Category.findAll({
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    });
    
    res.status(200).json(categoryFind);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const findOneCategory = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    });

    res.status(200).json(findOneCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const createNewCategory = await Category.create({
      ...req.body
    });

    res.status(200).json(createNewCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(
      {
        ...req.body
      },
      {
        where: {
          id: req.params.id
        }
      }  
    );

    res.status(200).json(updateCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

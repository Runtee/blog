const { home, blogRender, search } = require('../controllers/blogController');
const { searchValidationRules, validateSearch } = require('../validators/validator');

const router = require('express').Router();

router.get('/',home);
router.post('/search',[searchValidationRules(),
    validateSearch,],search);
router.get('/:title',blogRender)

module.exports= router

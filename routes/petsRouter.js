const express = require("express");
const { postPet } = require("../controllers/post");
const { getPets } = require("../controllers/get");
const { deletePet } = require("../controllers/delate");
const router = express.Router();


router.get('/',getPets)
router.post('/post',postPet)
router.delete('/del/:id', deletePet);

module.exports = router;
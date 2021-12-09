import express from "express";
import {
    getAllProducts,
    createProduct,
    getProductByid,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js";
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductByid);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
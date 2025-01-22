import express from 'express'; 
import indexController from './controllers/indexController.js';
import productController from './controllers/productController.js';
import shopController from './controllers/shopController.js';
import adminController from './controllers/adminController.js';




const router = express.Router();

router.get('/', indexController.showHomePage);
router.get('/catalogue', productController.showCatalogPage);
router.get('/catalogue/produit/:ref', productController.showProductPage);
router.get('/boutique', shopController.showShopPage);

router.get('/catalogue/category', productController.showSearched);

router.get('/admin', adminController.showAdminPage);
router.post("/admin", adminController.addProduct);

router.get('/login', adminController.showLoginPage);
router.post('/login', adminController.userLogin);

export default router;
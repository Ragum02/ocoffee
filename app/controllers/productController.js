import dataMapper from "../datamapper.js";

const productController = {
    showCatalogPage: async (req, res) => {
        try {
            const allCoffee = await dataMapper.getAllCoffee();
            const firstThird = allCoffee.slice(0, 3);
            const theOther = allCoffee.slice(3)
            const caract = await dataMapper.getAllType();
            res.render('catalogue', { caract , theOther , firstThird});
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },
    showProductPage: async (req, res) => {
        try {
            const selectedProduct = await dataMapper.getSelectedProduct(req.params.ref);
            res.render('product', { selectedProduct })
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },
    showSearched: async (req, res) => {
        try {
            if (req.query.category === "Tous") {
                res.redirect('/catalogue');
            } else {
                const selected = req.query.category;
                const searchedCoffee = await dataMapper.getSearchedType(selected);
                const searchedId = searchedCoffee.map((coffee) => coffee.id);
                const allCoffee = await dataMapper.getAllCoffee();
                const theOther = allCoffee.filter((coffee) => !searchedId.includes(coffee.id));
                const caract = await dataMapper.getAllType();
                res.render('catalogue', { caract , theOther , firstThird: searchedCoffee});
            }
            
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    }
}


export default productController;
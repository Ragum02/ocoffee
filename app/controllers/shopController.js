import dataMapper from "../datamapper.js";

const shopController = {
    showShopPage: async (req, res) => {
        try {
            res.render('boutique');
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    }
}


export default shopController;
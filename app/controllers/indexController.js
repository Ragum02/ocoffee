import dataMapper from "../datamapper.js";

const indexController = {
    showHomePage: async (req,res) => {
        try {
            const lastAdd = await dataMapper.getThreeLastAdd();
            res.render('index', { lastAdd });
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    }
}


export default indexController;
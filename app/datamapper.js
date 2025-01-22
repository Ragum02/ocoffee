import client from './client.js';


const dataMapper = {
    getAllCoffee: async () => {
        const sql = `SELECT * FROM coffee`;
        const res = await client.query(sql);
        return res.rows
    },
    getAllType: async () => {
        const sql = `SELECT DISTINCT main_caract FROM coffee`;
        const res = await client.query(sql);
        return res.rows
    },
    getSearchedType: async (input) => {
        const sql = {
            text: `SELECT * FROM coffee WHERE main_caract = $1`,
            values: [input]
        };
        const res = await client.query(sql);
        return res.rows;
    },
    getThreeLastAdd: async () => {
        const sql = `SELECT * FROM coffee  ORDER BY coffee.id DESC LIMIT 3`
        const res = await client.query(sql);
        return res.rows;
    },
    getSelectedProduct: async (ref) => {
        const sql = {
            text: `SELECT * FROM coffee WHERE coffee.reference = $1`,
            values: [ref]
        }
        const res = await client.query(sql);
        return res.rows[0];
    },
    addProduct: async (productInfos) => {
        const sql = {
            text: `INSERT INTO coffee ("name", "description","reference","origine","price_kg","main_caract","disponibility") VALUES ($1,$2,$3,$4,$5,$6,$7)`,
            values: [productInfos.name,productInfos.description,productInfos.reference,productInfos.origine,productInfos.price_kg,productInfos.main_caract,productInfos.disponibility]
        }
        const res = await client.query(sql);
        console.log(res.rows);
    }
}


export default dataMapper;
import dataMapper from "../datamapper.js";
import multer from "multer";
import path from "path";

//Aucune idée si c'est dans la Controller le mieu ou dans le index.js pour la config de Multer !
const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
      cb(null, 'public/assets/coffees'); //pas bien compris la doc, mais null ma l'air d'être pour dire qu'il n'y aucune erreur a l'acces du dossier?
    },
    filename: async (req, file, cb) => {
      const reference = req.body.reference; 
      const extension = path.extname(file.originalname); //Eu une surprise avec juste filename... (lors d'un image.profile.png par exemple...)
      const newFilename = `${reference}${extension}`; //Création de nouveau nom avec la reference pour rester dans le même systeme de gestion d'image
      cb(null, newFilename); //Si aucune erreur crée le nouveau fichier donc.
    }
  });
  
const upload = multer({ storage: storage }); //config de multer pour lui dire a quoi il sert 
  

const adminController = {
    showLoginPage: async (req, res) => {
        res.render('login');
    },
    showAdminPage: async (req, res) => {
        const caract = await dataMapper.getAllType();
        res.render('admin', { caract })
    },

    userLogin: (req, res) => {

        const userLogin = req.body.login;
    

        req.session.login = userLogin;
    
            if (req.session.login !== "Admin") {
                res.redirect('/')
        } else{
              return res.redirect('/admin')
            }
      },
 
    addProduct: async (req, res) => {
       
        try {
          if (req.session.login !== "Admin") {
            return res.status(403).send(`Biiiip Incorrect !`);
          }

            upload.single('image')(req, res, async (err) => {           //appel de l'upload de fichier et verifie si erreur
                if (err) {
                    return res.status(500).send('Erreur lors de l\'upload de l\'image');
                }

            
            
          const count = await dataMapper.addProduct(req.body);
          console.log(count);
                res.redirect(`/catalogue/produit/${req.body.reference}`); 
            });
        } catch (error) {
          res.status(500).send(error);
        }
      },
}

export default adminController;
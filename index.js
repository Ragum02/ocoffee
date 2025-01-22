import 'dotenv/config';
import express from 'express';

import router from './app/router.js'; 
import session from 'express-session';

import multer from 'multer';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');


app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));


//petit middleware pour le aria label.
app.use((req, res, next) => {
    res.locals.currentPage = req.path.split('/')[1] || '/'; //verification si le lien comporte un sous chemin via le split
    next();
})



app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: true,
    sameSite: 'lax',
    maxAge: (1000 * 60) * (60 * 4)
  },
})
);

app.use(router);

app.use((req, res) => {
  res.status(404).render("404");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

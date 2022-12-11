import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';



const port = 3000;
const app = express();
const _dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(_dirname+'\\static'));

app.engine('.hbs',engine({extname:'.hbs'}));
app.set('view engine','.hbs');
app.set('views',_dirname+'\\resources\\views');
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/new',(req,res)=> {
  res.render('partials/footer');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})











const express = require('express')
const app = express();
const PORT = 5000;
const booksRouter =require('./routers/booksRouter.js')
app.get('/',(req,res) => {
res.send(`server is running at ${PORT}`)
});
app.use('/books', booksRouter)
app.listen(PORT,()=>{
console.log(`server is running at ${PORT}`);
})
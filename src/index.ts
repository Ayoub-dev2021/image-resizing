import express from 'express'
import resizeRoute from './routes/route'
import { vaildateParamters, vaildateRoute } from './middleware/validations'
import testGetImage from './modules/testRoute'

const PORT = 4444
// create an instance server
const app = express()

// add routing for / path
app.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'Hello World 🌍'
  })
})

app.get('/newtest', (req: express.Request, res: express.Response) => {
  testGetImage().then((x)=>{
    console.log(x)
    res.writeHead(200, { 'Content-Type': 'image/jpeg' })
    res.end(x)
  })
})

// app.use('/', vaildateParamters, resizeRoute)

// Handle 404 Error
// app.use(vaildateRoute)

// start express server
app.listen(PORT, () => {
  console.log(`Servr is starting at prot:${PORT}`)
})


export default app

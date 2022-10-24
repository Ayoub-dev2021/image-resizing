import express from 'express'

//importing function from resizeImage module
import { resizeImage, getImage, checkIfImageExist } from '../modules/resizeImage'

const route = express.Router()

route.get('/resize', (req, res, next) => {
  //Store the parameters in varaible an do the type assertion
  const name: string = req.query.name as string
  const width: number = parseInt(req.query.w as string)
  const height: number = parseInt(req.query.h as string)

  console.log(req.query.name as string)
  console.log(parseInt(req.query.w as string))
  console.log(parseInt(req.query.h as string))

  try {
    //Check if the image needed with the parameters is already in the outDir folder
    checkIfImageExist(name, width, height).then((check) => {
      if (!check.isExist) {
        console.log('not Exist')

        //Start resizing image after confirming that the image is not exist
        resizeImage(name, width, height)
          .then((newresizedImage) => {
            //send the image back to the user and display it on the browser
            getImage(req, res, newresizedImage)

            //catch the error from not founding the image in the source folder
          })
          .catch((err) => {
            console.log(err + ' File not Exist')

            //send the message to the user
            res.write('File not Exist')
            res.end()
          })
      } else {
        console.log('Dose exist')

        //send the existed image back to the user
        getImage(req, res, check.path)
      }
    })
  } catch (e) {
    console.log('Something went wrong')
    res.write('Something went wrong')
    res.end()
  }
  next()
})

export default route

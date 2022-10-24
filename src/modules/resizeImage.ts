import express from 'express'
import sharp from 'sharp'
import { promises as fsPromises } from 'fs'

const imagFolder = '../image-resize-progect/full' //defualt image source folder
const outDir = '../image-resize-progect/thumbnail' //defualt out directory

//caching : check if the required image is already exist in the outDir folder

const checkIfImageExist = async (imageName: string, width: number, height: number) => {
  //listing the saved files
  const fileList: Array<string> = await fsPromises.readdir(outDir)


  //return boolean value if the array includes the same name of the image with the image path
  return {
    isExist: fileList.includes(`${imageName}_${width}_${height}.jpg`),
    path: `${outDir}/${imageName}_${width}_${height}.jpg`
  }
}

//Start resizing the image
const resizeImage = async (
  imageName: string,
  width: number,
  height: number
): Promise<string | void> => {
  return await sharp(`${imagFolder}/${imageName}.jpg`)
    .resize(width, height)
    .toFile(`${outDir}/${imageName}_${width}_${height}.jpg`)
    .then((x) => {
      //Return the new image path after resizing
      return `${outDir}/${imageName}_${width}_${height}.jpg`
    })
    .catch((err) => {
      throw err + ' error'
    })
}

//get the image and send it back to the user
const getImage = async (req: express.Request, res: express.Response, imagPath: string | void) => {
  return await fsPromises
    .readFile(imagPath as string)
    .then((imageData) => {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' })
      res.end(imageData)
    })
    .catch((err) => {
      throw 'error'
    })
}

export { resizeImage, getImage, checkIfImageExist }

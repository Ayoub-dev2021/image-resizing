import supertest from 'supertest'
import app from '../index'

import { resizeImage, getImage, checkIfImageExist } from '../modules/resizeImage'

// create a request object
const request = supertest(app)

describe('Endpoints response test', () => {

  it('home endpoint', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })

  it('resize endpoint', async () => {
    const response = await request.get('/resize')
    expect(response.status).toBe(200)
  })
})



describe('Resize Module tests', () => {

  it('should check if the image exist', (done) => {
    checkIfImageExist('test', 100, 200).then((data)=>{
      expect(data).toEqual({isExist:true, path:'../image-resize-progect/thumbnail/test_100_200.jpg'})
      done()
    })
    
 
   })


  it('should return image path after resize', (done) => {
   resizeImage('test', 100, 200)
   .then((x)=>{ 
     expect(x).toEqual('../image-resize-progect/thumbnail/test_100_200.jpg')
     done()
  })
  })


})






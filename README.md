# Resizing Image API

## Table of Contents

* [Instructions](#instructions)
* [Functions](#Functions)

## Instructions

#pacakges in this project:
    - express
    - typescript
    - prettier
    - eslint
    - sharp
    - jasmine
    - nodemon

#Scipts
  - npm start : to start the server
  - npm format: to format code using prettier
  - npm lint  : to check syntax error usin eslint
  - npm test  : to build and run tests

#start the erver:
 To get started, run the commancd line `npm start`, and open the browser to `http://localhost:4444/`

#resize images:
 Add you images in `full` folder in the root directory.
 Run resize service on route `http://localhost:4444/resize` with the following paramaters: nam={image_name}(without imaage extention), w={image_width}, h={image_height}
 ex: `http://localhost:4444/resize?name=ford&&w=600&&h=350`
 The resized image will be add automaticlly on your `thumbnail` folder in the root directory



## Developer Name
    Mohamed Ayoub

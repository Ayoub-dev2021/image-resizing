import express from 'express'

//Made this to make sure the user will enter the correct route in the URL
export const vaildateRoute = (
  req: express.Request,
  res: express.Response,
  next: () => void
): void => {
  if (req.originalUrl === '/resize') {
    return next()
  } else {
    res.status(404)
    console.log('Ops !.')
    res.write('Ops !.. You are on the wrong page')
    res.end()
    next()
  }
}

// this will validate the URL paramters, and give a guide to the correct format
export const vaildateParamters = (
  req: express.Request,
  res: express.Response,
  next: () => void
): void => {
  if (req.originalUrl !== '/resize') {
    return next()
  } else {
    const width: number = parseInt(req.query.w as string)
    const height: number = parseInt(req.query.h as string)

    if (isNaN(width) || isNaN(height)) {
      console.log('Your Paramters is wrong')
      res.write(
        `Your Paramters is wrong.. right format "/resize?name={name}&&w={image_width}&&h={image_height}"`
      )
      res.end()
      next()
    } else {
      next()
    }
  }
}

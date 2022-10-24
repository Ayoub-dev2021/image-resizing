import express from "express";
import { promises as fsPromises } from 'fs'




const testGetImage = async()=>{
    console.log(__dirname);
    return await fsPromises.readFile('../image-resize-progect/thumbnail/icelandwaterfall_800_800.jpg')
    .then((data)=>{
        console.log(data)
        return data
    })
}

export default testGetImage
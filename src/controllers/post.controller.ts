import { Request, Response } from "express";



export const getPosts = (req: Request, res: Response) => {
    res.send("getPosts")
}

export const getPostById = (req: Request, res: Response) => {
    res.send("getPostById")
}

export const createPost = (req: Request, res: Response) => {
    res.send("createPost")
}

export const updatePost = (req: Request, res: Response) => {
    res.send("updatePost")
}

export const deletePost = (req: Request, res: Response) => {
    res.send("deletePost")
}
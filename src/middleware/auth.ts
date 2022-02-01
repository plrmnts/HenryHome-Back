import { NextFunction, Request, Response } from "express";


export const veryfyToken = async (req: Request, res: Response, next: NextFunction) => {
    next()
}
export const isModerador = async (req: Request, res: Response, next: NextFunction) => {
    next()
}
export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    next()
}
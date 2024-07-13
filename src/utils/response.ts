import { Response } from "express";

export const successResponse = (
  res: Response,
  statusCode: number,
  message: string = "Success",
  data: any
) => {
  res.status(statusCode).json({
    status: true,
    statusCode,
    message,
    data
  });
};

export const errorResponse = (
  res: Response,
  statusCode: number,
  message: string = "Something went wrong, please try again later."
) => {
  res.status(statusCode).json({
    status: false,
    statusCode,
    message
  });
};

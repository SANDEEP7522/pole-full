
export const errorHandlerDataFount = (req, res, next) => {
    const err= new Error('Not Found');
    err.status = 404

    next(err)
}


export const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        err: err.massage ||  'Something wents Wrong '
    })
}


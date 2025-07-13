
export const errorHandler = (req, res, err, next) => {
    console.log('Error: ',err.stack());
    res.status(err.statusCode || 500).json({message: err.message || 'Server Error'});
};
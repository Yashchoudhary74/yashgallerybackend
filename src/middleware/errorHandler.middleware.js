export const errorHandler = (err, req, res, next) => {
    console.log(err.stack)
    res.status(404).json({
        message: "Something went wrong! Please try again letter."

    })

}

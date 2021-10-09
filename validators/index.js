exports.createPostValidator = (req,res,next) => {
    req.check("title","Write a Title").notEmpty();
    req.check("title","Title must be between 4 to 150 characters").isLength({min:4, max:150});

    req.check("body","Write a Body").notEmpty();
    req.check("body","Body must be between 4 to 150 characters").isLength({min:4, max:150});

    const error = req.validationErrors();
    if (errors) {
        const firstError = errors.map((error)=> error.msg)[0]
        return res.status(400).json({error: firstError })
    }
    next();
}
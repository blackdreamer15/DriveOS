module.exports = validateQuest;

function validateQuest(req, res, next, schema) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);

    if (error) {
        const validationErrors = error.details.map(detail => {
            
            return {
                message: detail.message
            };

        });
        res.status(400).json({ message: "Validation error", errors: validationErrors, status: "error" });


    } else {

        req.body = value;
        next();

    }
}
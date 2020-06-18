const Joi = require('@hapi/joi')

const registerAndLoginValidation = data => {

    const schema = Joi.object({
        name: Joi.string().
            min(6).
            max(51).
            required(),
        password: Joi.string().
            min(6).
            max(1024).
            required()
    })

    return schema.validate(data)
}

module.exports.registerAndLoginValidation = registerAndLoginValidation
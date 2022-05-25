import User from "../models/User.js"

export const createUser = async(req, res, next) => {
    const newUser = new Users(req.body)
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateUser = async(req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new: true}
        )
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteUser = async(req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(
            req.params.id,
        )
        res.status(200).json(`User successfully deleted`)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getDetailUser = async(req, res, next) => {
    try {
        const userDetail = await User.findById(
            req.params.id,
        )
        res.status(200).json(userDetail)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getUsers = async(req, res, next) => {
    try {
        const Users = await Users.find()
        res.status(200).json(Users)
    } catch (error) {
        next(error);
    }
}
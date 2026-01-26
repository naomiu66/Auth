const User = require('../models/User');

const createUser = async (name, email, password) => {
    return await User.create(name, email, password);
}

const getAllUsers = async () => {
    return await User.find();
}

const getUserById = async (id) => {
    return await User.findById(id);
}

const updateUser = async (id, name, email, password) => {
    return await User.findByIdAndUpdate(id, {name, email, password}, {new: true});
}

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}
import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom.id}})
        } catch (error) {
            next(error)
        }

        res.status(200).json(savedRoom)

    } catch (error) {
        next(error);
    }
}

export const updateRoom = async(req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedRoom);
    } catch (error) {
        next(error);
    }
}

export const deleteRoom = async(req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
        const deletedRoom = await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$pull: {rooms: req.params.id} })
        } catch (error) {
            next(error);
        }
        res.status(200).json(`Room deleted successfully`);
    } catch (error) {
        next(error);
    }
}

export const getDetailRoom = async(req, res, next) => {
    try {
        const detailRoom = await Room.findById(req.params.id);
        res.status(200).json(detailRoom);
    } catch (error) {
        next(error);
    }
}

export const getRooms = async(req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        next(err);
    }
}
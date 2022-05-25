import express from 'express'
import { createHotel, deleteHotel, getDetailHotel, getHotels, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();


//CREATE
router.post('/', verifyAdmin, createHotel)

//UPDATE
router.put('/:id', verifyAdmin, updateHotel)

//DELETE
router.delete('/:id', verifyAdmin, deleteHotel)

//GET DETAIL
router.get('/:id', getDetailHotel)

//GET ALL DATA
router.get('/', getHotels)

export default router;
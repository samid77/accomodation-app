import express from 'express'
import { createHotel, deleteHotel, getDetailHotel, getHotels, updateHotel, countByCity, countByType } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();


//CREATE
router.post('/', verifyAdmin, createHotel);

//UPDATE
router.put('/find/:id', verifyAdmin, updateHotel)

//DELETE
router.delete('/find/:id', verifyAdmin, deleteHotel)

//GET DETAIL
router.get('/find/:id', getDetailHotel)

//GET ALL DATA
router.get('/', getHotels)

//GET COUNT DATA
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);

export default router;
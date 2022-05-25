import express from 'express';
import {verifyAdmin} from '../utils/verifyToken.js'
import { createRoom, updateRoom, deleteRoom, getRooms, getDetailRoom } from '../controllers/room.js';

const router = express.Router();

router.post('/:hotelid', verifyAdmin, createRoom);
router.put('/:id', verifyAdmin, updateRoom);
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);
router.get('/:id', getDetailRoom);
router.get('/', getRooms);


export default router;
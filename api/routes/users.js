import express from 'express'
import { createUser, deleteUser, getDetailUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();


router.get("/checkauthentication", verifyToken, (req,res,next)=>{
  res.send("hello user, you are logged in")
})

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
  res.send("hello user, you are logged in and you can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
  res.send("hello admin, you are logged in and you can delete all accounts")
})

//CREATE
router.post('/', createUser)

//UPDATE
router.put('/:id', verifyUser, updateUser)

//DELETE
router.delete('/:id', verifyUser, deleteUser)

//GET DETAIL
router.get('/:id', verifyUser, getDetailUser)

//GET ALL DATA
router.get('/', verifyAdmin, getUsers)


export default router;
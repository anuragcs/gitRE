import express from "express";
import dotenv from "dotenv";
import passport from "passport";
dotenv.config();
const router = express.Router();

router.get("/github", passport.authenticate('github', { scope: [ 'user:email' ] }))
router.get("/github/callback",   passport.authenticate('github', { failureRedirect: process.env.CLIENT_BASE_URL +  '/login' }),
function(req, res) {
  res.redirect(process.env.CLIENT_BASE_URL);
})
//for authentication we will be using passport.js
router.get("/check",(req,res)=>{
    if(req.isAuthenticated()){
        res.send({user:req.user})
    }else{
        res.send({user:null})
    }
})
router.get("/logout",(req,res)=>{
    req.session.destroy((err)=>{
        res.json({message: "Logged Out"})
    })
})

export default router;
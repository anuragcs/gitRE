import express from "express"
import userRoutes from "./routes/user.route.js";
import dotenv from "dotenv";
import cors from "cors";
import exploreRoutes from "./routes/explore.route.js";
import authRoutes from "./routes/auth.route.js";
import connectDB from "./db/connectDB.js";
import "./passport/github.auth.js"
import passport from "passport";
import session from "express-session";
dotenv.config();
const app = express();
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.get("/", (req,res)=>{
    res.send("Server is ready!!");
});
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/explore",exploreRoutes);

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
    connectDB()
});

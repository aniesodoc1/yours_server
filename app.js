import express from "express"
import cookieParser from "cookie-parser"
import authRoute from "./routes/auth.route.js"
import cors from "cors"
import postRoute from "./routes/post.route.js"
import testRoute from "./routes/test.route.js"
import userRoute from "./routes/user.route.js"
import chatRoute from "./routes/chat.route.js"
import messageRoute from "./routes/message.route.js"

const app = express();

app.get('/', (req, res) => {
    res.send('Server is up and running!');
  });

  app.use(cors({
    origin: ["https://yours-ten.vercel.app", "https://yours-socket.vercel.app"],
    credentials: true
  }));
  
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute)
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);


app.listen(8800, () => {
    console.log('server is running!');
})
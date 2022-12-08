import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://jimmy:j*i*m*m*y@ac-snmmdcu-shard-00-00.kq7v7me.mongodb.net:27017,ac-snmmdcu-shard-00-01.kq7v7me.mongodb.net:27017,ac-snmmdcu-shard-00-02.kq7v7me.mongodb.net:27017/?ssl=true&replicaSet=atlas-an6vd1-shard-0&authSource=admin&retryWrites=true&w=majority";
export const PASS = process.env.PASS || "cewdzlwxbhznoyui";

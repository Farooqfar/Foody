import mongoose from "mongoose";

const db_link = process.env.MONGODB_URL;

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

export const connect_db = async () => {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(db_link, {
        dbName: "foody",
        bufferCommands: false,
      })
      .then((mongoose) => {
        return mongoose.connection;
      })
      .catch((error) => {
        cached.promise = null;
        throw error;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

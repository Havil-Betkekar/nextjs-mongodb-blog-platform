import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    `mongodb+srv://betkekarhavil_db_user:tQJqOUgKYeS7KfrO@cluster-blog.thrmq69.mongodb.net/blog-app`,
  );
  console.log("DB connected");
};

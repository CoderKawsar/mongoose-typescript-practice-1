import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  dateOfBirth: { type: String, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  email: { type: String },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});

userSchema.method("fullName", function fullName() {
  const fullName = this.name.middleName
    ? this.name.firstName +
      " " +
      this.name.middleName +
      " " +
      this.name.lastName
    : this.name.firstName + " " + this.name.lastName;
  return fullName;
});

// class -> this -> class
userSchema.static("getAdminUsers", async function getAdminUsers(name: string) {
  const admins = await this.find({ role: "admin" });
  return admins;
});

// create a model
const User = model<IUser, UserModel>("User", userSchema);

export default User;

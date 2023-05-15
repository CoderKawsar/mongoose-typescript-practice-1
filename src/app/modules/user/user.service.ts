import { IUser } from "./user.interface";
import User from "./user.model";

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload });
  // const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });
  console.log(user?.fullName());

  return user;
};

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload); // User -> class, user -> instance
  await user.save(); // built-in instance method
  return user;
};

export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};

// user = new User
// user.firstName()    --->    instance method
// User.getAdminUsers()    --->    static method

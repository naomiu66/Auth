const usersService = require("../services/usersService");
const authService = require("../services/authService");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res
      .status(400)
      .json({ message: "Required fields are not provided" });

  try {
    const existingUser = await usersService.getUserByEmail(email);
    if (!existingUser)
      return res
        .status(409)
        .json({ message: "User with provided email already exists" });

    const hashedPassword = await authService.hashPassword(password);

    const user = await usersService.createUser(name, email, hashedPassword);

    res.status(201).json({ _id: user._id, name: user.name, email: user.email });
  } catch (err) {
    console.error("Failed to register user", err);
    return res.json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Required fields are not provided" });

  try {
    const existingUser = await usersService.getUserByEmail(email);
    if (!existingUser)
      return res.status(401).json({ message: "Invalid credentials" });

    const isValid = await authService.comparePasswords(
      password,
      existingUser.password,
    );

    if (!isValid)
      return res.status(401).json({ message: "Invalid credentials" });

    return res.status(200).json({
      _id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
    });
  } catch (err) {
    console.error("Failed to login user", err);
    return res.json({ message: "Internal server error" });
  }
};

const logout = async (req, res) => {};

const getProfile = async (req, res) => {
    
};

module.exports = {
  register,
  login,
  logout,
  getProfile,
};

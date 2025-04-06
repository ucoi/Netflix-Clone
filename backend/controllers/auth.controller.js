import User from "../models/user.model.js";

export async function signup(req, res) {
  try {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email) === false) {
      return res.status(400).json({ message: "Please enter a valid email" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    const existinguserbyemail = await User.findOne({ email: email });

    if (existinguserbyemail) {
      return res.status(400).json({ message: "Email already exists" });
    }
  } catch (error) {}
}

export async function login(req, res) {
  res.send("Login route ");
}

export async function logout(req, res) {
  res.send("Logout route ");
}

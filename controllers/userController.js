import User from "../models/user.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json({ user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.userData.userId; // Lấy userId từ middleware kiểm tra đăng nhập
    const requestedUserId = req.params.userId;

    if (userId !== requestedUserId) {
      return res.status(403).json({
        message: "Unauthorized. You do not have permission to update this user",
      });
    }

    // Tiếp tục với việc cập nhật thông tin người dùng
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.userData.userId; // Lấy userId từ middleware kiểm tra đăng nhập
    const requestedUserId = req.params.userId;

    if (userId !== requestedUserId) {
      return res.status(403).json({
        message: "Unauthorized. You do not have permission to delete this user",
      });
    }

    // Tiếp tục với việc xóa người dùng
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

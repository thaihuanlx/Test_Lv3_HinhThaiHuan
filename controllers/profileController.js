import Profile from "../models/profile.js";

export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.profileId);
    res.json({ profile });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProfile = async (req, res) => {
  try {
    // Code to create profile
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.userData.userId;
    const profile = await Profile.findById(profileId);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    if (String(profile.userId) !== userId) {
      return res.status(403).json({
        message:
          "Unauthorized. You do not have permission to update this profile",
      });
    }

    // Tiếp tục với việc cập nhật thông tin hồ sơ
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProfile = async (req, res) => {
  try {
    const userId = req.userData.userId; // Lấy userId từ middleware kiểm tra đăng nhập
    const profileId = req.params.profileId;
    const profile = await Profile.findById(profileId);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    if (String(profile.userId) !== userId) {
      return res.status(403).json({
        message:
          "Unauthorized. You do not have permission to delete this profile",
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

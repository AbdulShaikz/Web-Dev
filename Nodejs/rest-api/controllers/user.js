const User = require("../models/User");

async function handleDisplayAllUsers(req, res) {
  const allDbUsers = await User.find({});
  const html = `
      <table border=1>
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Job Title</th>
          </tr>
          ${allDbUsers
            .map((user) => {
              return `<tr>
                      <td>${user.first_name}</td>
                      <td>${user.email}</td>
                      <td>${user.job_title}</td>
                    </tr>`;
            })
            .join("")}
      </table>
      `;

  res.send(html);
}

async function handleGetAllUsers(req, res){
  const allDbUsers = await User.find({});
  res.setHeader("X-MyName", "Abdul Shaik"); // Custom Header
  return res.send(allDbUsers);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }
    return res.json({ status: "success", updatedUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: "error" });
  }
}

async function handleDeleteUserById(req, res){
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }
    return res.json({ status: "success", message: "User deleted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: "error" });
  }
}

async function handleCreateNewUser(req, res) {
  try {
    const { firstName, lastName, email, gender, jobTitle } = req.body;
    if (!firstName || !email || !gender || !jobTitle) {
      return res.status(400).json({ msg: "All required fields are not provided." });
    }

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      gender,
      jobTitle,
    });

    return res.status(201).json({ status: "created! success", newUser });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ status: "error", message: "Email already exists." });
    }
    return res.status(500).json({ status: "error", message: "Internal server error." });
  }
}



module.exports = {
  handleDisplayAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
  handleGetAllUsers,
};

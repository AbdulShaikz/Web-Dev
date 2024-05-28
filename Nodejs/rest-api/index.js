const express = require("express");
const app = express();

const data = require("./MOCK_DATA.json");
const fs = require('fs');

const PORT = 8000;

app.use(express.urlencoded({extended: false}));
// app.use(express.json());

app.get("/", (req, res) => {
  res.send('Home Page');
});

app.get("/users", (req, res) => {
  const html = `
    <table border=1>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Job Title</th>
        </tr>
        ${data.map((data) => {
          return `<tr>
                    <td>${data.first_name}</td>
                    <td>${data.email}</td>
                    <td>${data.job_title}</td>
                  </tr>`;
        }).join('')}
    </table>
    `;

  res.send(html);
});

//REST API's

app.route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = data.find((user) => user.id === id);
    if (!user) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }
    return res.json(user);
  })
  .put((req, res) => {
    const id = Number(req.params.id);
    const userIndex = data.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }
    const updatedUser = { ...data[userIndex], ...req.body };
    data[userIndex] = updatedUser;
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ status: 'error' });
      }
      return res.json({ status: 'success', updatedUser });
    });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const userIndex = data.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }
    data.splice(userIndex, 1);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ status: 'error' });
      }
      return res.json({ status: 'success', message: 'User deleted' });
    });
  });


app.get("/api/users", (req,res) => {
    res.send(data);
});

/* app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = data.find((user) => user.id === id );
    return res.json(user);
}) */

app.post("/api/users", (req, res) => {
  const user = req.body;
  data.push({...user, id: data.length+1});
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err, dat) => {
    return res.json({status: 'pending', id: data.length });
  })
  
})

app.listen(PORT, () => {
  console.log(`Server is listening at PORT: ${PORT}`);
});

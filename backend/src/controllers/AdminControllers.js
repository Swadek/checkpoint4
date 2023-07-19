const models = require("../models");

const authenticationCheck = (req, res, next) => {
  const { name } = req.body;

  models.admin
    .getAdminByName(name)
    .then(([users]) => {
      if (users[0] != null) {
        [req.user] = users;
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getAccountInfoAdminById = (req, res) => {
  const { id } = req.params;

  models.admin
    .find(id)
    .then(([users]) => {
      if (users[0] != null) {
        res.status(200).send(users[0]);
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const modifyAdmin = (req, res) => {
  const { id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  const valueQuery = keys.map((key) => `${key} = ?`).join(", ");
  models.admin
    .update(values, valueQuery, id)
    .then(([result]) => {
      if (result.affectedRows !== 0) {
        res.sendStatus(204);
      } else {
        res.status(404).send("User not found...");
      }
    })
    .catch(() => {
      res.status(500).send("Error while updating user");
    });
};

module.exports = {
  authenticationCheck,
  getAccountInfoAdminById,
  modifyAdmin,
};

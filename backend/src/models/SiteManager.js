const AbstractManager = require("./AbstractManager");

class SiteManager extends AbstractManager {
  constructor() {
    super({ table: "site" });
  }

  insert(site) {
    const { title, description, url, image } = site;
    return this.database.query(
      `insert into ${this.table} (title, description, url, image) values (?, ?, ?, ?)`,
      [title, description, url, image]
    );
  }

  update(values, valueQuery, id) {
    return this.database.query(
      `update ${this.table} set ${valueQuery} where id = ?`,
      [...values, id]
    );
  }
}

module.exports = SiteManager;

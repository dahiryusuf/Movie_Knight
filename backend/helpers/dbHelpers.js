module.exports = (db) => {
  const getUsers = () => {
      const query = {
          text: 'SELECT * FROM users',
      };

      return db
          .query(query)
          .then((result) => result.rows)
          .catch((err) => err);
  };

  const getUserByEmail = email => {

      const query = {
          text: `SELECT * FROM users WHERE email = $1` ,
          values: [email]
      }

      return db
          .query(query)
          .then(result => result.rows[0])
          .catch((err) => err);
  }

  const addUser = (firstName, lastName, email, password) => {
      const query = {
          text: `INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *` ,
          values: [firstName, lastName, email, password]
      }

      return db.query(query)
          .then(result => result.rows[0])
          .catch(err => err);
  }
  const addWatchParty = (link, message, date, userId) => {
    const query = {
        text: `INSERT INTO watch_parties(link, messages, party_date, user_id) VALUES ($1, $2, $3, $4) RETURNING *` ,
        values: [link, message, date, userId]
    }

    return db.query(query)
        .then(result => result.rows[0])
        .catch(err => err);
}

  const getUsersPosts = () => {
      const query = {
          text: `SELECT users.id as user_id, first_name, last_name, email, posts.id as post_id, title, content
      FROM users
      INNER JOIN posts
      ON users.id = posts.user_id`
      }

      return db.query(query)
          .then(result => result.rows)
          .catch(err => err);

  }
  const getUsersWatchLists = () => {
    const query = {
        text: `SELECT users.id as user_id, first_name, last_name, email, watch_lists.id as watch_list_id, movie_id
        FROM users
        INNER JOIN watch_lists
        ON users.id = watch_lists.user_id`
    }

    return db.query(query)
        .then(result => result.rows)
        .catch(err => err);

}

  return {
      getUsers,
      getUserByEmail,
      addUser,
      getUsersPosts,
      getUsersWatchLists,
      addWatchParty
  };
};
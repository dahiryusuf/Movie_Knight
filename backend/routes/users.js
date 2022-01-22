const express = require('express');
const router = express.Router();
const {
    getPostsByUsers,
    getWatchListByUsers,
    getWatchListByUser
    
} = require('../helpers/dataHelpers');

module.exports = ({
    getUsers,
    getUserByEmail,
    addUser,
    getUsersPosts,
    getUsersWatchLists,
    addToUserWatchlist,
    getUserWatchList
}) => {
    /* GET users listing. */
    router.get('/', (req, res) => {
        getUsers()
            .then((users) => res.json(users))
            .catch((err) => res.json({
                error: err.message
            }));
    });

    router.get('/posts', (req, res) => {
        getUsersPosts()
            .then((usersPosts) => {
                const formattedPosts = getPostsByUsers(usersPosts);
                res.json(formattedPosts);
            })
            .catch((err) => res.json({
                error: err.message
            }));
    });

    router.get('/watchlist/:id', (req, res) => {
        console.log(req.params)
        const id = req.params.id
        getUserWatchList(id)
            .then((watchlist) => { 
                res.json(watchlist);
            })
            .catch((err) => res.json({
                error: err.message
            }));
    });

    router.get('/watchlists', (req, res) => {
        getUsersWatchLists()
            .then((watchLists) => {
                const formattedPosts = getWatchListByUsers(watchLists);
                res.json(formattedPosts);
            })
            .catch((err) => res.json({
                error: err.message
            }));
    });

  

    router.post('/watchlist/:id', (req, res) => {

        const  {movie_id
        } = req.body;

        const user_id = req.params.id;

        addToUserWatchlist(movie_id, user_id)
            .then(newMovie => res.json(newMovie))
            .catch(err => res.json({
                error: err.message
            }));
    })


    return router;
};
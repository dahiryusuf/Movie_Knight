const express = require('express');
const router = express.Router();
const {
    getPostsByUsers,
    getWatchListByUsers,
    getWatchListByUser,
    
    
} = require('../helpers/dataHelpers');

module.exports = ({
    getUsers,
    getUserByEmail,
    addUser,
    getUsersPosts,
    getUsersWatchLists,
    addToUserWatchlist,
    getUserWatchList,
    removeFromWatchList,
    getUserWatchParties
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

    router.get('/watchparties/:id', (req, res) => {
        console.log(req.params.id)
        const id = req.params.id
        getUserWatchParties (id)
            .then((watchparties) => { 
                res.json(watchparties);
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
    router.post('/watchlist/delete/', (req, res) => {
        const  {movie_id
        } = req.body;
     
        removeFromWatchList(movie_id)
            .then(nMovie => res.json(nMovie))
            .catch(err => res.json({
                error: err.message
            }));
    })

  

    router.post('/watchlist/:id', (req, res) => {

        const  {movie_id, poster_path
        } = req.body;

        const user_id = req.params.id;
        console.log(req.body)

        addToUserWatchlist(movie_id, poster_path, user_id)
            .then(newMovie => res.json(newMovie))
            .catch(err => res.json({
                error: err.message
            }));
    })
    


    return router;
};
const router = require('express').Router();
const {Posts} = require('../../models');
const { route } = require('./userRoutes');

router.post('/', async (req, res) =>{
    try{
        const newPost = await Posts.create({
            ...req.body,
            user_id: req.session.user_id
        });

        res.status(200).json(newPost)
    }
    catch (err){
        res.status(400).json(err)
    }
});

router.delete('/:id', async(req, res) =>{
    try{
        const postData = await Posts.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        })

        if(!postData){
            res.status(400).json({message: 'No post found!'})
            return;
        }
        res.status(200).json(postData);
    }
    catch (err){
        res.status(500).json(err)
    }   
});

module.exports = router;
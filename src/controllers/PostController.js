import Post from "../models/Post"

class PostController {

    index(req, res) {
        Post.find().then((err, posts) => {
            if (err) {
                return res.send(err)
            }
    
            res.json(posts)
        })
    }
    

    create(req, res) {

        const data = req.body
    
        const post = new Post({
            title: data.title,
            text: data.text
        });
    
        post.save().then(() => {
            res.send({status: 'ok'})
        })
    }

    read(req, res) {
        Post.findOne({_id: req.params.id}).then(post => {
            if (!post) {
                res.send({ error: 'Ничего не найдено'})
            } else {
                res.json(post);
            }
        });
    }

    update(req, res) {
        Post.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
            if (err) {
                return res.send(err)
            }
    
            res.json({status: 'updated'})
        });
    }

    delete(req, res) {
        Post.remove({
            _id: req.params.id
        }).then(post => {
            if (post) {
                res.json({status: 'deleted'})
            } else {
                res.json({status: 'error'})
            }
        })
    }

}

export default PostController;
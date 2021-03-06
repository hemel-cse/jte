import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('post', {
    post: req.post,
    comments: req.comments,
    title: req.post.title
  });
});

export default router

const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// localhost:3001/api/comments
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
        comment:req.body.content,
        user_id: req.session.user_id,
        post_id:req.body.post_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
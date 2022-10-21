const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// localhost:3001/api/comments
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});



// router.put('/:id', withAuth, async (req, res) => {
//   try {
//     const newContent = await Comment.update(req.body, {
//       where: {
//         id: req.params.id,
//         // user_id: req.session.user_id,
//       }
//     }, {
//       new: true
//     });

//     if (!newContent) {
//       res.status(404).json({ message: 'No comment found with this id!' });
//       return;
//     }

//     res.status(200).json(newContent);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

module.exports = router;
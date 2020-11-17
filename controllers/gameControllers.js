exports.ViewCreateGame = (req, res) => res.render('games/game')

// exports.profilePicture = (req, res) => {
//   const id = req.session.passport.user
//   const picture = req.file.path
//   User.findByIdAndUpdate(id, {
//       picture
//     }, {
//       new: true
//     })
//     .then(() => {
//       res.redirect('profile')
//     })
//     .catch(
//       res.redirect('profile')
//     );
// }

exports.index = (req, res) => {
  res.render('index', { openSignupModal: false, openLoginModal: false,
     resetPw: false, newPwForm: false, verifyCode: false, userCurrent: req.user });
}
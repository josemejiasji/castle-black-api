const { Router } = require('express');
const router = Router();

router.get('/health', function(req, res) {
  // QUESTION: why this endpoint blocks the app?
  // ANSWER: because there is no response sent back to the user. It's setting response's body but is not finishing the request with .send() or json().
  res.send('Up and running');
});

module.exports = router;

import express from 'express';
let router = express.Router();
import path from 'path';
const __dirname = path.resolve();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

export default router;

import path from 'path';
import express from 'express';
export const router = express.Router();

// Import services for the routes.
import * as Services from './services.js';

// Setup Multer to receive and store replay files.
import multer from 'multer';
const storage = multer.diskStorage({
  destination: (r, f, cb) => { cb(null, path.resolve() + '/rep/'); },
  filename: (r, f, cb) => { cb(null, 'temp'); }
});
const upload = multer({ storage: storage });

// Server routes.
router.get('/', Services.index);
router.get('/JRM/service/GameEntry', Services.gameEntry);
router.get('/JRM/service/GetMessage', Services.getMessage);
router.get('/JRM/service/GetName', Services.getName);
router.get('/JRM/service/GetRanking', Services.getRanking);
router.get('/JRM/service/GetReplay', Services.getReplay);
router.post('/JRM/service/ScoreEntry', upload.single('fileName'), Services.scoreEntry);
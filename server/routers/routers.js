import express from 'express'
import cors from 'cors';
import insertSignUpPublisherDataFromFront, { checkPic, fetchSignedPublisherData, insertSignUpClientDataFromFront, logPic, insertPic} from '../controllers/controllers.js';
import upload from '../middlewares/upload.js'
const router = express.Router();

router.post('/api/endpoints/sendPublisherSignUpData', cors(), insertSignUpPublisherDataFromFront)
router.post('/api/endpoints/sendClientSignUpData', cors(),insertSignUpClientDataFromFront)

router.post('/api/endpoints/picture', cors(), logPic)
 router.post('/api/endpoints/insertPic', cors(), insertPic)
 router.get('/api/endpoints/getAllSignedPublisherData', fetchSignedPublisherData)

export default router;
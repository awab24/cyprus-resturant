import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback){
        if(
            file.mimetype == "image/png" || 
            file.mimetype == "image/jpg"
        ){
            callback(null, true)
        }else{
            console.log('only jpg and png files are supported')
            callback(null, false)
        }
    }, 
    limits: {
        filesize: 1024 *1024 * 2
    }
})





export default upload;
import { v2 as cloudinary } from 'cloudinary'


cloudinary.config({
    cloud_name: process.env.CLOUSE_NAME,
    api_key: process.env.CLOUSE_API_KEY,
    api_secret: process.env.CLOUSE_API_SECRET
})





import { v2 as cloudinaryCConfig } from 'cloudinary'
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { CustomRequest } from '../interface/common/request.interface';

cloudinaryCConfig.config({
    cloud_name: process.env.CLOUSE_NAME,
    api_key: process.env.CLOUSE_API_KEY,
    api_secret: process.env.CLOUSE_API_SECRET
})


const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        public_id: (req: CustomRequest, file) => `user_${req.user._id}_${file.originalname.split('.')[0]}`
    }
});

const uploadCloud = multer({
    storage,
    limits: { fieldSize: 10 * 1024 * 1024 },
});

export default uploadCloud
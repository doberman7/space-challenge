const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: (req, file) => {
        return {
            folder: 'space-demons-3',
            allowed_formats: ['jpg', 'png'],
            public_id: `app-${file.originalname}`
        }
    }
})

const uploadCloud = multer({ storage })


module.exports = uploadCloud

import { v2 as cloudinary } from 'cloudinary';



const uploadOnCloudinary = async (dest, filePath) => {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
    });
    // Upload an image
  
    const uploadResult = await cloudinary.uploader
        .upload(
            filePath, {
            resource_type: "auto",
            folder: dest,
            quality: "auto",
            fetch_format: "auto",
            flags: "lossy"
        }
        )
        .catch((error) => {
            console.log(error);
        });

    // console.log(uploadResult);
    // console.log(uploadResult.url);
    return uploadResult.secure_url;
}


export { uploadOnCloudinary }

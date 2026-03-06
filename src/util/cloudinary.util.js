
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







// const photourl = await uploadOnCloudinary(data.src)
// console.log(photourl);
// uploadOnCloudinary('personal/photogallery/original', 'https://images.unsplash.com/photo-1761839258420-5c3e2f2e2a74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8')





export { uploadOnCloudinary }

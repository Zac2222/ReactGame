const target = 'media/';

const getCroppedImageUrl = (url: string) => {
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);

    //another method
    // const croppedUrl = url.replace('/media/', '/media/crop/600/400/')
    // return croppedUrl
} 

export default getCroppedImageUrl;
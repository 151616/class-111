Webcam.set({
    width: 300,
    height: 300,
    image_format:'png',
    png_quality: 90,
 contraints:{
facingMode: 'environment'
 }
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

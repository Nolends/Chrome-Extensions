
let fileNames = [
    "images/XQC1.jpg",
    "images/XQC2.jpg",
    "images/XQC3.jpg",
    "images/XQC4.jpg",
    "images/XQC5.jpg"
];
let imgs=document.getElementsByTagName("img")


for(img of imgs){
   console.log(img.src)
   // get random
   let r = Math.floor(Math.random()*fileNames.length)
   let file = fileNames[r]
   let url=chrome.extension.getURL(file)
   img.src=url
   console.log(url)
}
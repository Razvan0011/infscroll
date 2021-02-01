const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = []

// Unsplash API
const count = 10;
const apiKey = "WJm5NcoJYenLOgJLr3SOC0KXVsKYu1iP9a34--UNZI0"
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create elements for links and photos and add to dom
function displayPhotos() {
    // Run function for each object in array
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        // Put img inside the <a>, then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    } catch (err) {
        // Catch error here
    }
}

// On Load
getPhotos();
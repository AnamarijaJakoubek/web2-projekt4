document.addEventListener('DOMContentLoaded', initGallery);

function initGallery() {
    const gallery = document.getElementById('gallery');
    const imagePath = 'images/image';
    
    Array.from({ length: 15 }, (_, i) => {
        const img = document.createElement('img');
        img.src = `${imagePath}${i + 1}.jpg`;
        img.alt = `Slika broj ${i + 1}`;
        img.classList.add('image-item');
        return img;
    }).forEach(img => gallery.appendChild(img));
}



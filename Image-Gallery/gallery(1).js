
// Image filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const images = gallery.querySelectorAll('img');
filterBtns.forEach(btn => {
     btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            images.forEach(img => {
                if (filter === 'all' || img.getAttribute('data-category') === filter) {
                    img.style.display = '';
                } else {
                    img.style.display = 'none';
                }
            });
        });
    });

//full-image 
var fullImage = document.getElementById('full-ImageBox');
var fullImg = document.getElementById('complete-Img');

// Get all gallery images as an array
const galleryImages = Array.from(document.querySelectorAll('#gallery img'));
let currentIndex = 0;

// Update openImg to track index
function openImg(pic) {
    fullImage.style.display = 'flex';
    fullImg.src = pic;
    currentIndex = galleryImages.findIndex(img => img.src === pic);
    updateNavButtons();
}

// Close function remains the same
function closeImg() {
    fullImage.style.display = 'none';
}

// Next/Prev navigation
document.getElementById('prevBtn').onclick = function() {
    if (currentIndex > 0) {
        currentIndex--;
        fullImg.src = galleryImages[currentIndex].src;
        updateNavButtons();
    }
};

document.getElementById('nextBtn').onclick = function() {
    if (currentIndex < galleryImages.length - 1) {
        currentIndex++;
        fullImg.src = galleryImages[currentIndex].src;
        updateNavButtons();
    }
};

// Hide/show nav buttons at ends
function updateNavButtons() {
    document.getElementById('prevBtn').style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    document.getElementById('nextBtn').style.visibility = currentIndex === galleryImages.length - 1 ? 'hidden' : 'visible';
}

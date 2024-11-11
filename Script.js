document.addEventListener("DOMContentLoaded", function() {
    const featuredImage = document.querySelector("figure img");
    const caption = document.querySelector("figure figcaption");
    const thumbnailContainer = document.querySelector("ul");

    const images = [
        { large: "flowers-pink-large.jpg", small: "flowers-pink-small.jpg", title: "Pink Flowers in Bloom", color: "#d4a5a5" },
        { large: "flowers-purple-large.jpg", small: "flowers-purple-small.jpg", title: "Purple Flowers in the Garden", color: "#a29bfa" },
        { large: "flowers-red-large.jpg", small: "flowers-red-small.jpg", title: "Red Flowers in the Field", color: "#d89797" },
        { large: "flowers-white-large.jpg", small: "flowers-white-small.jpg", title: "White Daffodils in the Park", color: "#a6c8f1" }
    ];

    featuredImage.src = images[0].large;
    caption.textContent = images[0].title;
    document.body.style.backgroundColor = images[0].color;

    images.forEach((image, index) => {
        const listItem = document.createElement("li");
        const thumbnail = document.createElement("img");

        thumbnail.src = image.small;
        thumbnail.alt = image.title;
        thumbnail.dataset.large = image.large;
        thumbnail.dataset.index = index;
        listItem.appendChild(thumbnail);
        thumbnailContainer.appendChild(listItem);

        if (index === 0) {
            thumbnail.classList.add("active");
        } else {
            thumbnail.classList.add("grayscale");
        }

        thumbnail.addEventListener("click", function() {
            featuredImage.src = thumbnail.dataset.large;
            caption.textContent = image.title;
            document.body.style.backgroundColor = image.color;
            updateActiveThumbnail(thumbnail);
        });
    });

    function updateActiveThumbnail(selectedThumbnail) {
        const thumbnails = thumbnailContainer.querySelectorAll("img");
        thumbnails.forEach(thumbnail => {
            thumbnail.classList.remove("active");
            thumbnail.classList.add("grayscale");
        });
        selectedThumbnail.classList.add("active");
        selectedThumbnail.classList.remove("grayscale");
    }
});

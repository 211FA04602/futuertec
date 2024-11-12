document.addEventListener("DOMContentLoaded", function() {
    const slides = [
        {
            url: "https://practera.com/wp-content/uploads/2022/11/kobu-agency-7okkFhxrxNw-unsplash-scaled-e1668653952750.jpg",
            title: "Unleash Your Potential",
            description: "Kickstart your career with enriching internships and hands-on experience. Let's create the future together!",
        
        },
        {
            url: "https://media.designrush.com/articles/183938/conversions/best-elearning-websites-details.jpg",
            title: "Learning Spaces",
            description: "Access top-notch facilities and labs designed to enhance your learning experience.",
        },
        {
            url: "https://images.careerindia.com/img/2024/07/students-internship-1721885259.jpg",
            title: "Internship Programs",
            description: "Gain practical experience through our wide range of internship programs tailored to your interests.",
           
    
        },
        {
            url: "https://cdn.prod.website-files.com/5f9c797b77202ddbb93d7abc/615486d99b6f91a683ddfea0_RESIZED%208%20reasons.jpg",
            title: "Build Your Career",
            description: "Join our vibrant community and kickstart your professional journey.",
          
        }
    ];

    let currentIndex = 0;

    function setSlideContent() {
        const slide = slides[currentIndex];
        const sliderContainer = document.getElementById("dynamic-slider-container");

        // Create slide content dynamically
        sliderContainer.innerHTML = `
            <img src="${slide.url}" alt="${slide.title}" class="img-fluid">
            <div class="caption center-align text-white">
                <h2>${slide.title}</h2>
                <h5 class="light">${slide.description}</h5>
                
            </div>
        `;

        // Update to the next slide index
        currentIndex = (currentIndex + 1) % slides.length;
    }

    // Initialize the first slide
    setSlideContent();

    // Change slide every 5 seconds
    setInterval(setSlideContent, 5000);
});

document.addEventListener("DOMContentLoaded", function() {
    const aboutContent = [
        "Future Tek Pvt. Ltd., established in 2021, is a leading firm specializing in cutting-edge hardware and software products.",
        "We are committed to advancing technology across sectors like Electronics, Electrical, Mechanical, Civil, and more.",
        "Our company excels in departments such as Sales, Service, R&D, Production, Quality Control, Finance, and Project Management.",
        "We also have our own R&D wing, recognized by the Department of Scientific & Industrial Research, Government of India.",
        "Our operations have created numerous job opportunities across various departments, reflecting our growth and innovation."
    ];

    // Display all content at once
    const dynamicContentDiv = document.getElementById("dynamic-content");
    const paragraph = document.createElement("p");
    paragraph.textContent = aboutContent.join(' '); // Combine all paragraphs into one
    dynamicContentDiv.appendChild(paragraph);
});

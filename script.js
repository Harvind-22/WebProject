document.addEventListener("DOMContentLoaded", function () {
    const profiles = [
        { 
            name: "HARVIND K", 
            role: "Photographer", 
            experience: "5 years in wildlife photography", 
            specialty: "Expert in nature & macro photography",
            img: "img3.jpg" 
        },
        { 
            name: "TANISHKA BHATIA", 
            role: "Videographer", 
            experience: "7 years in documentary filming", 
            specialty: "Specialist in 4K drone videography",
            img: "img1.jpg" 
        },
        { 
            name: "VIJAY SNGH", 
            role: "Video Editor", 
            experience: "4 years in commercial editing", 
            specialty: "Advanced Adobe Premiere & After Effects",
            img: "img2.jpg" 
        },
        { 
            name: "PIYUSH", 
            role: "Photographer", 
            experience: "6 years in portrait photography", 
            specialty: "Master of black & white portraits",
            img: "img4.jpg" 
        },
        { 
            name: "ADITYA MANDLOI", 
            role: "Videographer", 
            experience: "8 years in music video production", 
            specialty: "Creative storytelling through cinematography",
            img: "img6.jpg" 
        },
        { 
            name: "AMAN PARMAR", 
            role: "Video Editor", 
            experience: "5 years in cinematic editing", 
            specialty: "Color grading & visual effects pro",
            img: "img5.jpg" 
        }
    ];

    let startIndex = 0;
    const maxProfilesToShow = 3;

    function addProfiles() {
        const container = document.getElementById("profiles");
        container.innerHTML = ""; // Clear previous profiles

        for (let i = 0; i < maxProfilesToShow; i++) {
            let profileIndex = (startIndex + i) % profiles.length; // Circular sliding
            let profile = profiles[profileIndex];

            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${profile.img}" alt="${profile.name}">
                <div class="info">
                    <h3>${profile.name}</h3>
                    <p>${profile.role}</p>
                    <p class="experience">${profile.experience}</p>
                    <p class="specialty">${profile.specialty}</p>
                </div>
            `;
            container.appendChild(card);
        }

        // Move to the next profile in sequence
        startIndex = (startIndex + 1) % profiles.length;
    }

    // Initial Load
    addProfiles();

    // Slide one profile every 5 seconds
    setInterval(addProfiles, 5000);
});

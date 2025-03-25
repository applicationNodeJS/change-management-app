// URL de votre backend (remplacez par l'URL de votre API si déployée)
const API_URL = "http://localhost:3000/api/stories";

// Éléments du DOM
const storyForm = document.getElementById("storyForm");
const storiesList = document.getElementById("storiesList");

// Soumission du formulaire
storyForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const priority = document.getElementById("priority").value;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, description, priority, status: "pending" })
        });

        if (response.ok) {
            alert("User story ajoutée !");
            storyForm.reset();
            loadStories(); // Recharge la liste
        } else {
            throw new Error("Erreur lors de l'ajout");
        }
    } catch (err) {
        console.error("Erreur:", err);
        alert("Erreur lors de l'ajout de la user story");
    }
});

// Charger les stories depuis le backend
async function loadStories() {
    try {
        const response = await fetch(API_URL);
        const stories = await response.json();
        displayStories(stories);
    } catch (err) {
        console.error("Erreur:", err);
    }
}

// Afficher les stories dans le DOM
function displayStories(stories) {
    storiesList.innerHTML = "";
    stories.forEach(story => {
        const storyDiv = document.createElement("div");
        storyDiv.className = "story";
        storyDiv.innerHTML = `
            <h3>${story.title}</h3>
            <p>${story.description}</p>
            <p>Statut: <strong>${story.status}</strong></p>
            <span class="priority priority-${story.priority}">
                Priorité: ${story.priority}
            </span>
        `;
        storiesList.appendChild(storyDiv);
    });
}

// Charger les stories au démarrage
loadStories();
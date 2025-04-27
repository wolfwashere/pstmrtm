// Modal Popup Controls for Artifact Viewing

function openArtifact(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Artifact failed to load.');
      }
      return response.text();
    })
    .then(text => {
      document.getElementById('artifactContent').textContent = text;
      document.getElementById('artifactModal').style.display = "block";
    })
    .catch(error => {
      document.getElementById('artifactContent').textContent = "Error loading artifact.";
      document.getElementById('artifactModal').style.display = "block";
    });
}

function closeArtifact() {
  document.getElementById('artifactModal').style.display = "none";
}

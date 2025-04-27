// Modal Popup Controls for Artifact Viewing

function openArtifact(url) {
  const modal = document.getElementById('artifactModal');
  const content = document.getElementById('artifactContent');

  // Clear previous content
  content.innerHTML = '';

  if (url.match(/\.(jpg|jpeg|png|gif)$/i)) {
    // It's an image
    const img = document.createElement('img');
    img.src = url;
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    img.style.display = 'block';
    img.style.margin = '0 auto';
    content.appendChild(img);
    modal.style.display = "block";
  } else {
    // It's a text file
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Artifact failed to load.');
        }
        return response.text();
      })
      .then(text => {
        content.textContent = text;
        modal.style.display = "block";
      })
      .catch(error => {
        content.textContent = "Error loading artifact.";
        modal.style.display = "block";
      });
  }
}

function closeArtifact() {
  document.getElementById('artifactModal').style.display = "none";
}

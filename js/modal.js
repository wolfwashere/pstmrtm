function openArtifact(url) {
  const modal = document.getElementById('artifactModal');
  const content = document.getElementById('artifactContent');

  // Clear previous content
  content.innerHTML = '';

  if (url.match(/\.(jpg|jpeg|png|gif)$/i)) {
    // It's an image
    const img = document.createElement('img');
    img.src = url;
    img.style.maxWidth = '80%'; /* uniform sizing */
    img.style.height = 'auto'; /* preserve aspect ratio */
    img.style.display = 'block';
    img.style.margin = '2em auto'; /* nicely centered */
    img.style.border = '1px solid #333'; /* optional: light eerie border */
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

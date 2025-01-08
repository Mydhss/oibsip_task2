function showDetails(id) {
  const selectedSection = document.getElementById(id);

  if (selectedSection.style.display === 'block') {
      selectedSection.style.display = 'none';
  } else {
      const sections = document.querySelectorAll('.details-section');
      sections.forEach(section => section.style.display = 'none');

      selectedSection.style.display = 'block';
  }
}


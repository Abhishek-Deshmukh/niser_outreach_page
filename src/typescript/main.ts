const loadLinks = () => {
  const sections = document.getElementsByTagName('section');
  for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener('click', () => {
      window.location.replace(sections[i].getAttribute('data'));
    });
  }
};
document.addEventListener("DOMContentLoaded", function(event) {
  loadLinks()
});

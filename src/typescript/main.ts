function A() {
  const sections = document.getElementsByClassName('section');
  for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener('click', () => {
      window.location.replace(sections[i].getAttribute('data'));
    });
  }
};

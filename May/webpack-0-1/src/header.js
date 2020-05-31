
export default function Header() {
  const app = document.querySelector('#app');
  const header = document.createElement('div');
  header.innerText = 'This is a header.';
  header.classList.add('header');
  app.appendChild(header);
}
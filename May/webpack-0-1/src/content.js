
export function Content() {
  const app = document.querySelector('#app');
  const content = document.createElement('div');
  content.innerText = 'This is a content.';
  app.appendChild(content);
}
const React = require('react');
const http = require('http');
const { renderToString } = require('react-dom/server');

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    console.log('aaaa')
  }
  render() {
    return <h1 onClic={this.handleClick}>hello {this.props.name}</h1>
  }
}

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  const html = renderToString(<Index name="coolfe" />);
  res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>react ssr</title>
        </head>
        <body>
            <div id="root">
               ${html}
            </div>
        </body>
        </html>
  `);
}).listen(9001);
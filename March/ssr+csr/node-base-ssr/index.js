const http = require('http');

const fetchData = function () {
  return {
    list: [{
      name: '包子',
      num: 100
    },
    {
      name: '饺子',
      num: 2000
    }, {
      name: '馒头',
      num: 10
    }
    ]
  }
}

const dataToHtml = (data) => {
  var html = '';
  data.list.forEach(i => {
    html += `<div>${i.name}有 ${i.num}</div>`
  })
  return html;
}

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  const html = dataToHtml(fetchData());
  res.end(
    `<!DOCTYPE html>
    <html lang="zh">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>传统 ssr</title>
    </head>

    <body>
        <div id="root">
            ${html}
        </div>
    </body>

    </html>`);
}).listen(9001);

console.log('server start...9001');
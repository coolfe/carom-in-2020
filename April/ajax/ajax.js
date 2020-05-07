(function (window) {
  function Ajax() {
  }
  Ajax.prototype = {
    constructor: Ajax,
    ajax(payload) {
      const type = (payload.type || 'get').toLowerCase();
      let xhr = new XMLHttpRequest();
      let url = payload.url || '';
      let data = payload.data || null;
      if (type === 'get') {
        let paramsUrl = '';
        if (typeof data == 'object') {
          paramsUrl = this.params(payload.data) || '';
        }
        url = payload.data ? `${payload.url}?${paramsUrl}` : `${payload.url}`;
        data = null;
      }
      xhr.open(
        type,
        url
      );
      if (type === 'post') {
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        if (typeof data == 'object') {
          data = JSON.stringify(data);
        }
      }
      xhr.send(data);
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 201)) {
          var text = xhr.responseText || '成功';
          console.log(xhr, '11')

          return text;
        }
      }
    },
    params(payload) {
      let str = '';
      for (let key in payload) {
        str += `${key}=${payload[key]}&`
      }
      console.log(str, str.substring(0, str.length - 1))
      str = str.substring(0, str.length - 1);
      return str;
    }
  }
  window.$ = new Ajax();
})(window);
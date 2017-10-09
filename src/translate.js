export function translate(input, lang) {
    const key = 'trnsl.1.1.20170914T130402Z.03141e3edfa30fa7.16bbe7ef20c9f950be37eec2e415e3c3266e9eb7';
    const api = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
    var url = api + '?';
    url+= 'key=' + key;
    url+= '&text=' + input;
    url+= '&lang=' + lang;
    return request(url);
  }
  
  function request(url) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      
      xhr.open('GET', url, false);
      xhr.onload = function() {
        if (this.status === 200) {
          resolve(JSON.parse(this.response));
        } 
        else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      
      xhr.onerror = function() {
        reject(new Error('Network Error'));
      };
  
      xhr.send();
    });
  }
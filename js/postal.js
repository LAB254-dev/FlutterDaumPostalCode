const elementWrap = document.getElementById('wrap');

new daum.Postcode({
  oncomplete: function (data) {
    const msg = JSON.stringify(data);
    try {
      onComplete.postMessage(msg);
    } catch (err) { }
  },
  width: '100%',
  height: '100%',
  maxSuggestItems: 5,
  alwaysShowEngAddr: false,
  hideMapBtn: true,
  hideEngBtn: false,
}).embed(wrap);
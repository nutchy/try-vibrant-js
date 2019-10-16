const toDataURL = url => fetch(url)
  .then(response => response.blob())
  .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  }))


toDataURL('http://i.scdn.co/image/ab67616d0000b27336ccfbe26545732377ae36d2')
  .then(dataUrl => {
    console.log('RESULT:', dataUrl)
  })

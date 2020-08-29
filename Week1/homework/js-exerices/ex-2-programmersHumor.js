
function callXLM(){
    const xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://xkcd.now.sh/?comic=latest', true);
    xhr.onload = function(){
      if (xhr.status >= 200 && xhr.status <= 299) {
            const programmers = JSON.parse(this.responseText);
            console.log(programmers);
            const img = document.createElement('img');
            img.src = programmers.img;
            document.body.appendChild(img);

        }
      else {
        console.log(`Network error: ${xhr.status} - ${xhr.statusText}`);
      }
    }
    xhr.send();
}
callXLM();


function callAxios() {
    axios.get('https://xkcd.now.sh/?comic=latest')
  .then(function (response) {
    
    console.log(response);
    const img2 = document.createElement('img');
    img2.src = response.data.img;
    document.body.appendChild(img2);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  
}

callAxios();
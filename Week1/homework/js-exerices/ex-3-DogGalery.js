const ul = document.getElementById('imageUl');

const callXlmBtn =  document.getElementById('xlmButton');
callXlmBtn.addEventListener('click', function(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
    xhr.onload = function (){
        if( this.status == 200) {
            const dogs = JSON.parse(this.responseText);
            console.log(dogs);
            const li = document.createElement('li');
            li.innerHTML = `<img src=${dogs.message} width = "200px">`
            ul.appendChild(li);
        }
    }
    xhr.send();
})

const axiosButton = document.getElementById('axiosButton');
axiosButton.addEventListener('click', function(){
    const li2 = document.createElement('li');
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
            li2.innerHTML = `<img src=${response.data.message} width = "200px">`
            ul.appendChild(li2);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    
})
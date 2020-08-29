

function callXLM () {
    const xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://www.randomuser.me/api');
    xhr.onload = function(){
        if( this.status >= 200 && this.status <= 299) {
        const friends = JSON.parse(this.responseText);
        document.getElementById('section1').innerHTML = `Gender: ${friends.results[0].gender}<br>
                                    Name: ${friends.results[0].name.first}<br>
                                    City: ${friends.results[0].location.city}<br>
                                    Name: ${friends.results[0].email}<br>
                                    Image: <br><img src=${friends.results[0].picture.medium}>`
        console.log(friends);
        }
        else {
            console.log('Network Error');
        }
    }
    xhr.send();
}
callXLM();



function callAxios() {
    axios.get('https://www.randomuser.me/api')
    .then(function (response) {
        console.log(response);
        document.getElementById('section2').innerHTML = `Gender: ${response.data.results[0].gender}<br>
                                                        Name: ${response.data.results[0].name.first}<br>
                                                        City: ${response.data.results[0].location.city}<br>
                                                        Name: ${response.data.results[0].email}<br>
                                                        Image: <br><img src=${response.data.results[0].picture.medium}>`

    })
    .catch(function (error) {
    console.log(error.message);
    })
}
callAxios();


function action() {
    var firstDiv = document.getElementById('div1');
// heading
    var heading1 = document.createElement('h1')
    heading1.innerHTML = 'Bienvenido!'
    firstDiv.style.textAlign = 'center'
    firstDiv.style.color = 'red'
    firstDiv.appendChild(heading1);

// background color
    var backgroundColor = document.body.style.backgroundColor = 'yellow';
// first paragraph
    var p1 = document.createElement('p');
    p1.innerHTML = 'Ahora que estas aqui no puedes regresar >:)   '
    firstDiv.appendChild(p1);  
// second paragraph
    var p2 = document.createElement('p');
    p2.innerHTML = 'Por lo mientras disfruta esta foto de un perrito :| '
    firstDiv.appendChild(p2);

// image
    var image = document.createElement('img');
    image.src= 'puppy.jpg'
    image.style.height = '400px'
    image.style.width = '500px'
    firstDiv.appendChild(image);
// heading 2
    var heading2 = document.createElement('h2');
    heading2.innerHTML = 'Y Estos'
    firstDiv.appendChild(heading2);
//image 2
    var image2 = document.createElement('img');
    image2.src = 'puppies.png'
    image2.style.height = '400px'
    image2.style.width = '500px'
    firstDiv.appendChild(image2);
// heading 3
    var heading3 = document.createElement('h3');
    heading3.innerHTML = 'Y Finalmente Este'
    firstDiv.appendChild(heading3);
// image 3
    var image3 = document.createElement('img');
    image3.src = 'cutie.jpg'
    image3.style.height = '400px'
    image3.style.width = '500px'
    firstDiv.appendChild(image3);
// paragraph 2
var p2 = document.createElement('p');
p2.innerHTML = 'Estas son todas las fotos que hay, si estas muy aburrido as click en las imagenes :/ '
firstDiv.appendChild(p2);
// paragraph 3
var p3 = document.createElement('p');
p3.innerHTML = 'Te la Creiste? XD'
firstDiv.appendChild(p3);
// show and hide
if (firstDiv.style.display == 'none') {
    firstDiv.style.display = 'block';
} else if (firstDiv.style.display == 'block') {
    firstDiv.style.display = 'none';
}

document.getElementById('dumbo').style.visibility = 'hidden';
}
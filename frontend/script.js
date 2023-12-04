fetch("http://localhost:3001/products")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        const gallery = document.querySelector('.gallery');
        const product = document.createElement('article');
        const title = document.createElement('h1');
        const img = document.createElement('img');

        data.forEach(element =>{
        img.src = element.image;
        title.innerText=element.name;
        product.appendChild(title);
        product.appendChild(img);
        gallery.appendChild(product);})
    })
    .catch(error => document.write(error))
// console.log(result);
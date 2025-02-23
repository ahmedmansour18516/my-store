document.addEventListener("DOMContentLoaded", function() {
    fetch('php/products.php')
        .then(response => response.json())
        .then(data => {
            const productsSection = document.getElementById('products');
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="images/${product.image}" alt="${product.name}" width="100">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>السعر: ${product.price} ريال</p>
                `;
                productsSection.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
// This JavaScript runs inside a web browser
// (because it is included with a script tag in the file index.html)

// This is a list of our products in the format "an array of objects"
let products = [
  {
    id: 1,
    name: 'Solglasögon Rayban Wayfarer',
    price: 850,
    description: 'Klassika solglasögon burna av bl.a. Roy Orbinson och Bob Dylan.'
  },
  {
    id: 2,
    name: 'Lila Solglasögon för barn',
    price: 200,
    description: 'Med dessa coola brillor på näsan blir du trendigast på stranden och får även inbyggd solskydd och polarisering!'
  },
  {
    id: 3,
    name: 'Glasögon enkelslipade budget',
    price: 750,
    description: 'Vår mest prisvärda glasögon för dig som är närsynt.'
  },
  {
    id: 4,
    name: 'Progressiva lyxglasögon',
    price: 8999,
    description: 'För pensionären som vill ha extra allt. Antireflexbehandlade och med inbyggd AI.'
  }
];

// We use a for...of-loop to loop through our products
for (let product of products) {
  // For each product we add some more html to the webpage
  // Note that we add html with different tags as a long
  // string (using back-ticks to start and end the string)
  document.body.innerHTML += `
    <article>
      <img src="images/${product.id}.webp">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p><strong>Pris:</strong> ${product.price} kr</p>
    </article>
  `;
}




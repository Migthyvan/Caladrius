.src
├── quote
│   ├── pdfQuoteGenerator.js
│   └── quote.js
│   └── QuoteFreelance.vue
│   └── QuoteMobileApp.vue
│   └── QuoteWebsite.vue
├── section

Nous avons trois fichiers templates pour la vue des différents services que nous proposons; deux fichiers de logique js. Le premier fichier est une fonction qui permet de générer le pdf une fois les informations sont fournies.

Dans le quote on a des tableaux qui contiennent des objets!
Exemple:
```js 
const websiteTypes = [
  { label: 'Site vitrine', value: 'Site vitrine', basePrice: 499 },
  { label: 'Site e-commerce', value: 'Site e-commerce', basePrice: 1499 },
  { label: 'Site blog', value: 'Site blog', basePrice: 800 },
  { label: 'Site portfolio', value: 'Site portfolio', basePrice: 499 },
  { label: 'Site professionnel', value : 'Site professionnel', basePrice: 1500}
];
```
On va définir la fonction du calcule avec toute la logique javascript.

```js
function calculateQuote(selectedType, selectedPages,   selectedBackend, selectedSpecifis) {
    const type = websiteTypes.find(t => t.value === selectedType); // C'est le type de projet qui est selectionné
    if(!type) return 0;

    let totalPrice = type.basePrice; // Prix de base de l'application

    // Appliquer le multiplicateur de pages
    const pages = pagesNumber.find(p => p.value === selectedPages);
    if (pages) {
        totalPrice *= pages.multiplier;
    }

    // Ajouter le coût du backend
    const backend = backends.find(b => b.value === selectedBackend);
    if (backend) {
        totalPrice += backend.price;
    }

    // Ajouter les fonctionnalités spécifiques
    if (selectedSpecifics && selectedSpecifics.length > 0) {
        selectedSpecifics.forEach(spec => {
        const specific = specifics.find(s => s.value === spec);
        if (specific) {
            totalPrice += specific.price;
        }
        });
    }

    return totalPrice;
}
```
// just for the website
export const types = [
  { label: 'Site vitrine', value: 'Site vitrine', basePrice: 499 },
  { label: 'Site e-commerce', value: 'Site e-commerce', basePrice: 1499 },
  { label: 'Site blog', value: 'Site blog', basePrice: 800 },
  { label: 'Site portfolio', value: 'Site portfolio', basePrice: 499 },
  { label: 'Site professionnel', value : 'Site professionnel', basePrice: 1500}
];

export const pagesNumber = [
  { label: '1-5 pages', value: '1-5 pages', multiplier: 1 },
  { label: '5-10 pages', value: '5-10 pages', multiplier: 1.5 },
  { label: 'Plus de 10 pages', value: 'Plus de 10 pages', multiplier: 2 }
];

export const backends = [
  { label: 'Léger', value: 'Léger', price: 200 },
  { label: 'Moyen', value: 'Moyen', price: 500 },
  { label: 'Robuste', value: 'Robuste', price: 1000 }
];

export const specifics = [
  { label: 'SEO', value: 'SEO', price: 300 },
  { label: 'Blog intégré', value: 'Blog intégré', price: 200 },
  { label: 'Multilingue', value: 'Multilingue', price: 400 }
];

export function calculateQuote(selectedType, selectedPages, selectedBackend, selectedSpecifics) {
  // Trouver le type sélectionné
  const type = types.find(t => t.value === selectedType);
  if (!type) return 0;

  let totalPrice = type.basePrice;

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
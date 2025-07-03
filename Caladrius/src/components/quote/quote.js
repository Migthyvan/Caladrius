// just for the website
export const websiteTypes = [
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
  { label: 'Multilingue', value: 'Multilingue', price: 200 }
];

export function calculateQuote(selectedType, selectedPages, selectedBackend, selectedSpecifics) {
  // Trouver le type sélectionné
  const type = websiteTypes.find(t => t.value === selectedType);
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


//just for the mobile app
export const mobileTypes = [
  { label: 'Android', value: 'Android', basePrice: 1000 },
  { label: 'IOS', value: 'IOS', basePrice: 2000 },
  { label: 'Cross-platform', value: 'Cross-platform', basePrice: 1500 },
];

export const appliTypes = [
  { label: 'Réseau social', value: 'Réseau social', multiplier: 2.5 },
  { label: 'App E-commerce', value: 'App E-commerce', multiplier: 1.5 },
  { label: 'SaaS/Productivité', value: 'Saas/productivité', multiplier: 2 },
];

export const appSpecifics = [
  { label: 'Notification Push', value: 'Notification Push', price: 300 },
  { label: 'Multilingue', value: 'Multilingue', price: 400 },
  { label: 'Fonctionnalités hors ligne', value: 'Fonctionnalités hors ligne', price: 500 }
];

export function calculateQuoteMobileApp(selectedType, selectedAppKind, selectedBackend, selectedAppSpecifics) {
  // Trouver le type sélectionné
  const type = mobileTypes.find(t => t.value === selectedType);
  if (!type) return 0;

  let totalPrice = type.basePrice;

  // Appliquer le multiplicateur du type d'application
  const appKind = appliTypes.find(p => p.value === selectedAppKind);
  if (appKind) {
    totalPrice *= appKind.multiplier;
  }

  // Ajouter le coût du backend
  const backend = backends.find(b => b.value === selectedBackend);
  if (backend) {
    totalPrice += backend.price;
  }

  // Ajouter les fonctionnalités spécifiques
  if (selectedAppSpecifics && selectedAppSpecifics.length > 0) {
    selectedAppSpecifics.forEach(spec => {
      const specific = appSpecifics.find(s => s.value === spec);
      if (specific) {
        totalPrice += specific.price;
      }
    });
  }

  return totalPrice;
}
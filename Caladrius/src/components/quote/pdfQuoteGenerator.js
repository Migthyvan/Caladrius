import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { types, pagesNumber, specifics, backends, calculateQuote } from './quote';

/**
 * Génère un devis PDF
 * @param {Object} params - Paramètres du devis
 * @param {string} params.clientName - Nom du client
 * @param {string} params.projectType - Type de projet
 * @param {number} params.pageCount - Nombre de pages
 * @param {Array} params.selectedOptions - Options sélectionnées
 * @param {Array} params.projectTypes - Liste des types de projets
 * @param {Array} params.availableOptions - Liste des options disponibles
 */
export function generateDevisPDF(params) {
  const {
    clientName,
    projectType,
    pageCount = 5,
    selectedOptions = [],
    projectTypes,
    availableOptions
  } = params;

  // Trouver le projet sélectionné
  const currentProject = projectTypes.find(p => p.value === projectType);
  
  // Calcul des prix
  const optionsTotal = availableOptions
    .filter(opt => selectedOptions.includes(opt.id))
    .reduce((sum, opt) => sum + opt.price, 0);
  
  const subtotal = currentProject.basePrice + 
                 (Math.max(0, pageCount - 5) * currentProject.pricePerPage) + 
                 optionsTotal;
  const tva = subtotal * 0.2;
  const total = subtotal + tva;

  // Création du PDF
  const doc = new jsPDF();

  // ===== CONTENU DU PDF ===== //
  // En-tête
  doc.setFontSize(18).setTextColor(40, 40, 40)
     .text("Caladrius Technologies", 105, 20, { align: 'center' })
     .setFontSize(14)
     .text("DEVIS", 105, 30, { align: 'center' });

  // Informations société
  doc.setFontSize(10).setTextColor(100, 100, 100)
     .text("Adjamé paillet, Rue de l'aménagement | Abidjan", 105, 40, { align: 'center' })
     .text("(+225) 010140008192 / 0757240274 / 0586070612", 105, 45, { align: 'center' })
     .text("caladriusllc@gmail.com | www.caladriustech.com", 105, 50, { align: 'center' });

  // Date et client
  doc.setTextColor(40, 40, 40)
     .text(`Date: ${new Date().toLocaleDateString('fr-FR')}`, 14, 60)
     .setFontSize(12)
     .text("Client:", 14, 70)
     .setFontSize(10)
     .text(`Nom: ${clientName}`, 20, 75);

  // Détails du projet
  doc.setFontSize(12).text("Détails du Projet:", 14, 85)
     .setFontSize(10)
     .text(`Type: ${currentProject.label}`, 20, 90)
     .text(`Pages: ${pageCount}`, 20, 95);

  // Options
  if (selectedOptions.length > 0) {
    doc.text("Options:", 20, 105);
    let y = 110;
    availableOptions.forEach(opt => {
      if (selectedOptions.includes(opt.id)) {
        doc.text(`- ${opt.label}`, 25, y);
        y += 5;
      }
    });
  }

  // Tableau des prix
  doc.autoTable({
    startY: selectedOptions.length > 0 ? 130 : 110,
    head: [['Description', 'Prix HT']],
    body: [
      [`${currentProject.label} (base)`, `${currentProject.basePrice} €`],
      [`Pages supplémentaires (${Math.max(0, pageCount - 5)})`, 
       `${Math.max(0, pageCount - 5) * currentProject.pricePerPage} €`],
      ...availableOptions
        .filter(opt => selectedOptions.includes(opt.id))
        .map(opt => [opt.label, `${opt.price} €`]),
      ['Total HT', `${subtotal} €`],
      ['TVA (20%)', `${tva} €`],
      ['Total TTC', `${total} €`]
    ],
    styles: { 
      cellPadding: 5, 
      fontSize: 10,
      valign: 'middle'
    },
    headStyles: { 
      fillColor: [70, 130, 180],
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    }
  });

  // Conditions et signature
  doc.text("Conditions de paiement:", 14, doc.lastAutoTable.finalY + 15)
     .text("- 30% à la commande", 20, doc.lastAutoTable.finalY + 20)
     .text("- 40% à la validation de la maquette", 20, doc.lastAutoTable.finalY + 25)
     .text("- 30% à la livraison", 20, doc.lastAutoTable.finalY + 30)
     .text("Signature:", 14, doc.lastAutoTable.finalY + 40)
     .line(50, doc.lastAutoTable.finalY + 45, 100, doc.lastAutoTable.finalY + 45);

  // Téléchargement
  doc.save(`Devis_${clientName.replace(/ /g, '_')}.pdf`);
}
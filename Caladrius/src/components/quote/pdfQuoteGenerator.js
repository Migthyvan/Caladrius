import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
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
    projectTypes, // Ceci sera 'types'
    availableOptions, // Ceci sera 'specifics'
    clientEmail,
    phoneNumber,
    totalDevis,
  } = params;

  // Trouver le projet sélectionné
  const currentProject = projectTypes.find(p => p.id === projectType);

  if (!currentProject) {
    console.error("Project type not found:", projectType);
    alert("Erreur: Type de projet non valide.");
    return;
  }

    // Calcul des prix
    const optionsTotal = availableOptions
        .filter(opt => selectedOptions.includes(opt.id))
        .reduce((sum, opt) => sum + opt.price, 0);

    const pagesExtraCost = Math.max(0, pageCount - pagesNumber) * currentProject.pricePerPage;

    const subtotal = totalDevis;
    const tva = subtotal * 0.18;
    const total = subtotal + tva;

    // Création du PDF
    const doc = new jsPDF(); // Utiliser jspdf.jsPDF car importé via UMD

    // ===== CONTENU DU PDF ===== //
    // En-tête
    doc.setFontSize(18).setTextColor(40, 40, 40)
        .text("Caladrius Technologies", 105, 20, { align: 'center' })
        .setFontSize(12).setTextColor(100, 100, 100)
        .text(`Devis pour ${projectType}`, 105, 30, { align: 'center' });

    // Informations société
    doc.setFontSize(10).setTextColor(100, 100, 100)
        .text("Adjamé paillet, Rue de l'aménagement | Abidjan", 105, 40, { align: 'center' })
        .text("(+225) 010140008192 / 0757240274 / 0586070612", 105, 50, { align: 'center' })
        .text("caladriusllc@gmail.com | www.caladriustech.com", 105, 60, { align: 'center' });

    // Date et client
    doc.setTextColor(100, 100, 100)
        .text(`Date: ${new Date().toLocaleDateString('fr-FR')}`, 14, 70)
        .setFontSize(10)
        .text(`Nom: ${clientName}`, 14, 80)
        .text(`Email: ${clientEmail}`, 81, 80)
        .text(`Numero de Tel: ${phoneNumber}`, 141, 80);

    // Détails du projet
    doc.setFontSize(10).setTextColor(100, 100, 100).text("Détails du Projet:", 14, 90)
        .setFontSize(10)
        .text(`Type de projet: ${currentProject.label}`, 14, 100)
        .text(`Nombre de pages: ${pageCount}`, 81, 100)
        .text('Options',144, 100);

    // Options
    let optionsYStart = 100;
    if (selectedOptions.length > 0) {
        let y = optionsYStart + 5;
        availableOptions.forEach(opt => {
            if (selectedOptions.includes(opt.id)) {
                doc.text(`- ${opt.label}`, 144, y+5);
                y += 5;
            }
        });
        optionsYStart = y + 5; // Ajuste la position de départ du tableau si des options sont présentes
    }

    // Tableau des prix
    autoTable(doc,{
        startY: optionsYStart,
        head: [['Description', 'Prix HT']],
        body: [
            [`${currentProject.label} (base)`, `${currentProject.basePrice.toFixed(2)} €`],
            [`Pages supplémentaires (${Math.max(0, pageCount - pagesNumber)})`, 
            `${pagesExtraCost.toFixed(2)} €`],
            ...availableOptions
                .filter(opt => selectedOptions.includes(opt.id))
                .map(opt => [opt.label, `${opt.price.toFixed(2)} €`]),
            ['Total HT', `${totalDevis.toFixed(2)} €`],
            ['TVA (18%)', `${tva.toFixed(2)} €`],
            ['Total TTC', `${total.toFixed(2)} €`]
        ],
        styles: { 
            cellPadding: 3, 
            fontSize: 10,
            valign: 'middle',
            halign: 'left' // Alignement horizontal par défaut pour les cellules
        },
        columnStyles: {
            1: { halign: 'right' } // Aligne la deuxième colonne (Prix HT) à droite
        },
        headStyles: { 
            fillColor: [70, 130, 180],
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            halign: 'left'
        },
        footStyles: { // Appliquer des styles aux totaux si nécessaire
            fillColor: [240, 240, 240],
            fontStyle: 'bold'
        },
        didDrawPage: function (data) {
            // Pied de page : numéro de page
            doc.setFontSize(8);
            doc.text(`Page ${doc.internal.getNumberOfPages()}`, data.settings.margin.left, doc.internal.pageSize.height - 10);
        }
    });

    // Conditions et signature
    const finalY = doc.lastAutoTable.finalY + 15;
    doc.setFontSize(10).text("Conditions de paiement:", 14, finalY)
      .text("- 30% à la commande", 20, finalY + 5)
      .text("- 40% à la validation de la maquette", 20, finalY + 10)
      .text("- 30% à la livraison", 20, finalY + 15)
      .text("Validité du devis: 30 jours", 14, finalY + 25)
      .text("Nous restons à votre disposition pour toute question.", 14, finalY + 35)
      .line(20, finalY + 50, 100, finalY + 50); // Ligne de signature
    // Téléchargement
    doc.save(`Devis_${clientName.replace(/ /g, '_')}.pdf`);
}

// --- Logique d'interaction UI ---
document.addEventListener('DOMContentLoaded', () => {
  const projectTypeSelect = document.getElementById('projectType');
  const optionsListDiv = document.getElementById('options-list');

  // Remplir les types de projet
  types.forEach(type => {
      const option = document.createElement('option');
      option.value = type.id;
      option.textContent = type.label;
      projectTypeSelect.appendChild(option);
  });

  // Remplir les fonctionnalités spécifiques sous forme de cases à cocher
  specifics.forEach(option => {
      const div = document.createElement('div');
      div.className = 'checkbox-item';
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = `option-${option.id}`;
      input.value = option.id;
      const label = document.createElement('label');
      label.htmlFor = `option-${option.id}`;
      label.textContent = `<span class="math-inline">\{option\.label\} \(</span>{option.price}€)`;
      div.appendChild(input);
      div.appendChild(label);
      optionsListDiv.appendChild(div);
  });
});

window.generatePDF = function() {
  const clientName = document.getElementById('clientName').value;
  const projectType = document.getElementById('projectType').value;
  const pageCount = parseInt(document.getElementById('pageCount').value);
  const selectedOptions = Array.from(document.querySelectorAll('#options-list input[type="checkbox"]:checked'))
                              .map(cb => cb.value);

generateDevisPDF({
    clientName: clientName,
    projectType: projectType,
    pageCount: pageCount,
    selectedOptions: selectedOptions,
    projectTypes: types,      // Passez vos données 'types'
    availableOptions: specifics // Passez vos données 'specifics'
});
};
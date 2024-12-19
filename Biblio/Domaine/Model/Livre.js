// Modèle Livre - Représente un livre dans la bibliothèque
class Livre {
    constructor(id, titre, auteur, annee, disponible) {
        this.id = id;
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee;
        this.disponible = disponible;  // True si disponible, False si emprunté
    }

    // Méthode pour vérifier si le livre peut être emprunté
    peutEtreEmprunte() {
        return this.disponible;
    }

    // Méthode pour changer la disponibilité du livre
    changerDisponibilite(nouvelleDisponibilite) {
        this.disponible = nouvelleDisponibilite;
    }
}
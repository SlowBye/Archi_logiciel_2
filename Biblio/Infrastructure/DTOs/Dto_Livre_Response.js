class DtoLivreResponse {
    constructor(id, titre, auteur, disponible) {
        this.id = id; // Identifiant du livre
        this.titre = titre; // Titre du livre
        this.auteur = auteur; // Auteur du livre
        this.disponible = disponible; // Disponibilité (true ou false)
    }
    
    LivreToDto(Livre livre){
        return new DtoLivreResponse(livre.id, livre.titre, livre.auteur, livre.disponible);
    }
}
  
class DTOLivreRequest {
    constructor(id, titre, auteur, disponible) {
        this.id = id; // Identifiant du livre
        this.titre = titre; // Titre du livre
        this.auteur = auteur; // Auteur du livre
        this.disponible = disponible; // Disponibilité (true ou false)
    }

    DtoToLivre(DTOLivreRequest dTOLivreRequest){
        return new Livre(dTOLivreRequest.id, dTOLivreRequest.titre, dTOLivreRequest.auteur, dTOLivreRequest.disponible);
    }
}
  
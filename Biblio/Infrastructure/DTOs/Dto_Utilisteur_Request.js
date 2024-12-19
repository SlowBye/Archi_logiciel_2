class DTOUtilisateurRequest {
    constructor(id, nom, email, dateDeNaissance, actif) {
        this.id = id; // Identifiant de l'utilisateur
        this.nom = nom; // Nom de l'utilisateur
        this.email = email; // Email de l'utilisateur
        this.dateDeNaissance = dateDeNaissance; // Date de naissance de l'utilisateur
        this.actif = actif; // Statut de l'utilisateur (actif ou non)
    }

    // Méthode pour convertir le DTO en entité Utilisateur
    DtoToUtilisateur(DTOUtilisateurRequest dtoUtilisateurRequest) {
        return new Utilisateur(
            dtoUtilisateurRequest.id,
            dtoUtilisateurRequest.nom,
            dtoUtilisateurRequest.email,
            dtoUtilisateurRequest.dateDeNaissance,
            dtoUtilisateurRequest.actif
        );
    }
}
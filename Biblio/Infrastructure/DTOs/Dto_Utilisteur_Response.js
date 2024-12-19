class DtoUtilisateurResponse {
    constructor(id, nom, email, dateDeNaissance, actif) {
        this.id = id; // Identifiant de l'utilisateur
        this.nom = nom; // Nom de l'utilisateur
        this.email = email; // Email de l'utilisateur
        this.dateDeNaissance = dateDeNaissance; // Date de naissance de l'utilisateur
        this.actif = actif; // Statut de l'utilisateur (actif ou non)
    }

    // Méthode pour convertir une entité Utilisateur en DTO
    UtilisateurToDto(Utilisateur utilisateur) {
        return new DtoUtilisateurResponse(
            utilisateur.id,
            utilisateur.nom,
            utilisateur.email,
            utilisateur.dateDeNaissance,
            utilisateur.actif
        );
    }
}

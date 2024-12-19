# Atelier 2 : Concevoir une application en architecture logicielle en couches

## Groupe

    - ZAOUALI Olfa 
    - BEN KEMIL Mezen
    - TATANG DOUANLA Jopcelin
    - MORAIS PEREIRA David

## Objectif

    - Arborescence complète respectant l’architecture en couches.
    - Code clair avec des commentaires expliquant le rôle des fichiers et couches.
    - Une documentation simple incluant :
        - La description des couches et leur rôle.
        - Le flux des données pour au moins une fonctionnalité complète.
        - Les règles métier implémentées.

## Architecture en couches

    Choix :
        - [ ] Architecture en 3 couches : Présentation, WorkFlow & Domaine, Persistance.
        - [x] Architecture en 4 couches : Présentation, Aplication, Domaine, Infrastructure.
        - [ ] Couche Ouverte
        - [x] Couche fermée

    Justification :
        Ce choix nous permet de bien séparer les responsabilités de chaque couche et de faciliter la maintenance et l'évolution de l'appli Biblio, 
        qui risque de devenir compliqué avec le temps.
        En termes de Scalabilité, cette architecture est plus adaptée. Chaque couche est indépendante et peut être modifiée sans affecter les autres couches.

## Description des couches

        Présentation : 
            - Couche qui contient les interfaces utilisateur de l'application.

        Application :
            - Couche qui contient la logique qui orchestre les différents flux de l'application.

        Domaine :
            - Couche qui contient les règles metier de l'application.
        
        Infrastructure :
            - Couche qui contient les services techniques nécessaires de l'application.
        
## Règle métier implémentées

        - [x] Ajouter un livre
        - [x] Modifier un livre
        - [x] Supprimer un livre
        - [x] Lister les livres
        - [x] Rechercher un livre par son titre ou son auteur
        - [x] Emprunter un livre (avec maximum 3 emprunts par personne)
        - [x] Ajouter un utilisateur
        - [x] Modifier un utilisateur
        - [x] Supprimer un utilisateur
        - [x] Lister les utilisateurs
        - [x] Rechercher un utilisateur par son nom ou id
        - [x] Lister les emprunts
        - [x] Rechercher un emprunt par l'utilisateur
        - [x] verifier si un livre est emprunté 

## Arborecence

    Biblio/
    ├── Presentation/                           # Couche Présentation
    │   └── Vue/                     
    │       ├── Vue_Livres          
    |       └──
    │
    ├── Application/                            # Couche Application
    │   ├── Controleurs/                    
    │   |   ├── Controleur_Livres        
    |   |   └──    
    │   |
    |   └── Services/                           
    |       ├── Impléments/                     
    │       |   ├── Service_Livres_impl      
    |       |   └──
    |       └── Interfaces/                     
    │           ├── Service_Livres   
    |           └──
    │
    ├── Domaine/                                # Couche Domaine
    │   └── Model/                  
    │       ├── Livre       
    |       └──
    │
    ├── Infrastructure/                         # Couche Infrastructure
    │   ├── DTOs/                     
    │   |   ├── Dto_Livre_request 
    |   |   ├── Dto_Livre_response       
    │   |   └── 
    |   |
    |   └── Repository/             
    │       ├── Reository_Livre          
    |       └──       
    │
    └── README.md                               # Description de notre architecture

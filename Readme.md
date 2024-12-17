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

    Justification :
        Ce choix nous permet de bien séparer les responsabilités de chaque couche et de faciliter la maintenance et l'évolution de l'appli Biblio, qui risque de devenir compliqué avec le temps.
        En termes de Scalabilité, cette architecture est plus adaptée. Chaque couche est indépendante et peut être modifiée sans affecter les autres couches.

## Description des couches

        Présentation (Vue) : 
            - Couche qui contient les interfaces utilisateur de l'application.

        **Application** (Contrôleur) :
            - Couche qui contient la logique qui orchestre les différents flux de l'application.

        **Domaine** (Modèle) :
            - Couche qui contient les règles metier de l'application.
        
        **Infrastructure** (BDD) :
            - Couche qui contient les services techniques nécessaires de l'application.
        

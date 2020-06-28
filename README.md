# PochLib-app

Fonctionnalités de l’application à développer
Langage à utiliser
Toutes les fonctionnalités indiquées ci-dessous doivent être mises en place dynamiquement en utilisant JavaScript.
Spécificité
La structure HTML fournie dans le fichier index.html ne doit en aucun cas être modifiée, exceptée pour les cas suivants :
- ajout du logo à télécharger ​ici
- ajout d’une police grâce à ​Google Fonts
- ajout d’un ou plusieurs lien(s) vers une feuille de style CSS
- ajout d’un ou plusieurs lien(s) vers un fichier JavaScript
Liste des fonctionnalités
● Au chargement de la page
Seul le bouton “ajouter un livre” doit être affiché sur la page. Si des livres sont enregistrés, ceux-ci doivent apparaître sur la page, dans la section “ma poch’liste”.

● Lors du clic sur “Ajouter un livre”
Lorsque l’utilisateur a cliqué sur le bouton “ajouter un livre”, un formulaire de recherche doit s’afficher. Ce formulaire est composé de deux champs :
- un champ “titre du livre”
- un champ “auteur”
Ces deux champs ne doivent pas être vides lors de la soumission du formulaire.
Il n’est pas nécessaire de mettre en place de contraintes de validation, mais vous pouvez le faire si vous le souhaitez.
Un bouton “rechercher” doit être présent pour permettre la soumission du formulaire.
L’​API de Google Books​ doit être utilisée pour rechercher les livres correspondant aux données saisies dans le formulaire.

Lors du clic sur le bouton “Rechercher”, un bloc sous le formulaire doit afficher les résultats de recherche
Un bouton annuler doit être présent. Lors du clic sur ce bouton, le formulaire doit disparaître et laisser place au bouton “ajouter un livre”. Si une recherche était en cours, les résultats de recherche doivent aussi disparaître.

● Affichage des résultats de recherche
L’affichage des résultats de recherche doit permettre de lister les livres correspondant aux critères de recherche saisis en utilisant l’API de Google Books.
Pour chaque livre, les éléments suivants doivent être présents :
- identifiant
- titre
- auteur (s’il y a plusieurs auteurs, n’afficher que le premier)
- icône pour garder le livre dans sa liste (bookmark)
- description (limitée aux 200 premiers caractères)
- image
Dans le cas où la description serait manquante, l’indication “Information manquante” devra être présente.
Dans le cas où aucune image ne serait présente pour un livre, l’image “unavailable.png”, téléchargeable ​ici​, devra être utilisée.
Dans le cas où la recherche ne retourne pas de résultats, le message “Aucun livre n’a été trouvé” devra être affiché.

Lorsque l’utilisateur clique sur l’icône appelée « bookmark » , le livre sera ajouté dans la liste des livres à lire de l’utilisateur (poch’liste), en-dessous de l’affichage des résultats.
Le livre doit aussi être enregistré dans une session, en utilisant l’API SessionStorage​.
Le même livre ne pourra pas être ajouté deux fois dans la poch’liste. Le message “Vous ne pouvez ajouter deux fois le même livre” devra être affiché si l’utilisateur essaie d’ajouter deux fois le même livre.

● Affichage de la poch’liste
La liste des livres qui ont été sélectionnés par l’utilisateur doivent s’afficher sous la fonctionnalité décrite précédemment.
Chacun des livres de la liste doit afficher les mêmes informations que celle décrites dans les résultats de recherche, à l’exception de l’icône bookmark, qui sera remplacée par une icône de corbeille, pour pouvoir supprimer un livre de sa liste.
La suppression d’un livre de sa liste ne doit pas supprimer le livre affiché dans les résultats de recherche.
Le rechargement de la page doit permettre d’afficher la liste des livres enregistrés en session via Session Storage.æ
Icônes du site
La librairie ​Font Awesome​ pour afficher les icônes du site (​marque-page et corbeille​) sera utilisée.
Design du site
Le design du site web est laissé complètement libre. En revanche, les wireframes devront être respectés. Le projet doit être réalisé en mobile-first. En ce qui concerne le format bureau, seule l’apparence indiquée dans le wireframe associée diffère du format précédent. Le reste demeure inchangé.
Versionning
Le projet doit être versionné et disponible sur ​Github​. Il est recommandé de travailler avec des pull requests. Dans la mesure où la majorité des
   
communications concernant les projets sur Github se font en anglais, il faut que vos commits soient en anglais.

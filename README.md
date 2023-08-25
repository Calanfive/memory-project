Un brief :
Aujourd'hui on va utiliser nos bases en HTML + CSS + Typescript pour faire un memory.
Un memory est un jeu de cartes dans lequel il faut retrouver les paires de cartes identiques.
Les cartes sont de dos. On décide de retourner les cartes en cliquant dessus.
On les retourne par groupe de 2. Si les 2 cartes sont identiques, elles restent retournées. Sinon, elles se retournent de nouveau et l'utilisateur doit se souvenir des cartes qu'il a déjà retournées. L'ordre ne change pas.
Vous utiliserez des tuiles de couleurs différentes. Si vous arrivez à compléter cet objectif, vous remplacerez les couleurs par des images aléatoires de chiens.
Puis vous ajouterez la notion de score en fin de partie (nombre de coups avant de compléter le jeu).
Puis statistiques sur les parties précédentes (record, moyenne de coups).
Vous mettrez ensuite votre site en ligne grâce à Vercel.

Change log : ticket x4

amélioration partie css (Camille)
 - Colorer barre supérieure
 - Colorer fond body
 - Augmenter taille h1 'Memory' + 'START'
 - Augmenter taille btn_reco
 - Placer centre page btn_reco 'recommencer

Comteur (aymeric)
 - Ajouter un compteur, pour connaitre le nombre de coups qu'on na fait pendant la partie.

 - Pour aller plus loin on peut mettre un système de Localstorege qui retient le nombre de coups des dernières parties (affiche de statistique)

Timer (aymeric)
 - ajout: -un timeur qui commence quand le jeu est lancé (click : bouton stars) et qui s'arrête quand toute les tuiles on été toutes trouvé.

 - et recommence à 0 lors d'une nouvelle partie

Animation de fin (Camille)
 - Faire apparaître un smiley ou animation en fin de partie
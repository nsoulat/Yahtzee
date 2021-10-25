<template>
    <div id="reglesEcrites">
        <h1>Les règles du Yahtzee</h1>
        <p>Le principe du jeu est simple, il faut lancer 5 dés et compléter une grille en fonction du résultat des dés.</p>
        <h2>     Le lancer de dés :</h2>
        <p>Vous avez le droit à 3 lancers de dés à chaque tour. Après chaque lancer, vous pouvez garder certains dés et donc ne relancer que ceux que vous souhaitez. Vous n’êtes pas obligés de faire les 3 lancers.</p>
        <h2>     Le marquage sur la grille :</h2>
        <p>
            Quand vous êtes satisfaits de vos lancers, ou si vous avez déjà effectué les 3 possibles, il faut choisir une des 13 cases disponibles sur la grille, dans n’importe quel ordre. Cependant, à chaque fin de tour, vous êtes obligés d’en remplir une.<br>
            Chaque case correspond à un marquage de point différent. <br>
            La partie supérieure est le total, pour chaque valeur de 1 à 6, des faces de dès correspondant à cette valeur.<br>
            Si vous totalisez plus de 62 points pour la partie supérieure, vous obtenez un bonus de 35 points.<br>
            La partie inférieure comporte différentes figures :
            <ul>
                <li>Brelan : Trois dés indiquant le même chiffre. Il vaut la somme des cinq dés.</li>
                <li>Carré : Quatre dés indiquant le même chiffre. Il vaut la somme des cinq dés.</li>
                <li>Full : Trois dés indiquant le même chiffre et deux dés identiques mais différents des deux autres. Il vaut 25 points.</li>
                <li>Petite suite : Une suite de quatre chiffres. Elle vaut 30 points.</li>
                <li>Grande suite : Une suite de cinq chiffres. Elle vaut 40 points.</li>
                <li>Yahtzee : Cinq dés identiques. Il vaut 50 points.</li>
                <li>Chance : Elle vaut la somme des cinq dés.</li>
            </ul>

            Toutefois, étant obligé de remplir une case à chaque tour, il se peut que vous soyez obligés d’inscrire un 0 sur une case.
        </p>
        <h2>     Comment jouer ?</h2>
        <p>
            Après le premier lancer de dés automatique, vous avez la possibilité de cliquer sur les dés que vous ne souhaitez pas relancer directement sur le tapis de jeu.<br>
            De même, si vous avez mis un dé de côté, vous pouvez cliquer dessus pour le remettre sur le tapis de jeu afin de le relancer.<br>
            Attention, seuls les dés sur le tapis de jeu sont relancés quand vous cliquez sur "Relancer les dés".<br>
            Lorsque vous êtes satisfaits des valeurs de vos dés, ou que vous n'avez plus la possibilité de relancer les dés, vous devez inscrire un score dans une des cases du tableau. <br>
            Pour ce faire, vous avez simplement à cliquer sur la case de votre choix.
        </p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    h1 {
        font-size: 50px;
    }

    h2 {
        font-size: 25px;
        text-decoration: underline;
        margin-left: 6%;
    }

    p {
        font-size: 16px;
        margin-left: 2%;
        margin-right: 2%;
    }

    ul {
        margin-top: 0px;
    }
</style>
/**
 * Created by echchouik on 30/09/2015.
 */
var Engine;
Engine = function() {
    var plateau = new Array(6);
    var joueur;

    //Creation du plateau et du joueur
    this.init = function() {
        joueur = "white";
        var i, j;
        for(i = 0; i < plateau.length; i++) {
            plateau[i] = new Array(6);
            for(j = 0; j < plateau[i].length; j++) {
                plateau[i][j] = null;
            }
        }
    };

    //Return le nombre des billes sur le plateau
    this.getNbBall = function() {
        var c = 0;
        var i, j;
        for(i = 0; i < plateau.length; i++) {
            for(j = 0; j < plateau[i].length; j++) {
                if(plateau[i][j] === "white" || plateau[i][j] === "black") {
                    c++;
                }
            }
        }
        return c;
    };

    //Return le joueur
    this.getCurrentPlayer = function() {
        return joueur;
    };

    //Insert une bille sur le plateau
    this.putBall = function(x) {
        plateau[x.charCodeAt(0) - 97][x.charCodeAt(1) - 1] = joueur;
    };

    //Verifie si la bille est sur le plateau
    this.checkPutBall = function(x) {
        return plateau[x.charCodeAt(0) - 97][x.charCodeAt(1) - 1];
    }

    
};

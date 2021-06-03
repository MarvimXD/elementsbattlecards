window.onload = function inicializar() {
    
    var carta1 = cards[Math.floor(Math.random()*cards.length)];
    var carta2 = cards[Math.floor(Math.random()*cards.length)];
    var carta3 = cards[Math.floor(Math.random()*cards.length)];
    var carta4 = cards[Math.floor(Math.random()*cards.length)];
    var carta5 = cards[Math.floor(Math.random()*cards.length)];

    var novacarta1 = cards[Math.floor(Math.random()*cards.length)];
    var novacarta2 = cards[Math.floor(Math.random()*cards.length)];
    var novacarta3 = cards[Math.floor(Math.random()*cards.length)];
    var novacarta4 = cards[Math.floor(Math.random()*cards.length)];
    var novacarta5 = cards[Math.floor(Math.random()*cards.length)];

    var cartaAdv1 = cards[Math.floor(Math.random()*cards.length)];
    var cartaAdv2 = cards[Math.floor(Math.random()*cards.length)];
    var cartaAdv3 = cards[Math.floor(Math.random()*cards.length)];
    var cartaAdv4 = cards[Math.floor(Math.random()*cards.length)];
    var cartaAdv5 = cards[Math.floor(Math.random()*cards.length)];

    var c1 = document.getElementById("carta-jogador1").style.backgroundImage = "url(imgs/" + carta1.url + ")";
    var c2 = document.getElementById("carta-jogador2").style.backgroundImage = "url(imgs/" + carta2.url + ")";
    var c3 = document.getElementById("carta-jogador3").style.backgroundImage = "url(imgs/" + carta3.url + ")";
    var c4 = document.getElementById("carta-jogador4").style.backgroundImage = "url(imgs/" + carta4.url + ")";
    var c5 = document.getElementById("carta-jogador5").style.backgroundImage = "url(imgs/" + carta5.url + ")";
    
    document.getElementById("carta-jogador1").addEventListener('click', clique_carta1);
    document.getElementById("carta-jogador2").addEventListener('click', clique_carta2);
    document.getElementById("carta-jogador3").addEventListener('click', clique_carta3);
    document.getElementById("carta-jogador4").addEventListener('click', clique_carta4);
    document.getElementById("carta-jogador5").addEventListener('click', clique_carta5);
    
    function clique_carta1() {
        document.getElementById("jogador-joga").style.backgroundImage = "url(imgs/" + carta1.url + ")";
        timerAparecerCartaAdv();
        timer(1);
        cartaUsada(1);
        delayProxRodada();

        
        if(carta1.elemento == 1 && cartaAdv1.elemento == 2) {
            console.log("Voce Ganhou!");
        }
        if(carta1.elemento == 2 && cartaAdv1.elemento == 3) {
            console.log("Voce Ganhou!");
        }
        if(carta1.elemento == 3 && cartaAdv1.elemento == 1) {
            console.log("Voce Ganhou!");
        }
        if(cartaAdv1.elemento == 1 && carta1.elemento == 2) {
            console.log("Voce perdeu!");
        }
        if(cartaAdv1.elemento == 2 && carta1.elemento == 3) {
            console.log("Voce perdeu!");
        }
        if(cartaAdv1.elemento == 3 && carta1.elemento == 1) {
            console.log("Voce perdeu!");
        }


        if(carta1.elemento == cartaAdv1.elemento) {
            if(carta1.numero > cartaAdv1.numero) {
                console.log("Voce ganhou!");
            }
            if(carta1.numero < cartaAdv1.numero) {
                console.log("Voce perdeu!")
            }
            if(carta1.numero == cartaAdv1.numero) {
                console.log("Empate");
            }
        }
        
    }
    function clique_carta2() {
        document.getElementById("jogador-joga").style.backgroundImage = "url(imgs/" + carta2.url + ")";
        timerAparecerCartaAdv();
        timer(2);
        cartaUsada(2);
        delayProxRodada();

        if(carta2.elemento == 1 && cartaAdv2.elemento == 2) {
            console.log("Voce Ganhou!");
        }
        if(carta2.elemento == 2 && cartaAdv2.elemento == 3) {
            console.log("Voce Ganhou!");
        }
        if(carta2.elemento == 3 && cartaAdv2.elemento == 1) {
            console.log("Voce Ganhou!");
        }
        if(cartaAdv2.elemento == 1 && carta2.elemento == 2) {
            console.log("Voce perdeu!");
        }
        if(cartaAdv2.elemento == 2 && carta2.elemento == 3) {
            console.log("Voce perdeu!");
        }
        if(cartaAdv2.elemento == 3 && carta2.elemento == 1) {
            console.log("Voce perdeu!");
        }


        if(carta2.elemento == cartaAdv2.elemento) {
            if(carta2.numero > cartaAdv2.numero) {
                console.log("Voce ganhou!");
            }
            if(carta2.numero < cartaAdv2.numero) {
                console.log("Voce perdeu!")
            }
            if(carta2.numero == cartaAdv2.numero) {
                console.log("Empate");
            }
        }
    }
    function clique_carta3() {
        document.getElementById("jogador-joga").style.backgroundImage = "url(imgs/" + carta3.url + ")";
        timerAparecerCartaAdv();
        timer(3);
        cartaUsada(3);
        delayProxRodada();

        if(carta3.elemento == 1 && cartaAdv3.elemento == 2) {
            console.log("Voce Ganhou!");
        }
        if(carta3.elemento == 2 && cartaAdv3.elemento == 3) {
            console.log("Voce Ganhou!");
        }
        if(carta3.elemento == 3 && cartaAdv3.elemento == 1) {
            console.log("Voce Ganhou!");
        }
        if(cartaAdv3.elemento == 1 && carta3.elemento == 2) {
            console.log("Voce perdeu!");
        }
        if(cartaAdv3.elemento == 2 && carta3.elemento == 3) {
            console.log("Voce perdeu!");
        }
        if(cartaAdv3.elemento == 3 && carta3.elemento == 1) {
            console.log("Voce perdeu!");
        }


        if(carta3.elemento == cartaAdv3.elemento) {
            if(carta3.numero > cartaAdv3.numero) {
                console.log("Voce ganhou!");
            }
            if(carta3.numero < cartaAdv3.numero) {
                console.log("Voce perdeu!")
            }
            if(carta3.numero == cartaAdv3.numero) {
                console.log("Empate");
            }
        }
    }
    function clique_carta4() {
        document.getElementById("jogador-joga").style.backgroundImage = "url(imgs/" + carta4.url + ")";
        timerAparecerCartaAdv();
        timer(4);
        cartaUsada(4);
        delayProxRodada();

        if(carta4.elemento == 1 && cartaAdv4.elemento == 2) {
            console.log("Voce Ganhou!");
        }
        if(carta4.elemento == 2 && cartaAdv4.elemento == 3) {
            console.log("Voce Ganhou!");
        }
        if(carta4.elemento == 3 && cartaAdv4.elemento == 1) {
            console.log("Voce Ganhou!");
        }
        if(cartaAdv4.elemento == 1 && carta4.elemento == 2) {
            console.log("Voce perdeu!");
        }
        if(cartaAdv4.elemento == 2 && carta4.elemento == 3) {
            console.log("Voce perdeu!");
        }
        if(cartaAdv4.elemento == 3 && carta4.elemento == 1) {
            console.log("Voce perdeu!");
        }


        if(carta4.elemento == cartaAdv4.elemento) {
            if(carta4.numero > cartaAdv4.numero) {
                console.log("Voce ganhou!");
            }
            if(carta4.numero < cartaAdv4.numero) {
                console.log("Voce perdeu!")
            }
            if(carta4.numero == cartaAdv4.numero) {
                console.log("Empate");
            }
        }
    }
    function clique_carta5() {
        document.getElementById("jogador-joga").style.backgroundImage = "url(imgs/" + carta5.url + ")";
        timerAparecerCartaAdv();
        timer(5);
        cartaUsada(5);
        delayProxRodada();

        if(carta5.elemento == 1 && cartaAdv5.elemento == 2) {
            console.log("Voce Ganhou!");
        }
        if(carta5.elemento == 2 && cartaAdv5.elemento == 3) {
            console.log("Voce Ganhou!");
        }
        if(carta5.elemento == 3 && cartaAdv5.elemento == 1) {
            console.log("Voce Ganhou!");
        }
        if(cartaAdv5.elemento == 1 && carta5.elemento == 2) {
            console.log("Voce perdeu!");
        }
        if(cartaAdv5.elemento == 2 && carta5.elemento == 3) {
            console.log("Voce perdeu!");
        }
        if(cartaAdv5.elemento == 3 && carta5.elemento == 1) {
            console.log("Voce perdeu!");
        }


        if(carta5.elemento == cartaAdv5.elemento) {
            if(carta5.numero > cartaAdv5.numero) {
                console.log("Voce ganhou!");
            }
            if(carta5.numero < cartaAdv5.numero) {
                console.log("Voce perdeu!")
            }
            if(carta5.numero == cartaAdv5.numero) {
                console.log("Empate");
            }
        }
    }

    function timer(c) {
        var time = 2000;
        if(c == 1) {
            setTimeout(() => {
                document.getElementById("computador-joga").style.backgroundImage = "url(imgs/" + cartaAdv1.url + ")";
            }, time);
        } else if (c == 2) {
            setTimeout(() => {
                document.getElementById("computador-joga").style.backgroundImage = "url(imgs/" + cartaAdv2.url + ")";
            }, time);
        } else if (c == 3) {
            setTimeout(() => {
                document.getElementById("computador-joga").style.backgroundImage = "url(imgs/" + cartaAdv3.url + ")";
            }, time);
        } else if (c == 4) {
            setTimeout(() => {
                document.getElementById("computador-joga").style.backgroundImage = "url(imgs/" + cartaAdv4.url + ")";
            }, time);
        } else if (c == 5) {
            setTimeout(() => {
                document.getElementById("computador-joga").style.backgroundImage = "url(imgs/" + cartaAdv5.url + ")";
            }, time);
        }
    }

    function timerAparecerCartaAdv() {
        setTimeout(() => {
            document.getElementById("computador-joga").style.backgroundImage = "url(imgs/01trazeira.png)";
        }, 1000);
    }

    function delayProxRodada() {
        setTimeout(()=>{
            document.getElementById("computador-joga").style.backgroundImage = "url(imgs/01trazeira.png)";
            document.getElementById("jogador-joga").style.backgroundImage = "url(imgs/01trazeira.png)";
            setTimeout(()=>{
                document.getElementById("computador-joga").style.backgroundImage = "none";
                document.getElementById("jogador-joga").style.backgroundImage = "none";
            },1000);
        },3500);
    }

    

    function cartaUsada(nc) {
        if(nc == 1) {
            var cj1 = document.getElementById("carta-jogador1");
            cj1.style.backgroundImage = "url(imgs/01trazeira.png)";
            cj1.style.pointerEvents = "none";
        } else if(nc == 2) {
            var cj2 = document.getElementById("carta-jogador2");
            cj2.style.backgroundImage = "url(imgs/01trazeira.png)";
            cj2.style.pointerEvents = "none";
        } else if(nc == 3) {
            var cj3 = document.getElementById("carta-jogador3");
            cj3.style.backgroundImage = "url(imgs/01trazeira.png)";
            cj3.style.pointerEvents = "none";
        } else if(nc == 4) {
            var cj4 = document.getElementById("carta-jogador4");
            cj4.style.backgroundImage = "url(imgs/01trazeira.png)";
            cj4.style.pointerEvents = "none";
        } else if(nc == 5) {
            var cj5 = document.getElementById("carta-jogador5");
            cj5.style.backgroundImage = "url(imgs/01trazeira.png)";
            cj5.style.pointerEvents = "none";
        }
    } 

   


    //Anotação: tirar o btn e criar um função genérica pra conferência de cada carta
    //Prox game: Desafio da agua no club penguin



    

    

}






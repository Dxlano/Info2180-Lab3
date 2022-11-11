"use strict";


window.onload = function(){

    let state = []
    let player = "X"
    let stats = document.getElementById("status")
    const win_moves = [[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]]

    let gameboard = document.getElementById("board").children

    for(let i =0; i<9; i++){
        gameboard[i].classList.add("square")
        console.log(gameboard[i])
        gameboard[i].addEventListener("click", function(){

        
            if (player == "X"){
                this.innerHTML = "X"
                this.classList.add("X")
                state[i] = player
                player = "O"
                console.log(state)
                x_click +=i
            }
            else if (player == "O"){
                this.innerHTML = "O"
                this.classList.add("O")
                state[i] = player
                player = "X"
                console.log(state)
                o_click += i
            }

            //Hover
            gameboard[i].addEventListener("mouseover", function(){
                this.classList.add("hover")
            })

            gameboard[i].addEventListener("mouseout", function(){
                this.classList.remove("hover")
            })

        })

        
                
    }
    /*    
    function winner(player){
        return win_moves.some(lst =>{
            return lst.every(i =>{
                return gameboard[i].classList.contains(player)
            })
        })
        
    }

    if(winner("X")){
        stats.textContent = "Congratulations! X is the Winner!" 
        stats.classList.add(you-won)
    }
    else if(winner("O")){
        stats.textContent = "Congratulations! O is the Winner!"
        stats.classList.add(you-won)
    }
    else{
        stats.textContent = "There was no winner!"
    }
     
    function gameBtn(){
        gameRunning = true
        whoseTurn = X
        state = []
        stats.textContent = "Move your mouse over a square and click to play an X or an O."
        stats.classList.remove("you-won")
        for (let i =0; i < count; i++){
            gameboard[i].classList.remove("X")
            gameboard[i].classList.remove("O")
            gameboard[i].textContent =''
        }
    } 
    */

}


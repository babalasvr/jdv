
document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){

    let square = event.target;
    let position = square.id;
    
    if(handleMove(position))
    {
        setTimeout(() =>{
            if(playertime == 0)
            {
                playertime = 'batata-frita'
            }
            else{playertime = 'bacon'}
            alert('O vencedor foi o ' + playertime);
        },10)
    }
    updateSquares();
}

function updateSquares(){

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'> </div>`
        }
    }) 
       
}

function updateSquaresReset(){
    
    location.reload();
}

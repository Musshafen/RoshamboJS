import './style.css'

let p1 = ''
let p2 = ''

// Winner Display

let winner = document.querySelector('.winner')

// Reset Button
const resetButton = document.querySelector('.resetbutton')

function handleClickOnResetButton(event: Event) {
  p1 = ''
  p2 = ''

  const buttonClickedOn = event.target

  if (buttonClickedOn instanceof HTMLElement) {
    if (winner) {
      winner.textContent = 'Winner Announcement'
    }
  }
}
resetButton?.addEventListener('click', handleClickOnResetButton)

// ----------------------Player 1,2 RPS elements--------------------------------------

const rock1 = document.querySelector('.rock1')
console.log(rock1)
const paper1 = document.querySelector('.paper1')
console.log(paper1)
const scissors1 = document.querySelector('.scissors1')
console.log(scissors1)
const lizard1 = document.querySelector('.lizard1')
console.log(lizard1)
const spock1 = document.querySelector('.spock1')
console.log(spock1)

const rock2 = document.querySelector('.rock2')
console.log(rock2)
const paper2 = document.querySelector('.paper2')
console.log(paper2)
const scissors2 = document.querySelector('.scissors2')
console.log(scissors2)
const lizard2 = document.querySelector('.lizard2')
console.log(lizard2)
const spock2 = document.querySelector('.spock2')
console.log(spock2)

// -------------------------------------Player 1 Options-------------------------------------

// P1 click rock function

function handleClickRock1Button(event: Event) {
  console.debug('p1 clicked rock')
  p1 = 'rock'

  const buttonClickedOn = event.target

  if (buttonClickedOn instanceof HTMLElement) {
    if (p2 != '' && p2 === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    } else if (p2 != '' && p2 === 'paper') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    } else if (p2 != '' && p2 === 'rock') {
      if (winner) {
        winner.textContent = 'Draw!'
      }
    } else if (p2 != '' && p2 === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    } else if (p2 != '' && p2 === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    }
  }
}
rock1?.addEventListener('click', handleClickRock1Button)

// P1 click paper function

function handleClickPaper1Button(event: Event) {
  console.debug('p1 clicked paper')
  p1 = 'paper'

  const buttonClickedOn = event.target

  if (buttonClickedOn instanceof HTMLElement) {
    if (p2 != '' && p2 === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    } else if (p2 != '' && p2 === 'paper') {
      if (winner) {
        winner.textContent = 'Draw'
      }
    } else if (p2 != '' && p2 === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    } else if (p2 != '' && p2 === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    } else if (p2 != '' && p2 === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    }
  }
}
paper1?.addEventListener('click', handleClickPaper1Button)

// P1 click scissor function

function handleClickScissors1Button(event: Event) {
  console.debug('p1 clicked scissors')
  p1 = 'scissors'

  const buttonClickedOn = event.target

  if (buttonClickedOn instanceof HTMLElement) {
    if (p2 != '' && p2 === 'scissors') {
      if (winner) {
        winner.textContent = 'Draw'
      }
    } else if (p2 != '' && p2 === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    } else if (p2 != '' && p2 === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 wins'
      }
    } else if (p2 != '' && p2 === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    } else if (p2 != '' && p2 === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    }
  }
}

scissors1?.addEventListener('click', handleClickScissors1Button)

// P1 click lizard function

function handleClickLizard1Button(event: Event) {
  console.debug('p1 clicked lizard')
  p1 = 'lizard'

  const buttonClickedOn = event.target

  if (buttonClickedOn instanceof HTMLElement) {
    if (p2 != '' && p2 === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    } else if (p2 != '' && p2 === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    } else if (p2 != '' && p2 === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    } else if (p2 != '' && p2 === 'lizard') {
      if (winner) {
        winner.textContent = 'Draw!'
      }
    } else if (p2 != '' && p2 === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    }
  }
}
lizard1?.addEventListener('click', handleClickLizard1Button)

// P1 click spock function

function handleClickSpock1Button(event: Event) {
  console.debug('p1 clicked spock')
  p1 = 'spock'

  const buttonClickedOn = event.target

  if (buttonClickedOn instanceof HTMLElement) {
    if (p2 != '' && p2 === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    } else if (p2 != '' && p2 === 'paper') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    } else if (p2 != '' && p2 === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    } else if (p2 != '' && p2 === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    } else if (p2 != '' && p2 === 'spock') {
      if (winner) {
        winner.textContent = 'Draw!'
      }
    }
  }
}
spock1?.addEventListener('click', handleClickSpock1Button)

// -------------------------------------Player 2 Options-------------------------------------
// P2 click rock function

function handleClickRock2Button(event: Event) {
  console.debug('p2 clicked rock')
  p2 = 'rock'

  const buttonClickedOn = event.target

  if (buttonClickedOn instanceof HTMLElement) {
    if (p1 != '' && p1 === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    } else if (p1 != '' && p1 === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    } else if (p1 != '' && p1 === 'rock') {
      if (winner) {
        winner.textContent = 'Draw!'
      }
    } else if (p1 != '' && p1 === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    } else if (p1 != '' && p1 === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    }
  }
}
rock2?.addEventListener('click', handleClickRock2Button)

// P2 click paper function

function handleClickPaper2Button(event: Event) {
  console.debug('p2 clicked paper')
  p2 = 'paper'

  const buttonClickedOn = event.target

  if (buttonClickedOn instanceof HTMLElement) {
    if (p1 != '' && p1 === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    } else if (p1 != '' && p1 === 'paper') {
      if (winner) {
        winner.textContent = 'Draw'
      }
    } else if (p1 != '' && p1 === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    } else if (p1 != '' && p1 === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    } else if (p1 != '' && p1 === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    }
  }
}
paper2?.addEventListener('click', handleClickPaper2Button)

// P2 click scissor function

function handleClickScissors2Button(event: Event) {
  console.debug('p2 clicked scissors')
  p2 = 'scissors'

  const buttonClickedOn = event.target

  if (buttonClickedOn instanceof HTMLElement) {
    if (p1 != '' && p1 === 'scissors') {
      if (winner) {
        winner.textContent = 'Draw'
      }
    } else if (p1 != '' && p1 === 'paper') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    } else if (p1 != '' && p1 === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    } else if (p1 != '' && p1 === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    } else if (p1 != '' && p1 === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    }
  }
}

scissors2?.addEventListener('click', handleClickScissors2Button)
// P2 click lizard function

function handleClickLizard2Button(event: Event) {
  console.debug('p2 clicked lizard')
  p2 = 'lizard'

  const buttonClickedOn = event.target

  if (buttonClickedOn instanceof HTMLElement) {
    if (p1 != '' && p1 === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    } else if (p1 != '' && p1 === 'paper') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    } else if (p1 != '' && p1 === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    } else if (p1 != '' && p1 === 'lizard') {
      if (winner) {
        winner.textContent = 'Draw!'
      }
    } else if (p1 != '' && p1 === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    }
  }
}
lizard2?.addEventListener('click', handleClickLizard2Button)

// P2 click spock function

function handleClickSpock2Button(event: Event) {
  console.debug('p2 clicked spock')
  p2 = 'spock'

  const buttonClickedOn = event.target

  if (buttonClickedOn instanceof HTMLElement) {
    if (p1 != '' && p1 === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    } else if (p1 != '' && p1 === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    } else if (p1 != '' && p1 === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 Wins'
      }
    } else if (p1 != '' && p1 === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 Wins'
      }
    } else if (p1 != '' && p1 === 'spock') {
      if (winner) {
        winner.textContent = 'Draw!'
      }
    }
  }
}
spock2?.addEventListener('click', handleClickSpock2Button)

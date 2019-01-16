let total = 0
    let goal = (Math.floor(Math.random() * 80) + 20)
    $('goal').text(goal)

    for (let i = 0; i < 4; i++) {
      $('.crystalRow').append(`
  <div class="col-md-4">
    <img class="crystal" data-crystal=${Math.floor(Math.random() * 15) + 1} 
    src="./assets/images/crystal${i}.jpg" alt="crystal${i}">
    </div>
    `)
    }

    $('.crystal').on('click', function () {
      let crystalValue = $(this).attr('data-crystal')
      total += parseInt(crystalValue)
      $('.total').text(total)
      gameStatus()
    })

    function gameStatus () {
      if (goal === total) {
        alert('You Win!')
        reset ()
      } else if (total > goal) {
        alert('You Lose!')
        reset()
      }
    }

    function reset () {
      $('.crystal').attr('data-crystal', (Math.floor(Math.random() * 15) +1))
      total = 0
      $('.total').text(total)
      goal = (Math.floor(Math.random() * 80) + 20)
    }
$(function () {
  'use strict'
  let $img = $('img')
  let $starAgainBtn = $('#star_again')
  let $celebrationImage = $('#celebrationImage')

  // $($celebrationImage).hide()

  let images = [
    'img/ninja0.png',
    'img/ninja1.png',
    'img/ninja2.png',
    'img/ninja3.png',
    'img/ninja4.png',
    'img/cat1.png',
    'img/cat2.png',
    'img/cat3.png',
    'img/cat4.png',
    'img/cat0.png',
  ]

  const getRandomImage = () => {
    let randomNumber = Math.floor(Math.random() * 10)
    console.log(images[randomNumber])
    return images[randomNumber]
  }

  const checkWinner = () => {
    if (
      $('#img01').attr('src') === 'img/cat0.png' &&
      $('#img02').attr('src') === 'img/cat1.png' &&
      $('#img03').attr('src') === 'img/cat2.png' &&
      $('#img04').attr('src') === 'img/cat3.png' &&
      $('#img05').attr('src') === 'img/cat4.png'
    )
      $($celebrationImage).show()
  }

  $img.click(function () {
    $(this).attr('src', getRandomImage())
    checkWinner()
  })

  $starAgainBtn.click(function () {
    $($celebrationImage).hide()
    $('#img01').attr('src', getRandomImage())
    $('#img02').attr('src', getRandomImage())
    $('#img03').attr('src', getRandomImage())
    $('#img04').attr('src', getRandomImage())
    $('#img05').attr('src', getRandomImage())
  })
  // $restoreBtn.click(function () {
  //   $('.card').show(1000)
  // })
})

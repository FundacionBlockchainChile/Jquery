$(function () {
  'use strict'
  let $pokemonContainer = $('#pokemonContainer')
  let $deleteBtn = $('#delete')
  let $loadBtn = $('#loadBtn')
  let $i = 1

  const addDeleteMessage = () => {
    let $card = $('.card')
    $card.click(function () {
      $(this).hide(1000)
    })
    $card
      .mouseenter(function () {
        $(this).removeClass('bg-dark')
        $(this).addClass('bg-danger')
      })
      .mouseleave(function () {
        $(this).removeClass('bg-danger')
        $(this).addClass('bg-dark')
      })
  }

  const loadPokemones = () => {
    $pokemonContainer.append(
      `<div class="card bg-dark" style="width: 5rem"><img class="card-img-top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${$i}.png" alt="Card image cap" /></div>`
    )
    addDeleteMessage()
    $i++
  }

  $('h5').hide()

  $deleteBtn.click(function () {
    $('.card').hide(1000)
  })
  $loadBtn.click(function () {
    for (let j = 0; j < 15; j++) {
      loadPokemones()
    }
  })

  for (let j = 0; j < 15; j++) {
    loadPokemones()
  }
})

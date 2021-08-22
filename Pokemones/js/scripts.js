$(function () {
  'use strict'
  let $pokemonContainer = $('#pokemonContainer')
  let $deleteBtn = $('#delete')
  let $loadBtn = $('#loadBtn')
  let $i = 1

  const renderSkills = (res) => {
    $('#name').text(res.name.charAt(0).toUpperCase() + res.name.slice(1))
    $('#typeOfPokemon').text(
      res.types[0].type.name.charAt(0).toUpperCase() +
        res.types[0].type.name.slice(1)
    )
    $('#height').text(res.height)
    $('#weight').text(res.weight)
  }

  const clearSkills = () => {
    $('#name').text('')
    $('#typeOfPokemon').text('')
    $('#height').text('')
    $('#weight').text('')
  }

  const addDeletAndHover = (id) => {
    let $card = $(`#${id}`)

    $card.click(function () {
      $(this).hide(1000)
      clearSkills()
    })

    $card
      .mouseenter(function () {
        $(this).removeClass('bg-dark')
        $(this).addClass('bg-danger')
        let id = $(this).attr('id')
        console.log(id)
        $.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`,
          function showPokemonSkills(res) {
            renderSkills(res)
          }
        )
      })
      .mouseleave(function () {
        $(this).removeClass('bg-danger')
        $(this).addClass('bg-dark')
      })
  }

  const loadPokemones = () => {
    $pokemonContainer.append(
      `<div id="${$i}" class="card bg-dark" style="width: 6.5rem"><img class="card-img-top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${$i}.png" alt="Card image cap" /></div>`
    )
    addDeletAndHover($i)
    $i++
  }

  $('h5').hide()

  $deleteBtn.click(function () {
    $('.card').hide(1000)
    clearSkills()
  })

  $loadBtn.click(function () {
    for (let j = 0; j < 15; j++) {
      loadPokemones()
    }
  })

  // Load first 15 pokemones at Init
  for (let j = 0; j < 15; j++) {
    loadPokemones()
  }
})

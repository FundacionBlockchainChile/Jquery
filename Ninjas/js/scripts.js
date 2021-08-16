$(function () {
  'use strict'
  let $card = $('.card')
  let $deleteBtn = $('#delete')
  let $restoreBtn = $('#restore')

  $('h5').hide()

  $card.click(function () {
    $(this).hide(1000)
  })
  $card
    .mouseenter(function () {
      $(this).children('h5').show()
    })
    .mouseleave(function () {
      $(this).children('h5').hide()
    })

  $deleteBtn.click(function () {
    $('.card').hide(1000)
  })
  $restoreBtn.click(function () {
    $('.card').show(1000)
  })
})

$(function () {
  'use strict'
  let $card = $('.card')
  let $deleteBtn = $('#delete')
  let $restoreBtn = $('#restore')

  $card.click(function () {
    $(this).hide()
  })

  $deleteBtn.click(function () {
    $('.card').hide()
  })
  $restoreBtn.click(function () {
    $('.card').show()
  })
})

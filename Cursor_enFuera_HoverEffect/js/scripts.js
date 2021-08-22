// jQuery
$(() => {
  let images = [
    {
      defaultImage:
        'https://images.unsplash.com/photo-1606952222435-71dab5cc31d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
      hoverImage:
        'https://images.unsplash.com/photo-1606952173005-8fa49fc733bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      defaultImage:
        'https://images.unsplash.com/photo-1602562887763-851fa56061e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      hoverImage:
        'https://images.unsplash.com/photo-1602751184945-8e83a100b3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      defaultImage:
        'https://images.unsplash.com/photo-1590342186485-b611197a5aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      hoverImage:
        'https://images.unsplash.com/photo-1590342165376-886062a9f268?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      defaultImage:
        'https://images.unsplash.com/photo-1545051620-402f165102b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      hoverImage:
        'https://images.unsplash.com/photo-1545051310-ab6bae74dfae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ]

  let $img = $('img')
  let $imgOne = $('#0')
  let $imgTwo = $('#1')
  let $imgThree = $('#2')
  let $imgFour = $('#3')
  let $descriptions = $('.description')

  $img
    .mouseenter(function () {
      $(this).removeClass('border-gray')
      $(this).addClass('border-red')
      let id = $(this).attr('id')
      console.log(id)
      $(this).attr('src', images[id].hoverImage)
      $(this).siblings('.description').show()
    })
    .mouseleave(function () {
      $(this).removeClass('border-red')
      $(this).addClass('border-gray')
      let id = $(this).attr('id')
      console.log(id)
      $(this).attr('src', images[id].defaultImage)
      $(this).siblings('.description').hide()
    })

  // App Init

  $descriptions.hide()

  $imgOne.attr('src', images[0].defaultImage)
  $imgTwo.attr('src', images[1].defaultImage)
  $imgThree.attr('src', images[2].defaultImage)
  $imgFour.attr('src', images[3].defaultImage)
})

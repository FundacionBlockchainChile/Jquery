$(function () {
  'use strict'
  let $group = $('#group-students')
  let $errorMessage = $('#errorMessage')
  let $messageButton = $('#messageButton')
  $group.append(
    '<label>Edad</label><input type="number" name="alumno[]" placeholder="Edad" /><hr />'
  )
  $group.append(
    '<label>Password</label><input type="password" name="alumno[]" placeholder="Password" /><hr />'
  )

  $messageButton.on('click', (event) => {
    event.preventDefault()
    $errorMessage.append(
      '<div class="alert alert-warning alert-dismissible fade show" role="alert" ><strong>Holy guacamole!</strong> You should check in on some of those fields below.<button type="button" class="close" data-dismiss="alert" aria-label="Close" ><span aria-hidden="true">&times;</span></button></div>'
    )
  })
})

function ajaxDelete(url) {
  const headers = {
    'csrf-token': $('[name="_csrf"]').val()
  }
  return Promise.resolve(
    $.ajax({
      url,
      method: 'DELETE',
      dataType: 'json',
      headers
    })
  )
}

function my_confirm(str) {

  let _resolve, _reject

  const $modal = $('.confirm-modal')
  $modal.modal('show')

  $modal.find('.modal-ok').on('click', function (e) {
    _resolve(true)
  })
  $modal.find('.modal-cancel').on('click', function (e) {
    _resolve(false)
  })

  return new Promise(function (resolve, reject) {
    _resolve = resolve
    _reject = reject
  })
}

$('#btnDelete').on('click', function (e) {
  e.preventDefault()
  my_confirm('Biztosan törlöd a filmet?')
    .then(response => {
      if (response) {
        const url = '/ajax' + $(this).attr('href');
        ajaxDelete(url)
          .then(data => {
            location.assign('/')
          })
          .catch(xhr => {
            $('.help-block').text(xhr.responseText)
          })
      }
    })
})
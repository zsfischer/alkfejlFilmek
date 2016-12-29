function ajaxLogout(url) {
  const headers = {
    'csrf-token': $('[name="_csrf"]').val()
  }
  return Promise.resolve(
    $.ajax({
      url: '/ajax/logout',
      method: 'GET',
      dataType: 'json',
      headers
    })
  )
}

function my_confirm(str) {

  let _resolve, _reject

  const $modal = $(`
      <div class="modal fade confirm-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
        <div class="modal-body">
            ${str}
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-success modal-ok" data-dismiss="modal">OK</button>
            <button type="button" class="btn btn-danger modal-cancel" data-dismiss="modal">Mégse</button>
        </div>
        </div>
    </div>
</div>
`)

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

$('#btnLogout').on('click', function (e) {
  e.preventDefault()
  my_confirm('Biztosan kijelentkezel?')
    .then(response => {
      if (response) {
        ajaxLogout()
          .then(data => {
            location.assign('/')
          })
      }
    })
})
$('#btnRegister').on('click', function (e) {
  e.preventDefault()

  let $modal = $('.modal')

    $modal = $(`
      <div class="modal fade confirm-modal" tabindex="-1" role="dialog" id="registerModal">
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
            <div class="modal-header">Regisztráció</div>
            <div class="modal-body">
              <div class="alert alert-danger"></div>
              <div class="form-area"></div>
            </div>
          </div>
        </div>
      </div>
    `)

    const $formContainer = $modal.find('.form-area')
    const $errorContainer = $modal.find('.alert').hide()
    
    $formContainer.load('/register form', function() {
      $modal.modal('show')
      const $loginForm = $modal.find('form')
      $loginForm.on('reset', function (e) {
          $modal.modal('hide')
      })
      $loginForm.on('submit', function (e) {
        e.preventDefault()
        $errorContainer.hide()
        const data = $(this).serializeArray()
        Promise.resolve(
          $.ajax({
            url: '/ajax/register',
            method: 'POST',
            data,
            dataType: 'json',
            headers: { 'csrf-token': $('[name="_csrf"]').val() }
          })
          
        ).then(json => {
          if (json.success) {
            location.assign('/')
          } else {
            $errorContainer.text('Hibás adatok!').show()
          }
        })
      })
    })
  
})
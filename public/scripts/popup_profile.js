$('#btnProfile').on('click', function (e) {
  e.preventDefault()

  let $modal = $('.modal')
  //const hasModal = $modal.length

  //if (hasModal) {
  //  $modal.modal('show')
  //  return
  //} else {
    $modal = $(`
      <div class="modal fade confirm-modal" tabindex="-1" role="dialog" id="profileModal">
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
            <div class="modal-header">Személyes adatok</div>
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

    $formContainer.load('/profile form', function() {
      $modal.modal('show')
      const $profileForm = $modal.find('form')
      $profileForm.on('submit', function (e) {
        e.preventDefault()
        $errorContainer.hide()
        const data = $(this).serializeArray()
        Promise.resolve(
          $.ajax({
            url: '/ajax/profile',
            method: 'POST',
            data,
            dataType: 'json',
            headers: { 'csrf-token': $('[name="_csrf"]').val() }
          })
        ).then(json => {
          if (json.success) {
            $('#navbar').load('/ #navbar', function () {
              $modal.modal('hide')
            })
            location.assign('/subjects')
          } else {
            $errorContainer.text('Hibás adatok!').show()
          }
        })
      })
    })
  //}
})
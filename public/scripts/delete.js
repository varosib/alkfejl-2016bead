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

function delete_confirm(str) {
  let _resolve, _reject

  const $modal = $(`
    <div class="modal fade confirm-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
        <div class="modal-body">
            Biztosan törölni szeretnéd?
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

$('#btnDelete').on('click', function (e) {
  e.preventDefault()
  delete_confirm('Biztosan törlöd a tárgyat?')
    .then(response => {
      if (response) {
        const url = '/ajax' + $(this).attr('href');
        ajaxDelete(url)
          .then(data => {
            location.assign('/subjects')
          })
          .catch(xhr => {
            $('.help-block').text(xhr.responseText)
          })
      }
    })
})
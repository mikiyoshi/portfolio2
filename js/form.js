$('form').submit(function (event) {
  event.preventDefault();

  //get the form data
  let formData = {
    name: $('input[name=name]').val(),
    email: $('input[name=email]').val(),
    message: $('textarea[name=message]').val(),
  };

  // process the form
  $.ajax({
    method: 'POST',
    url: 'https://formsubmit.co/ajax/mikiyoshi.kokura@gmail.com',
    dataType: 'json',
    accepts: 'application/json',
    data: {
      _subject: 'MK Portfolio contact form',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
    success: (data) => console.log('data: ', data),
    error: (err) => console.log('err: ', err),
  }).done(function (data) {
    if (data.success !== 'true') {
      $('.response')
        .empty()
        .append('Something went wrong, please try again later.')
        .addClass('alert alert-danger');
    } else {
      $('.response')
        .empty()
        .append(data.message)
        .addClass('alert alert-success');
      formData = {
        name: $('input[name=name]').val(''),
        email: $('input[name=email]').val(''),
        message: $('textarea[name=message]').val(''),
      };
    }
  });
});

$.get('partials/navbar.html')
    .success(function(text)
    {
        var navbar=$(text);
        // console.log(navbar);
        $(document.body).prepend(navbar);
    })
    .fail(function(err)
    {
        console.error('failed to load the navbar !')
    })
;
// TODO : set navbar active item based on the location !
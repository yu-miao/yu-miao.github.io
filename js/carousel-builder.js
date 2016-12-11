function build_carousel(dir,num)
{
    var div=document.createElement('div');
    div.id='slider';
    div.class='carousel slide';
    div.setAttribute('data-ride','carousel');
    var ol=document.createElement('ol');
    ol.class='carousel-indicators';
    div.appendChild(ol);
    document.body.appendChild(div);
}

function lib_ready()
{
    build_carousel()
}
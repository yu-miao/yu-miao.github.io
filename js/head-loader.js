set_base();
load_libs
(
    [
        'lib/bootstrap/bootstrap.min.css',
        'css/style.css'
    ],
    [
        'lib/jquery/jquery.min.js',
        'lib/bootstrap/bootstrap.min.js',
        'js/navbar-loader.js'
    ]
);

function load_libs(css,js)
{

    css.forEach(function(ele)
    {
        var link=document.createElement('link');
        link.rel='stylesheet';
        link.href=ele;
        document.head.appendChild(link);
    });
    function load_js()
    {
        var ele=js.shift();
        if(!ele)
        {
            call_lib_ready();
            return ;
        }
        var xhr=new XMLHttpRequest();
        xhr.open('get',ele);
        xhr.onreadystatechange=function()
        {
            if(this.readyState==4 && this.status==200)
            {
                eval(this.response);
                load_js();
            }
        };
        xhr.send();
    }
    load_js();
    // js.forEach(function(ele)
    // {
        // var script=document.createElement('script');
        // script.src=ele;
        // document.head.appendChild(script);
    // })
}

function set_base()
{
    var url;
    if(/localhost/.test(location.href))
    {
        url=location.origin+'/'+location.pathname.split('/')[1]+'/';
    }
    else
    {
        url=location.origin+'/';
    }
    var base=document.createElement('base');
    base.href=url;
    document.head.appendChild(base);
}

function call_lib_ready()
{
    if(lib_ready)
    {
        lib_ready();
    }
    else
    {
        setTimeout(function()
        {
            call_lib_ready();
        },100);
    }
}

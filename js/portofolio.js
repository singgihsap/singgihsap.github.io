$(function(){
    $("#portofolio").elastic_grid({
        'showAllText' : 'All',
        'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
        'hoverDirection': true,
        'hoverDelay': 0,
        'hoverInverse': false,
        'expandingSpeed': 500,
        'expandingHeight': 500,
        'items' :
        [
            {
                'title'         : 'Make A Wish Singapore',
                'description'   : 'Make-A-Wish Foundation Singapore grants the wishes of children with life-threatening illnesses.',
                'thumbnail'     : ['images/small/mawsg.png', 'images/small/mawsg.png'],
                'large'         : ['images/large/mawsg.png', 'images/large/mawsg.png'],
                'button_list'   :
                [
                    { 'title':'View', 'url' : 'http://makeawish.org.sg/' }
                ],
                'tags'          : ['Portrait']
            },
            {
                'title'         : 'Wonderlabs Platform',
                'description'   : 'We are bridging the gap between amazing projects and startups all over the world, and amazing technical talent from Indonesia. Our AI-powered platform makes it completely effortless and incredibly cost effective to get software built by Indonesia best designers and engineers.',
                'thumbnail'     : ['images/small/wlp.png', 'images/small/wlp.png'],
                'large'         : ['images/large/wlp.png', 'images/large/wlp.png'],
                'button_list'   :
                [
                    { 'title':'View', 'url' : 'https://wonderlabs.io/' }
                ],
                'tags'          : ['Vintage']
            },
            {
                'title'         : 'Asosiasi Gudeg Yogyakarta',
                'description'   : 'Asosiation Gudeg in Yogyakarta',
                'thumbnail'     : ['images/small/gudeg.png', 'images/small/gudeg.png'],
                'large'         : ['images/large/gudeg.png', 'images/large/gudeg.png'],
                'button_list'   :
                [
                    { 'title':'View', 'url' : 'http://www.gudegaspeg.com/' }
                ],
                'tags'          : ['Vintage']
            },
            {
                'title'         : 'AmtekCommerce',
                'description'   : 'Ecommerce',
                'thumbnail'     : ['images/small/ecomtek.png', 'images/small/ecomtek.png'],
                'large'         : ['images/large/ecomtek.png', 'images/large/mawsg.png'],
                'button_list'   : [],
                'tags'          : ['BW']
            }
        ]
    });
});
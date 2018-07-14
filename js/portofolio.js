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
                'title'         : 'Piquelabs Learning Center',
                'description'   : 'Piquelabs Learning Center',
                'thumbnail'     : ['images/small/piquelabs-sm.png', 'images/small/piquelabs-sm.png'],
                'large'         : ['images/large/piquelabs-lg.png', 'images/large/piquelabs-lg.png'],
                'button_list'   :
                [
                    { 'title':'View', 'url' : 'http://piquehosted.com/' }
                ],
                'tags'          : ['Portrait']
            },
            {
                'title'         : 'SMUpreneurs BizHub',
                'description'   : 'SMUpreneurs BizHub',
                'thumbnail'     : ['images/small/bizhub-sm.png', 'images/small/bizhub-sm.png'],
                'large'         : ['images/large/bizhub-lg.png', 'images/large/bizhub-lg.png'],
                'button_list'   :
                    [
                        { 'title':'View', 'url' : 'http://bizhub.smupreneurs.com/' }
                    ],
                'tags'          : ['Portrait']
            },
            {
                'title'         : 'Launchpad Ecosystem',
                'description'   : 'The Densiest Startup Ecoystem in The World',
                'thumbnail'     : ['images/small/lcpd.png', 'images/small/lcpd.png'],
                'large'         : ['images/large/lcpd.png', 'images/large/lcpd.png'],
                'button_list'   :
                    [
                        { 'title':'View', 'url' : 'http://launchpad.techsg.io/' }
                    ],
                'tags'          : ['Portrait']
            },
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
                'button_list'   : [],
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
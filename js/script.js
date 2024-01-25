
$ (function() {

// navbar sticky-menu area
  $ (window).on ('scroll', function () {
    let sticky = $ ( this ).scrollTop ()
    if ( sticky > 100 ) {
      $ ('#navbar').addClass ('sticky-menu')
    }

    else {
      $ ('#navbar').removeClass ('sticky-menu')
    }
  })

// ======= skill progress bar js ==========
  $('.skill_bar').circlechart();
  
// ======= mixitUp js for portfolio section ==========
  var mixer = mixitup ('.mixitup-main');

  // Back-to-top clients speeks area
  $ ('#bottom-top_btn').on ('click', function () {
    $ ('html,body').animate ({scrollTop:0},1000)
  })

  $ (window).on ('scroll',function (){
  let backToTop = $ (this).scrollTop ()
  if ( backToTop > 600 ) {
    $ ('#bottom-top_btn').fadeIn (600)
  }
  else {
    $ ('#bottom-top_btn').fadeOut (600)
  }
  })

})

    
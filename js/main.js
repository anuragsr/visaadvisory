(function($){
    "use strict"

    var htmlint = {};

    /* =============================================
    Pre Load
    ============================================= */
    htmlint.WebLoad = function(){
        $("#loading").fadeOut(300);
    }               
      
 
    /* =============================================
    Smooth Scroll
    ============================================= */
     htmlint.HeaderScroll = function(){    
        $('a[href*="#"]:not([href="#"])').on('click', function(e) {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top ,
                      }, 1000);
                      return false;
                  }
            }
        });
    }


   
  /*=============================================
    Header Fixed
    ============================================= */
  htmlint.HeaderFixed = function () {
    var scroll = $(window).scrollTop();
    var pointofcroll = 0;
    if($(".banner").length){
       pointofcroll = $(".banner").offset().top + 50;
    }
    if (scroll >= pointofcroll) {
      $("header").addClass("scrollheader");
    } else {
      $("header").removeClass("scrollheader");
    }
  };

    /* =============================================
    Menu Close
    ============================================= */
    htmlint.MenuClose = function(){
        $('.navbar-nav .nav-link').on('click', function(e) {
            var toggle = $('.navbar-toggler').is(':visible');
            if (toggle) {
                $('.navbar-collapse').collapse('hide');
            }
        });
    }

    /* =============================================
    slider video
    ============================================= */
    htmlint.sliderowlCarousel = function(){
        var $slider = $('[data-sliderowl]');
        if($slider.length){
          $slider.owlCarousel({
                center: true,
                items:1,
                loop:false,
                margin:10,
                autoWidth:true,
                URLhashListener:true,
                nav:false,
                dots:false,
                responsive:{
                    600:{
                        items:1
                    }
                }
            });
            $slider.on('changed.owl.carousel', function(property) {
              var current = property.item.index;
              $('.slidernav li').removeClass('active')
              $('.slidernav li').eq(current).addClass('active')
          })
        }
    }

    /* =============================================
    slider testimonial
    ============================================= */
    htmlint.slidertestimonial = function(){
      var $sliderTestimonial = $('[data-testimonialslider]');
      if($sliderTestimonial.length){
        $sliderTestimonial.owlCarousel({
              items:1,
              loop:false,
              margin:0,
              nav:true,
              dots:false,
              navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']             
          });          
      }
   }


   /*=============================================
    FAQ Accordion
    ============================================= */
    htmlint.faqaccordion = function(){
      $('.section-faq-accordion > h3').click(function () {
          var text = $(this).next('.faq-accordion-body');
          if (text.is(':hidden')) {
            text.slideDown('200');
            $(this).closest('.section-faq-accordion').addClass('active')
          } else {
            text.slideUp('200');
            $(this).closest('.section-faq-accordion').removeClass('active')
          }
        });
    }

    /*=============================================
    Form element
    ============================================= */
    htmlint.formel = function(){
      var handle = $( "#uisliderhandle" );
      var uilider =  $( "#uislider" );
      if(uilider.length){
        uilider.slider({
          range: "min",
          value: 2,
          min: 1,
          max: 12,
          create: function() {
            if(handle.length){
              handle.html( '<span>' + $( this ).slider( "value" ) + '</span>');
              uilider.next('input').val($( this ).slider( "value" ))
            }
          },
          slide: function( event, ui ) {
              handle.html('<span>' + ui.value + '</span>');
              uilider.next('input').val(ui.value)
          }
        });
      }

      var fileupalod = $("#uplaoddoc")
      if(fileupalod.length) {
        var myDropzone = new Dropzone("div#uplaoddoc", { 
              addRemoveLinks: true,
              autoProcessQueue: false,
              uploadMultiple: true,
              parallelUploads: 100,
              maxFiles: 1,
              paramName: 'file',
              clickable: true,
              url: 'fileupload.php',
              dictDefaultMessage:'Drag file into this field or <span class="text-red">click here</span> ',
              init: function() {
               
                this.on("addedfile", function(file) {
                  var higet = $('[data-fstep].activestep').innerHeight();
                  $('.postjob-section').css('height', higet);
                  $('[data-fstep].activestep').find('[data-fbtn="next"]').text('Next');
                 });
              }
          });         
      }

      var yearofbirth =  $( ".yearofbirth" );
      if(yearofbirth.length){
              yearofbirth.datepicker();
      }

          

    }

    htmlint.viewport = function(){
      if($("[data-imgviewport]").length){
        $('[data-imgviewport]').each(function(){
              var target  = $(this);
              var targetview = false;
              var src  = $(this).data('src');              
              $(window).on("scroll", function () {
                    var currentvalue = target.isInViewport();
                    if(!targetview & currentvalue ){
                       targetview = true;                      
                      if (targetview) {
                        if(src){
                          target.attr('src', src);
                        }
                      }
                   }
                   targetview = currentvalue;
             });
        })
      }
      
    }

    htmlint.mobileslider = function(){
          var mobileslider = $('.mobileslider');
          var mobileslider2 = $('.mobileslider2');
          if(mobileslider.length){
                mobileslider.owlCarousel({
                    loop:true,
                    margin:0,     
                    dots:false,
                    responsiveClass:true,
                    responsive:{
                        0:{
                            items:1,
                            nav:true
                        },
                        992:{
                            items:4,
                            nav:false,
                            loop:false
                        }
                    }
                });
          }
          if(mobileslider2.length){
            mobileslider2.owlCarousel({
                    loop:true,
                    margin:0,
                    responsiveClass:true,                    
                    dots:false,
                    responsive:{
                        0:{
                            items:1,
                            nav:true
                        },
                        992:{
                            items:5,
                            nav:true,
                            loop:false
                        }
                    }
                });
          }
    }

    /*=============================================
    Form Post Job
    ============================================= */
    htmlint.postjob = function(){
        var steppost =  $('[data-fstep]');
        var steppostLength = steppost.length;
        if(steppost.length){
            var stepform = {
                totalstep : steppostLength,
                activestep : 1,
                nextstep:1,
                targetstep : function(target){

                },
                runstep: function(){
                  var nextstep = $('[data-fstep="'+stepform.nextstep+'"]');                  
                  nextstep.addClass('activestep');
                  nextstep.removeClass('complatedstep');
                  stepform.activestep = stepform.nextstep;    
                  var higet = nextstep.innerHeight();
                  $('.postjob-section').css('height', higet);
                  stepform.progressbar();
                 

                },
                progressbar:function(){
                    var progressbar = $('[data-fstepprogress]');
                    var target  = ((100)/ stepform.totalstep) * stepform.activestep;
                    $(progressbar).css('width', target+'%');
                    if(stepform.activestep==1){
                      $('.backbutton').attr('disabled', true)
                    }else{
                      $('.backbutton').attr('disabled', false)
                    }
                   
                },
                sendajax:function(){
                      var formdata = $('form[name="postjob"]').serialize();   
                      $('.postjob-footer').fadeOut(500);   
                      $.post( "postjob.php", formdata).done(function( data ) {
                            $('[data-ajaxjobpost="loadding"]').hide();
                            $('[data-ajaxjobpost="done"]').removeClass('d-none');
                      });
                },
                formvalidation:function(){
                  steppost.each(function(){
                      var target = $(this);
                      var notvalid = true;
                      var id = target.data('fstep');

                      target.find('textarea').each(function(){   
                        var getvalue = $(this).val();
                        if(getvalue==""){
                             $(this).addClass('fieldempty');
                             if(id=="5"){
                                  target.find('[data-fbtn="next"]').text('Skip');
                              } 
                        }else{
                          if(id=="5"){
                            target.find('[data-fbtn="next"]').text('Next');
                        } 
                           $(this).removeClass('fieldempty')
                        } 
                                                
                      });
                      target.find('input').not('[type="radio"]').each(function(){   
                        var getvalue = $(this).val();
                        if(getvalue==""){
                             $(this).addClass('fieldempty')
                        }else{
                           $(this).removeClass('fieldempty')
                        }                        
                      });  

                        target.find('input[required]').not('[type="radio"]').each(function(){   
                            var ss = $(this)[0].checkValidity()
                            if(!ss){
                              notvalid = false;                              
                            }                           
                        });                       
                     
                        target.find('input[required][type="radio"]').each(function(){                        
                          var name  = $(this).attr('name');
                          var radios = document.getElementsByName(name);
                          var formValid = false;
                          var i = 0;
                          while (!formValid && i < radios.length) {
                              if (radios[i].checked) formValid = true;
                              i++;        
                          }
                          if (!formValid) {
                            notvalid = false;
                          };
                          return formValid;      
                        });

                      if(id=="3"){
                       
                          var getMonth = target.find('[name="Month"]').val();
                          var getYear = target.find('[name="Year"]').val();
                          var getsoonaspossible = target.find('[name="soonaspossible"]').is(':checked');
                          if((getMonth !='' & getYear !='' || getsoonaspossible)){
                            notvalid = true;                           
                          }else{
                            notvalid = false;
                          }
                        }  

                      if(!notvalid){
                        target.find('[data-fbtn="next"]').attr('disabled', true);
                        target.find('[data-fbtn="done"]').attr('disabled', true);
                      }else{
                        target.find('[data-fbtn="next"]').attr('disabled', false);
                        target.find('[data-fbtn="done"]').attr('disabled', false)
                      }
                      
                  });
                } 
            }
            $('input[name], textarea[name]').on('click keyup',function(){
              stepform.formvalidation();              
            })
            stepform.progressbar();
            stepform.runstep();
            stepform.formvalidation();
            $('[data-fbtn="back"]').click(function(){
                var currentstep = $('[data-fstep="'+stepform.activestep+'"]');
                stepform.nextstep = stepform.nextstep - 1;
                currentstep.removeClass('activestep');
                stepform.runstep();
            });
            $('[data-fbtn="next"]').click(function(){
              stepform.nextstep = stepform.nextstep + 1;              
              var currentstep = $('[data-fstep="'+stepform.activestep+'"]');
              currentstep.addClass('complatedstep').removeClass('activestep');
              stepform.runstep();
            });
            $('[data-fbtn="done"]').click(function(){
              stepform.nextstep = stepform.nextstep + 1;              
              var currentstep = $('[data-fstep="'+stepform.activestep+'"]');
              currentstep.addClass('complatedstep').removeClass('activestep');
              stepform.runstep();
              stepform.sendajax();  
            });



        }
    }

   
    /* =============================================
    Window on Load
    ============================================= */    
    $(window).on("load", function(){
        htmlint.WebLoad();       
    });

   

    /* =============================================
    Document on ready
    ============================================= */
    $(document).on("ready", function(){    
        htmlint.HeaderScroll();
        htmlint.MenuClose(); 
        htmlint.HeaderFixed();
        htmlint.sliderowlCarousel();
        htmlint.slidertestimonial();
        htmlint.faqaccordion();
        htmlint.formel();
        htmlint.postjob();
        htmlint.viewport();
        htmlint.mobileslider();
        
           
    });

    $(window).on("scroll", function () {
        htmlint.HeaderFixed();
    });
   

})(jQuery);

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

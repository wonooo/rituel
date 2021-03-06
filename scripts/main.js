$(document).ready(function () {

  //HEADER MENU
  $('#headerMobile').hide();
  $('.icon').on('click', function () {
    $('#headerMobile').slideToggle();
  });

  $(".icon").click(function () {
    $(".mobilenav").fadeToggle(500);
    $(".top-menu").toggleClass("top-animate");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
    $('#header').toggleClass('backgroundDark');
  });

  //CHANGEMENT BG HEADER 
  $(document).scroll(function () {
    if ($(document).scrollTop() > 450 && !$('.top-menu').hasClass('top-animate')) {
      $('#header').addClass('backgroundDark');
    } else if ($(document).scrollTop() < 450 && !$('.top-menu').hasClass('top-animate')) {
      $('#header').removeClass('backgroundDark');
    }
  });

  //SELECT CUSTOMISÉ SUR LA PAGE CONTACT
  $(".custom-select").each(function () {
    var classes = $(this).attr("class"),
        id = $(this).attr("id"),
        name = $(this).attr("name");

    var template = '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function () {
      template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });

  $(".custom-option:first-of-type").hover(function () {
    $(this).parents(".custom-options").addClass("option-hover");
  }, function () {
    $(this).parents(".custom-options").removeClass("option-hover");
  });

  $(".custom-select-trigger").on("click", function () {
    $('html').one('click', function () {
      $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
  });

  $(".custom-option").on("click", function () {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
  });

  //CHANGER LE DESTINATAIRE DE L'EMAIL
  $(".custom-options").on("click", function () {
    if ($(".custom-select-trigger").html() == ("Rituel")) {
      $("select").attr("value", "0");
    }
    else if ($(".custom-select-trigger").html() == ("Birds of Mind")) {
      $("select").attr("value", "1");
    }
    else if ($(".custom-select-trigger").html() == ("Silens")) {
      $("select").attr("value", "2");
    }
    else if ($(".custom-select-trigger").html() == ("Nato and Sahale")) {
      $("select").attr("value", "3");
    }
    else if ($(".custom-select-trigger").html() == ("Victor Norman")) {
      $("select").attr("value", "4");
    }
    else if ($(".custom-select-trigger").html() == ("David Mears")) {
      $("select").attr("value", "5");
    }
    else if ($(".custom-select-trigger").html() == ("Samarcande ")) {
      $("select").attr("value", "6");
    }
  })

  //JSON 
  $('.NextEventName').html(nextEvent["nom"]);
  $('.NextEventLieu').html(nextEvent["lieu"]);
  $('.NextEventDate').html(nextEvent["date"]);
  for (i = 1; i < 5; i++) {
    $('.artiste_' + i).html(lineUp["artiste_" + i]);
  };

  for (i = 1; i <= Object.keys(eventList).length; i++) {
    $("#aVenir ul").append('<li><h4>' + eventList["event_" + i]["nom"] + '</h4><p class="lineUp">' + eventList["event_" + i]["smallLineUp"] + '...</p><p class="lieu">' + eventList["event_" + i]["lieu"] + '</p><p class="date">' + eventList["event_" + i]["date"] + '</p><a href="' + eventList["event_" + i]["lienFB"] + '" title="event Facebook" class="lien">facebook</a></li>');
  };


  // POP UP ARTISTE 
  $('.More1').hide();
  $('.More2').hide();
  var currentArtiste = 0;
  var targetArtiste = 0;
  
  $('.artisteContainer, .artisteClose').on('click', function(){

    if ($(this).hasClass('col1')) {
      $('.More1 .col-md-4').removeClass('col-md-offset-4');
      $('.More1 .col-md-4').removeClass('col-md-offset-8');
      targetArtiste = 1;
    } else if ($(this).hasClass('col2')) {
      $('.More1 .col-md-4').removeClass('col-md-offset-8');
      $('.More1 .col-md-4').addClass('col-md-offset-4');
      targetArtiste = 2;
    } else if ($(this).hasClass('col3')) {
      $('.More1 .col-md-4').removeClass('col-md-offset-4');
      $('.More1 .col-md-4').addClass('col-md-offset-8');
      targetArtiste = 3;
    }

    if ($(this).hasClass('col4')) {
      $('.More2 .col-md-4').removeClass('col-md-offset-4');
      $('.More2 .col-md-4').removeClass('col-md-offset-8');
      targetArtiste = 4;
    } else if ($(this).hasClass('col5')) {
      $('.More2 .col-md-4').removeClass('col-md-offset-8');
      $('.More2 .col-md-4').addClass('col-md-offset-4');
      targetArtiste = 5;
    } else if ($(this).hasClass('col6')) {
      $('.More2 .col-md-4').removeClass('col-md-offset-4');
      $('.More2 .col-md-4').addClass('col-md-offset-8');
      targetArtiste = 6;
    }

    setTimeout(function () {
      if ($('.More1 .col-md-4').hasClass('col-md-offset-4')) {
        $('.More1 .col-md-8').addClass('col-md-offset-2');
        $('.More1 .col-md-8').removeClass('col-md-offset-4');
      } else if ($('.More1 .col-md-4').hasClass('col-md-offset-8')) {
        $('.More1 .col-md-8').removeClass('col-md-offset-2');
        $('.More1 .col-md-8').removeClass('col-md-offset-4');
      } else if (!$('.More1 .col-md-4').hasClass('col-md-offset-8') && !$('.More1 .col-md-4').hasClass('col-md-offset-4')) {
        $('.More1 .col-md-8').removeClass('col-md-offset-2');
        $('.More1 .col-md-8').addClass('col-md-offset-4');
      }
      if ($('.More2 .col-md-4').hasClass('col-md-offset-4')) {
        $('.More2 .col-md-8').addClass('col-md-offset-2');
        $('.More2 .col-md-8').removeClass('col-md-offset-4');
      } else if ($('.More2 .col-md-4').hasClass('col-md-offset-8')) {
        $('.More2 .col-md-8').removeClass('col-md-offset-2');
        $('.More2 .col-md-8').removeClass('col-md-offset-4');
      } else if (!$('.More2 .col-md-4').hasClass('col-md-offset-8') && !$('.More2 .col-md-4').hasClass('col-md-offset-4')) {
        $('.More2 .col-md-8').removeClass('col-md-offset-2');
        $('.More2 .col-md-8').addClass('col-md-offset-4');
      }
    }, 200);

    if (currentArtiste == targetArtiste) {
      $('.More1').slideUp();
      $('.More2').slideUp();
      currentArtiste = 0;
      console.log('UP');
    } else if (targetArtiste > 3) {
      $('.More2').slideDown();
      $('.More1').slideUp();
      currentArtiste = targetArtiste;
    } else {
      $('.More1').slideDown();
      $('.More2').slideUp();
      currentArtiste = targetArtiste;
    }

    var moreName = $(this).children('.artisteDescribe').children('h3').html();
    var moreImg = $(this).children('.artistesImgContainer').children('img').attr('src');
    var moreDescribe = $(this).children('.artisteDescribe').children('.pDescribe').html();
    var moreLienFacebook = $(this).children('.artisteDescribe').children('.lienFacebook').attr('href');
    var moreLienSoundcloud = $(this).children('.artisteDescribe').children('.lienSoundcloud').attr('href');
    var soundCloud = $(this).data('iframe');
    $('.moreName').html(moreName);
    $('.moreImg').attr('src', moreImg);
    $('.moreDescribe').html(moreDescribe);
    $('.lienF').attr('href', moreLienFacebook);
    $('.lienS').attr('href', moreLienSoundcloud);

    if($(this).data('scroll') == "#More2"){
      $('#soundcloud_widget_2').replaceWith('<iframe id="soundcloud_widget_2" src="http://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/'+soundCloud+'&show_artwork=false&liking=false&sharing=false&auto_play=false&color=1d1d1d" width="100%" height="110" frameborder="no"></iframe>');
      console.log('2');
    }
    if($(this).data('scroll') == "#More1"){
      $('#soundcloud_widget').replaceWith('<iframe id="soundcloud_widget" src="http://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/'+soundCloud+'&show_artwork=false&liking=false&sharing=false&auto_play=false&color=1d1d1d" width="100%" height="110" frameborder="no"></iframe>');
      console.log('1');
    }
  });

  $(".artisteContainer").on("click", function (e) {
    e.preventDefault();
    if ($(".moreName").html() == ("David Mears")) {
      $(".bookingButton").attr("href", "contact.php#1");
    } else if ($(".moreName").html() == ("Birds of mind")) {
      $(".bookingButton").attr("href", "contact.php#2");
    } else if ($(".moreName").html() == ("Nato & Sahalé")) {
      $(".bookingButton").attr("href", "contact.php#3");
    } else if ($(".moreName").html() == ("Samarcande")) {
      $(".bookingButton").attr("href", "contact.php#4");
    } else if ($(".moreName").html() == ("Silens")) {
      $(".bookingButton").attr("href", "contact.php#5");
    } else if ($(".moreName").html() == ("Victor Norman")) {
      $(".bookingButton").attr("href", "contact.php#6");
    }
  });

  var getUrl = $(location).attr('href');
  var selectChange = getUrl.substr(getUrl.lastIndexOf("#")+1);
  if (selectChange == "1") {
    $(".custom-select-trigger").html("David Mears");
  } else if (selectChange == "2") {
    $(".custom-select-trigger").html("Birds of Mind");
  } else if (selectChange == "3") {
    $(".custom-select-trigger").html("Nato & Sahalé");
  } else if (selectChange == "4") {
    $(".custom-select-trigger").html("Samarcande");
  } else if (selectChange == "5") {
    $(".custom-select-trigger").html("Silens");
  } else if (selectChange == "6") {
    $(".custom-select-trigger").html("Victor Norman");
  }

  // ARTISTE HOVER HOME SECTION
  $('.artistesImg .col-md-4').on('mouseenter', function () {
    $(this).addClass('ImgActive');
  });

  $('.artistesImg .col-md-4').on('mouseleave', function () {
    $(this).removeClass('ImgActive');
  });

  $('#artisteButton').on('mouseenter', function () {
    $('.artistesImg .col-md-4').addClass('ImgActive');
  });

  $('#artisteButton').on('mouseleave', function () {
    $('.artistesImg .col-md-4').removeClass('ImgActive');
  });


  // SMOOTH SCROLL
  $('div[data-scroll^="#"]').click(function () {
    var the_id = $(this).data("scroll");

    $('html, body').animate({
      scrollTop: $(the_id).offset().top - 400
    }, 'slow');
    return false;
  });

  $('.firstDescribeNextDescribe').hide();
  $('.firstDescribeNextDescribe').html(nextEvent["description"]);

  var showMore = false;

  $('#event_more').on('click', function(e){
    e.preventDefault();
    $('.firstDescribeNextDescribe').slideToggle();
    showMore = !showMore;
    if(showMore){
      $('#event_more').html('voir moins'); 
    }
    else{
      $('#event_more').html('voir plus'); 
    }
  })

});
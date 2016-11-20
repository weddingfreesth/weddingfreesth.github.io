(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
    
    //TODO for every few seconds, change text
    //TODO typing effect when showing text
    $(".autocomplete-reason").typed({
      strings: [
        "天然寶石的開採破壞環境",
        "我反對使用童工",
        "我唔想因為爭奪鑽石礦而打仗",
        "鑽石唔值咁貴，只係一個的騙局",
        "莫桑石仲閃過鑽石",      
        "通街都係鑽石，紅寶石靚 D",
        "王妃都戴藍寶石戒指",
        "我寧願留番 D 錢去旅行"], 
      typeSpeed: 100,
      showCursor: true,
      shuffle:true,
      loop: true,
      cursorChar: "|",
      backDelay:2500
    });
    //every 2000ms
    // var i = 1;
    // setInterval(function(){
    //   // if (i%1){
    //   //   $(".autocomplete-reason").removeClass("animated flipInX");
    //   // }else{
    //   //   $(".autocomplete-reason").addClass("animated flipInX");
    //   // }
    //   $(".autocomplete-reason").val(reasons[i]);
    //   i++;
    //   if (i == reasons.length){
    //     i = 0;
    //   }
    // },3000);
    //
    // setInterval(function() {
    //     d && ("|" == $(".search").val().substr(-1) ? $(".search").val($(".search").val().substr(0, $(".search").val().length - 1) + " ") : " " == $(".search").val().substr(-1) ? $(".search").val($(".search").val().substr(0, $(".search").val().length - 1) + "|") : $(".search").val($(".search").val() + "|"))
    // }, 500);
    

  }); // end DOM ready
})(jQuery); // end jQuery
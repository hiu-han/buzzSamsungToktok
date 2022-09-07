$(document).ready(function () {
  const NOWON_CLASSNAME = "now-on"; 

  // detail-slider 핸들러, 시작
  const detailSlider = {
    slideToggle: function (clicker, openName) {
      $(clicker).on("click", function () {
        $(clicker).toggleClass(NOWON_CLASSNAME);
        $(openName).toggleClass(NOWON_CLASSNAME);
      });
    },
    slideCls: function (clicker, clsName, openClicker) {
      $(clicker).on("click", function () {
        $(clsName).removeClass(NOWON_CLASSNAME);
        $(openClicker).removeClass(NOWON_CLASSNAME);
      })
    },
  }

  detailSlider.slideToggle("#detailOpen", ".detail-slider");
  detailSlider.slideToggle("#moDetailOpen", ".detail-slider");
  detailSlider.slideCls(".detail-slider .cls-btn",".detail-slider", "#detailOpen, #moDetailOpen");
  detailSlider.slideCls(".detail-btn-area .cancel-btn",".detail-slider", "#detailOpen, #moDetailOpen");
  
  detailSlider.slideToggle("#moChannelOpen", ".detail-channel-area > fieldset");
  // detail-slider 핸들러, 끝

  // , 시작
  // let scrT = 0;
  // $(window).scroll(function (e) {
  //   scrT = $(this).scrollTop();
    
  //   if(scrT > 62) {
  //     $("#header").addClass(NOWON_CLASSNAME);
  //   } else {
  //     $("#header").removeClass(NOWON_CLASSNAME);
  //   }
  // });
  // , 끝
  
})

// 채널 checkbox 전체선택 관련, 시작
function allChked () {
  let allOfChkBox = document.querySelectorAll('.detail-channel-area input[type="checkbox"]');
  for (let i = 0, len = allOfChkBox.length; i < len; i++) {
    allOfChkBox[i].checked = true;
  }
}
allChked();

function channelChk (a, g) {
  let allChkBox = document.getElementById(`allCheck${g}`);
  let e = document.querySelectorAll(`.${g}-group input[type="checkbox"]`);
  for (let i = 0, len = e.length; i < len; i++) {
    if (!e[i].checked) {
      allChkBox.checked = false;
      return;
    }
  }
  allChkBox.checkd = true;
}

function toggleChk(source, g) {
  let e = document.querySelectorAll(`.${g}-group input[type="checkbox"]`);

  for (let i = 0, len = e.length; i < len; i++) {
    e[i].checked = source.checked;
  }
}
// 채널 checkbox 전체선택 관련, 끝

const start = $("#start");
const mainSection = $("#mainSection");
const sectionTwo = $("#sectionTwo");
const sectionThree = $("#sectionThree");
const sectionFour = $("#sectionFour");
const mostBeautiful = $("#mostBeautiful");
const soSmart = $("#soSmart");
const notMe = $("#notMe");
const celebration = $("#celebration");
const nope = $("#nope");
let yesNo = false;
let sectionCount = 1;
let meSelection = false;

const startSection = () => {
  sectionTwo.show();
  sectionTwo.removeClass("fade-out");
  sectionTwo.addClass("fade-in");
}

const goToSectionThree = (meSelection) => {
  sectionCount++;
  if (meSelection === false) {
    $("#meThree").show();
  };
  sectionTwo.addClass("fade-out");
  sectionTwo.removeClass("fade-in");
  setTimeout(() => {
    sectionTwo.hide();
    mostBeautiful.show();
    mostBeautiful.removeClass("fade-out");
    mostBeautiful.addClass("fade-in");
    setTimeout(() => {
      mostBeautiful.removeClass("fade-in");
      mostBeautiful.addClass("fade-out");
      setTimeout(() => {
        mostBeautiful.hide();
        sThreeCheck();
      }, 1100)
    }, 3000)
  }, 1100);
};

const sThreeCheck = (meSelection) => {
  if (meSelection === true) {
    $("#meThree").hide();
  }
  sectionThree.show();
  sectionThree.removeClass("fade-out");
  sectionThree.addClass("fade-in");
}

const notMeShow = () => {
  if (sectionCount === 2) {
    sectionTwo.addClass("fade-out");
    sectionTwo.removeClass("fade-in");
    meSelection = true;
    setTimeout(() => {
      sectionTwo.hide();
      notMe.show();
      notMe.addClass("fade-in");
      notMe.removeClass("fade-out");
      setTimeout(() => {
        notMe.addClass("fade-out");
        notMe.removeClass("fade-in");
        setTimeout(() => {
          notMe.hide();
          $("#meTwo").hide();
          sectionTwo.show();
          sectionTwo.removeClass("fade-out");
          sectionTwo.addClass("fade-in");
        },1100)
      }, 5000)
    }, 1100);
  }
  if (sectionCount === 3) {
    sectionThree.addClass("fade-out");
      sectionThree.removeClass("fade-in");
      meSelection = true;
      setTimeout(() => {
        sectionThree.hide();
        notMe.show();
        notMe.addClass("fade-in");
        notMe.removeClass("fade-out");
        setTimeout(() => {
          notMe.addClass("fade-out");
          notMe.removeClass("fade-in");
          setTimeout(() => {
            notMe.hide();
            sThreeCheck(meSelection);
          }, 1100)
        }, 5000)
      }, 1100);
  }
}

const goToSectionFour = (yesNo) => {
  sectionThree.addClass("fade-out");
  sectionThree.removeClass("fade-in");
  setTimeout(() => {
    sectionThree.hide();
    soSmart.show();
    soSmart.removeClass("fade-out");
    soSmart.addClass("fade-in");
    setTimeout(() => {
      soSmart.removeClass("fade-in");
      soSmart.addClass("fade-out");
      setTimeout(() => {
        soSmart.hide();
        sFourCheck(yesNo);
      }, 1100)
    }, 3000)
  }, 1100);
};

const sFourCheck = (yesNo) => {
  if (yesNo === true) {
    $("#noRow").hide();
  }
  sectionFour.show();
  sectionFour.removeClass("fade-out");
  sectionFour.addClass("fade-in");
}

const celebrate = () => {
  sectionFour.addClass("fade-out");
  sectionFour.removeClass("fade-in");
  setTimeout(() => {
    sectionFour.hide();
    celebration.show();
    celebration.removeClass("fade-out");
    celebration.addClass("fade-in");
  },1100)
}

$(start).click((e) => {
  e.preventDefault();
  sectionCount++;
  mainSection.addClass("fade-out");
  mainSection.removeClass("fade-in");
  setTimeout(() => {
    mainSection.hide();
    startSection(meSelection);
  }, 1100);
});

$("#sTwoOne").click((e) => {
  e.preventDefault();
  goToSectionThree(meSelection);
});

$("#sTwoTwo").click((e) => {
  e.preventDefault();
  goToSectionThree(meSelection);
});

$("#sTwoThree").click((e) => {
  e.preventDefault();
  goToSectionThree(meSelection);
});

$("#notMeBtn").click((e) => {
  e.preventDefault();
  notMeShow();
});

$("#notMeBtn2").click((e) => {
  e.preventDefault();
  notMeShow();
});

$("#sThreeOne").click((e) => {
  e.preventDefault();
  goToSectionFour(yesNo);
});

$("#sThreeTwo").click((e) => {
  e.preventDefault();
  goToSectionFour(yesNo);
});

$("#sThreeThree").click((e) => {
  e.preventDefault();
  goToSectionFour(yesNo);
});

$("#yes").click((e) => {
  e.preventDefault();
  celebrate();
})

$("#no").click((e) => {
  e.preventDefault();
  yesNo = true;
  sectionFour.addClass("fade-out");
  sectionFour.removeClass("fade-in");
  setTimeout(() => {
    sectionFour.hide();
    nope.show();
    nope.addClass("fade-in");
    nope.removeClass("fade-out");
    setTimeout(() => {
      nope.addClass("fade-out");
      nope.removeClass("fade-in");
      setTimeout(() => {
        nope.hide();
        sFourCheck(yesNo);
      },1100)
    }, 3000)
  }, 1100)
})
var IS_HIDDEN = true;
var HIDDEN_TEXT = "Show Courses ⇩";
var SHOWN_TEXT = "Hide Courses ⇧";

function showHideCourses () {
  if (IS_HIDDEN){
    var courseList = $("#internalList").height();
    $( "#coursesList").velocity({height: courseList});
    $( "#showCourses").text(SHOWN_TEXT);
    IS_HIDDEN = false;
  } else {
    $( "#coursesList").velocity({height:0});
    $( "#showCourses").text(HIDDEN_TEXT);
    IS_HIDDEN = true;
  }
};


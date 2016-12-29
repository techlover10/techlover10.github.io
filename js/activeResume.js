var IS_HIDDEN = true;
function get_hidden (id) {
    return (id=="cs" ? "Show Computer Science Courses ▼" : "Show Other Courses ▼");
}
function get_shown (id) {
    return (id=="cs" ? "Hide Computer Science Courses ▼" : "Hide Other Courses ▼");
}

function showHideCourses (id) {
  if (IS_HIDDEN){
    var courseList = $("#" + id + "InternalList").height() + 15;
    $( "#" + id + "List").velocity({height: courseList});
    $( "#" + id + "ShowCourses").text(get_shown(id));
    IS_HIDDEN = false;
  } else {
    $( "#" + id + "List").velocity({height:0});
    $( "#" + id + "ShowCourses").text(get_hidden(id));
    IS_HIDDEN = true;
  }
};


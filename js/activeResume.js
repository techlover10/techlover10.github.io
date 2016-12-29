var IS_HIDDEN = {
    cs: true,
    other: true
};

function get_is_hidden(id) {
    return IS_HIDDEN[id];
}

function toggle_is_hidden(id){
    IS_HIDDEN[id] = !IS_HIDDEN[id];
}

function get_hidden (id) {
    return (id=="cs" ? "Show Computer Science Courses ▼" : "Show Other Courses ▲");
}

function get_shown (id) {
    return (id=="cs" ? "Hide Computer Science Courses ▼" : "Hide Other Courses ▲");
}

function showHideCourses (id) {
  if (get_is_hidden(id)){
    var courseList = $("#" + id + "InternalList").height() + 15;
    $( "#" + id + "List").velocity({height: courseList});
    $( "#" + id + "ShowCourses").text(get_shown(id));
  } else {
    $( "#" + id + "List").velocity({height:0});
    $( "#" + id + "ShowCourses").text(get_hidden(id));
  }
  toggle_is_hidden(id);
};


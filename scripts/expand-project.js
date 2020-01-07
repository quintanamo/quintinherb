let active = null;

function expandDescription(project) {
    if (active != project) {
        if (active != null) {
            document.getElementById(active).style.maxHeight = "0px";
            document.getElementById(active).style.padding = "0px 14px";
        }
        document.getElementById(project).style.maxHeight = "400px";
        document.getElementById(project).style.padding = "14px";
        active = project;
    } else {
        document.getElementById(project).style.maxHeight = "0px";
        document.getElementById(project).style.padding = "0px 14px";
        active = null;
    }
}

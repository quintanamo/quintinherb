let active = null;

function expandDescription(project, element) {
    if (active != project) {
        if (active != null) {
            document.getElementById(active).style.maxHeight = "0px";
            document.getElementById(active).style.padding = "0px 14px";
            for (x of document.getElementsByClassName('project-button')) {
                x.getElementsByClassName('expand-section')[0].textContent = "+";
            }
            element.getElementsByClassName('expand-section')[0].textContent = "+";
        }
        document.getElementById(project).style.maxHeight = "400px";
        document.getElementById(project).style.padding = "14px";
        element.getElementsByClassName('expand-section')[0].textContent = "‒";
        active = project;
    } else {
        document.getElementById(project).style.maxHeight = "0px";
        document.getElementById(project).style.padding = "0px 14px";
        element.getElementsByClassName('expand-section')[0].textContent = "+";
        active = null;
    }
}

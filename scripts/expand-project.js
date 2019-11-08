let active = null;

function expandDescription(project) {
    if (active != project) {
        if (active != null) {
            document.getElementById(active).classList.remove('active');
        }
        document.getElementById(project).classList.add('active');
        active = project;
    } else {
        document.getElementById(project).classList.remove('active');
        active = null;
    }
}
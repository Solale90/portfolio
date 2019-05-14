projectsList = document.getElementById("project-list");

db.collection("projects").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var data = doc.data();
        projectsList.appendChild(createProjectView(data));
    });
});

function createProjectView(data) {
    var html =
        `<div class="card-wrap flipInX animated">
            <div class="card proj-{{projectId}}" onclick="navigateToProject({{projectId}})">
                <div class="card-front">
                    <div class="card-title">{{title}}</div>
                </div>
            </div>
        </div>`.replace(/{{projectId}}/g, data.id)
        .replace(/{{title}}/g, data.title);

    return createElementFromHTML(html);
}

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    return div.firstChild;
}

function navigateToProject(id) {
    window.location = "project" + id + ".html";
}
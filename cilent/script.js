let $template = $("#welcome-template");

let welcomeBodyContent = document.importNode($template[0].content, true);

let $mainContent = $("#main-content");

$mainContent.empty();

$mainContent.append(welcomeBodyContent);

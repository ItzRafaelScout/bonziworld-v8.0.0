$(document).ready(function() {
    let $template = $("#welcome-template");
    
    if ($template.length > 0 && $template[0].content) {
        let welcomeBodyContent = document.importNode($template[0].content, true);
        let $mainContent = $("#main-content");
        $mainContent.empty();
        $mainContent.append(welcomeBodyContent);
    } else {
        console.error("Template not found or not a valid template element");
    }
});

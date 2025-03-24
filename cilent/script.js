$(document).ready(function() {
    let $template = $("#user-template");
    
    if ($template.length > 0 && $template[0].content) {
        let welcomeBodyContent = document.importNode($template[0].content, true);
        let $mainContent = $("#main-content");
        $mainContent.empty();
        $mainContent.append(welcomeBodyContent);
    }
});

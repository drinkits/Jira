<script type="text/javascript">
//Hide field and show tooltip / KROZENBE / KVIK-15754

jQuery(document).ready(function($) {
	JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (e,context) {

        if(!$('#workflow-transition-521-dialog').length == 0) {
            $("#customfield_23144").closest('div.field-group').hide();
            
            var sasskaits=$('input[name=customfield_23144]').val();
            if(sasskaits == "1"){ 
                if (!$(".akta_skaits")[0]){
                    $("#customfield_12273").closest('div.field-group').before('<div class="infoBox akta_skaits">Lūdzu pārbaudīt un papildināt akta sastādītājus!</div>');       
                }                 
            }
        }
    });		
});
</script>
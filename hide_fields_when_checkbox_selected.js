<script type="text/javascript">
//Hide fields according to checkbox / KROZENBE / KVIK-15504

jQuery(document).ready(function($) {
	JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (e,context) {
		checkBoxFunction();
	});
	checkBoxFunction();
	
    function checkBoxFunction(){				
			showorhidefields(); 
			//assume 4 checkbox there with name  'customfield_11705'
		$("#customfield_23940-1").click(function() {
			showorhidefields(); 
		});		
    }
    
    function showorhidefields(){
            var emergencyImpl=$('input[name=customfield_23940]:checked + label').text();
            if( emergencyImpl == "Rādījumu nevar nolasīt" ){ 
                $("#customfield_23941").closest('div.field-group').hide();
                $("#customfield_23942").closest('div.field-group').hide();
                $("#customfield_23943").closest('div.field-group').hide();
                $("#customfield_23944").closest('div.field-group').hide();
                $("#customfield_23945").closest('div.field-group').hide();
                $("#customfield_23946").closest('div.field-group').hide();
                $("#customfield_23947").closest('div.field-group').hide();
            }else {
                $("#customfield_23941").closest('div.field-group').show();
                $("#customfield_23942").closest('div.field-group').show();
                $("#customfield_23943").closest('div.field-group').show();
                $("#customfield_23944").closest('div.field-group').show();
                $("#customfield_23945").closest('div.field-group').show();
                $("#customfield_23946").closest('div.field-group').show();
                $("#customfield_23947").closest('div.field-group').show();
            }
    }	
		
});
</script>



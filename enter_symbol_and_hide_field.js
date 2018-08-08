<script type="text/javascript">
//Hide field values according to select field / KROZENBE / KVIK-14903

	//Sets field to hide
	var hidefield = "#summary";
    
    (function($) {
		AJS.toInit(function(){
            AJS.$(hidefield).val("_");
		    AJS.$(hidefield).parent().hide();
		    AJS.$(hidefield).parent().value = "";
		});

	    JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (e, context) {
            AJS.$(hidefield).val("_");
		    AJS.$(hidefield).parent().hide();
			AJS.$(hidefield).parent().value = "";
			});
	})(AJS.$);

</script>

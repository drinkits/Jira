<script type="text/javascript">
//Set cf value from nFeed field value / KROZENBE / KVIK-14652
    AJS.$(document).ready( function() {
    
    AJS.$("[name^='customfield_22040']").closest('div.field-group').hide();
    AJS.$("#customfield_18941").closest('div.field-group').hide();

        AJS.$("#issue-create-submit").click(function() {
                    $("#customfield_18941").val($('[name="customfield_22040"]').children(":first").val());
                });

    });
</script>
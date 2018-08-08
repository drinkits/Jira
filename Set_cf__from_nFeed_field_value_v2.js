<script type="text/javascript">
//Set cf value from nFeed field value / KROZENBE / KVIK-14652
    AJS.$(document).ready( function() {

        AJS.$("[name^='customfield_22040']").closest('div.field-group').hide();
        AJS.$("#customfield_11260").closest('div.field-group').hide();
        
        AJS.$("#issue-create-submit").click(function() {
                    $("select#customfield_11260 option").each(function() { this.selected = (this.text == $('[name="customfield_22040"]').children(":first").val()); });
                });

    });
</script>
<script type="text/javascript">
//Hide field values according to select field / KROZENBE / KVIK-14903
jQuery(document).ready(function($) {

$("#customfield_21043").change(function() {
    if ($.trim($("#customfield_21043 :selected").val()) == '33622') {
        console.log("test1");
        $("#customfield_18943 option[value=" + 30610 + "]").hide();
        $("#customfield_18943 option[value=" + 30611 + "]").hide();
        $("#customfield_18943 option[value=" + 30612 + "]").hide();
        $("#customfield_18943 option[value=" + 30613 + "]").hide();
        $("#customfield_18943 option[value=" + 30614 + "]").hide();
        $("#customfield_18943 option[value=" + 30615 + "]").hide();
        $("#customfield_18943 option[value=" + 30616 + "]").hide();
        $("#customfield_18943 option[value=" + 30617 + "]").hide();
        //$("#customfield_18943 option[value=" + 30618 + "]").hide();
        //$("#customfield_18943 option[value=" + 30619 + "]").hide();
        //$("#customfield_18943 option[value=" + 30620 + "]").hide();
        //$("#customfield_18943 option[value=" + 31110 + "]").hide();
        //$("#customfield_18943 option[value=" + 31111 + "]").hide();
        //$("#customfield_18943 option[value=" + 31112 + "]").hide();
        //$("#customfield_18943 option[value=" + 31113 + "]").hide();
        //$("#customfield_18943 option[value=" + 31114 + "]").hide();
        //$("#customfield_18943 option[value=" + 31115 + "]").hide();
    }

    if ($.trim($("#customfield_21043 :selected").val()) == '33623') {
        console.log("test2");
        $("#customfield_18943 option[value=" + 30610 + "]").hide();
        $("#customfield_18943 option[value=" + 30611 + "]").hide();
        $("#customfield_18943 option[value=" + 30612 + "]").hide();
        $("#customfield_18943 option[value=" + 30613 + "]").hide();
        //$("#customfield_18943 option[value=" + 30614 + "]").hide();
        //$("#customfield_18943 option[value=" + 30615 + "]").hide();
        //$("#customfield_18943 option[value=" + 30616 + "]").hide();
        //$("#customfield_18943 option[value=" + 30617 + "]").hide();
        //$("#customfield_18943 option[value=" + 30618 + "]").hide();
        //$("#customfield_18943 option[value=" + 30619 + "]").hide();
        //$("#customfield_18943 option[value=" + 30620 + "]").hide();
        //$("#customfield_18943 option[value=" + 31110 + "]").hide();
        //$("#customfield_18943 option[value=" + 31111 + "]").hide();
        //$("#customfield_18943 option[value=" + 31112 + "]").hide();
        //$("#customfield_18943 option[value=" + 31113 + "]").hide();
        //$("#customfield_18943 option[value=" + 31114 + "]").hide();
        //$("#customfield_18943 option[value=" + 31115 + "]").hide();
    }
});
	
});
</script>

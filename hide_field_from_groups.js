<script type="text/javascript">
	/*	BUR-18283 krozenbe, 04.2016

		Script allows to hide custom field for all users except groups defined below. 
		By default project admin and users mentioned in following fields are allowed to see hidden field: customfield_10865 (Saskaņojuši), 
	*/

	//Sets field to hide
	var hidefield = "#customfield_12430-val";

	//Sets groups which ar allowed to see defined customfield
	var allowedgroups = ['jira-administrator'];

	//Sets projects where to hide customfield. If empty, all projects are selected.
	//example: var projects = ['BUR', 'KVIK'];
	var projects = ['KP', 'LEO', 'DLT'];

	//Sets issue type where to hide customfield. If empty, all issue types are selected.
	//example: var issuetype = ['19'];
	var issuetype = ['96', '146', '19'];

	//Sets roles which ar allowed to see defined customfield
	var allowedroles = ['Projekta vadītājs', 'Saskaņotājs virs 3000', 'Saskaņotājs zem 3000', 'Valdes loceklis (ITT)', 'Projekta pārvaldība'];


	//Gets current project key
	issueKey = AJS.$("meta[name='ajs-issue-key']").attr("content")

	var project = getProjectKey(issueKey);

	var flag = 0;
	var flag1 = 0;

	//Check if issue is in defined project
	for (l = 0; l < projects.length; l++){
		if (project == projects[l]) { flag = 1; }
	}

	if (flag == 1) {
		
		var issuety = getIssueType(issueKey);
	
		//Check if issue is in defined issue type
		for (k = 0; k < issuetype.length; k++){
			if (issuety == issuetype[k]) { flag1 = 1; }
		}
		
		if (flag1 == 1) {

			var user = getCurrentUserName();
			var aggrName = getIssueAggr(issueKey);
			var aggrName1 = getIssueAggr1(issueKey);
			var flag2 = 0;
			var flag3 = 0;

			//Gets urls of allowed roles
			var ProjRoles = [];
			for (k = 0; k < allowedroles.length; k++){
				ProjRoles.push(getProjectRoles(project, allowedroles[k]));
			}

			//Gets allowed users
			var ProjectRoleUser = [];
			for (l = 0; l < ProjRoles.length; l++){
				ProjectRoleUser.push.apply(ProjectRoleUser,getProjectRoleUser(ProjRoles[l]));
			}

			var allowedobjects= [];
			allowedobjects.push.apply(allowedobjects, ProjectRoleUser);
			allowedobjects.push.apply(allowedobjects, aggrName);
			allowedobjects.push.apply(allowedobjects, aggrName1);

			//Checks if current user is in array
			for (i = 0; i < allowedobjects.length; i++){
				if (user == allowedobjects[i]) { flag2 = 1; }
			}

			//Checks if current user is in defined groups
			for (j = 0; j < allowedgroups.length; j++){
				if (isUserInGroup(user, allowedgroups[j])){ flag3 = 1; }
			}


			//Checks if all projects and issue types are allowed
			if (projects.length == 0) { flag = 1;}

			//Checks if all projects and issue types are allowed
			if (issuetype.length == 0) { flag1 = 1;}

			//Hides defined field
			if (flag2 == 0 && flag3 == 0 && flag == 1 && flag1 == 1) {
				(function($) {
						AJS.toInit(function(){
						AJS.$(hidefield).parent().hide();
						AJS.$(hidefield).parent().value = "";
						});

						JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (e, context) {
						AJS.$(hidefield).parent().hide();
						AJS.$(hidefield).parent().value = "";
						});
						})(AJS.$);
			}
		}
	}
		
	function getCurrentUserName()
	{
		var user;
		 AJS.$.ajax({
			url: "/rest/gadget/1.0/currentUser",
			type: 'get',
			dataType: 'json',
			async: false,
			success: function(data) {
				user = data.username;
			} 
		 });
		 return user;
	}

	function getGroups(user)
	{
		var groups;
		 AJS.$.ajax({
			url: "/rest/api/2/user?username="+user+"&expand=groups",
			type: 'get',
			dataType: 'json',
			async: false,
			success: function(data) {
				groups = data.groups.items;
			} 
		 });
		 return groups;
	}

	function isUserInGroup(user, group){
		var groups = getGroups(user);
		for (i = 0; i < groups.length; i++){
			if (groups[i].name == group){
				return true;
			}
		}
		return false;
	}

	function getProjectKey(issueKey)
	{
		var projKey;
		 AJS.$.ajax({
			url: "/rest/api/2/issue/"+issueKey,
			type: 'get',
			dataType: 'json',
			async: false,
			success: function(data) {
				projKey = data.fields.project.key;
			} 
		 });
		 return projKey;
	}


	function getIssueAggr(issueKey)
	{
		var aggrName = [];
		 AJS.$.ajax({
			url: "/rest/api/2/issue/"+issueKey,
			type: 'get',
			dataType: 'json',
			async: false,
			success: function(data) {
				if (data.fields.customfield_10865) {
					for (var i=0; i < data.fields.customfield_10865.length; i++){
						aggrName.push(data.fields.customfield_10865[i].name);
					}
				}
			} 
		 });
		 return aggrName;
	}

	function getIssueAggr1(issueKey)
	{
		var aggrName1 = [];
		 AJS.$.ajax({
			url: "/rest/api/2/issue/"+issueKey,
			type: 'get',
			dataType: 'json',
			async: false,
			success: function(data) {
				if (data.fields.customfield_10864) {
					for (var i=0; i < data.fields.customfield_10864.length; i++){
						aggrName1.push(data.fields.customfield_10864[i].name);
					}
				}
			} 
		 });
		 return aggrName1;
	}

	function getIssueType(issueKey)
	{
		var issuety;
		 AJS.$.ajax({
			url: "/rest/api/2/issue/"+issueKey,
			type: 'get',
			dataType: 'json',
			async: false,
			success: function(data) {
				issuety = data.fields.issuetype.id;
				
			}
		 });
		 return issuety;
	}

	function getProjectRoles(project, role)
	{
		var ProjRoles;
		 AJS.$.ajax({
			url: "/rest/api/2/project/"+project,
			type: 'get',
			dataType: 'json',
			async: false,
			success: function(data) {
				ProjRoles = data.roles[role];
			} 
		 });
		 return ProjRoles;
	}

	function getProjectRoleUser(RoleUrl)
	{
		var ProjRolesUser = [];
		 AJS.$.ajax({
			url: RoleUrl,
			type: 'get',
			dataType: 'json',
			async: false,
			success: function(data) {
				if (data.actors) {
					for (var i=0; i < data.actors.length; i++){
						ProjRolesUser.push(data.actors[i].name);
					}
				}
			} 
		 });
		 return ProjRolesUser;
	}


	console.log('Project flag: ' + flag);
	console.log('Issue type flag: ' + flag1);
	console.log('Allowed objects flag: ' + flag2);
	console.log('Allowed groups flag: ' + flag3);
	console.log('Allowedobjects: ' + allowedobjects);
</script>
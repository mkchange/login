	
//自动生成需要的表单form	
function show_form(obj){
		if(obj.id == "login"){
			create_form(obj.id);
		}
		else{
			create_form(obj.id);
		}
}

//  创建form表单
	function create_form(tem){
		document.getElementById("d1").innerHTML = "";
		//var table = document.createElement("table");
		var cform = document.createElement("form");
		cform.setAttribute("method","get");
		cform.setAttribute("name",tem);
		cform.setAttribute("action","123.jsp");
		//table.appendChild(cform);                      //加入form
		if(tem == "reg"){
			reg_form(cform);	
		}else{
			login_form(cform);	
		}	
/*	
		var div1 = document.createElement("div");
		var input_username = document.createElement("input");
		input_username.setAttribute("type","text");
		input_username.setAttribute("id","username");
		input_username.setAttribute("placeholder","用户名:");
		div1.appendChild(input_username);
		cform.appendChild(div1);
		var div2 = document.createElement("div");
		var input_password = document.createElement("input");
		input_password.setAttribute("type","password");
		input_password.setAttribute("id","username");
		input_password.setAttribute("placeholder","密码:");
		div2.appendChild(input_password);
		cform.appendChild(div2);
		document.getElementById("d1").appendChild(cform);
		*/
	}
	//创建按钮
	function button_form(cform,buttonname){
		var cbutton = document.createElement("button");
		cbutton.setAttribute("id","button");
		cbutton.setAttribute("type","submit");
		//cbutton.setAttribute("name","submit1");
		cbutton.innerHTML = buttonname;
		cform.appendChild(cbutton);
		document.getElementById("d1").appendChild(cform);
//		document.getElementById("d1").appendChild(cbutton);
	}
	
	//创建表格中内容
	function input_form(date,cform){
		for(var i = 0;i<date.length;i++){
			var div = document.createElement("div");
			div.setAttribute("class","cinput");
			var input = document.createElement("input");
			for(var j = 0;j<date[0].length;j++){
				input.setAttribute(date[i][j][0],date[i][j][1]);
			}
			div.appendChild(input);
	
			cform.appendChild(div);
		}
	}
	// 创建 用户登录表
	function login_form(cform){
		var date1 = [["type","text"],["id","username"],["placeholder","用户名:"]];
		var date2 = [["type","password"],["id","password"],["placeholder","密码:"]];
		var date = [date1,date2];
		input_form(date,cform);
		button_form(cform,"登录")
	}
	
	//创建用户注册表
	function reg_form(cform){
		var date1 = [["type","text"],["id","username"],["placeholder","用户名:"]];
		var date2 = [["type","text"],["id","email"],["placeholder","邮箱:"]];
		var date3 = [["type","password"],["id","password"],["placeholder","密码:"]];
		var date4 = [["type","password"],["id","password"],["placeholder","重复密码:"]];
		var date = [date1,date2,date3,date4];
		input_form(date,cform);
		button_form(cform,"注册")
	}
var pageItem={
	total:10,
	pageSize: 10,
    pageIndex: 1,
}


//显示用户列表
$(function(){
	var str={"list":[{'account':'tom','name':'tom','phone':'25'},
	{'account':'jphn','name':'jphn','phone':'25'},
	{'account':'mary','name':'mary','phone':''}]}

    for (var i =0 ; i <str.list.length; i++) {
    	var tr=document.createElement('tr');
    	var tdCheckbox=document.createElement('td');
    	var tdAccount=document.createElement('td');
    	var tdName=document.createElement('td');
    	var tdPhone=document.createElement('td');
    	var tdEdit=document.createElement('td');
        
        var checkBox=document.createElement("input");
        checkBox.setAttribute("type","checkbox");
        checkBox.setAttribute("id",i);

        var spanEdit=document.createElement('span');
        spanEdit.setAttribute("class","edit-account");
        spanEdit.setAttribute("style","color:#5bc0de;cursor: pointer;");
        spanEdit.setAttribute("click","editAccount()");
        spanEdit.innerHTML="编辑";

        tdCheckbox.appendChild(checkBox);
    	tdAccount.innerHTML=str.list[i].account;
    	tdName.innerHTML=str.list[i].name;
    	if (str.list[i].phone==""){
    	tdPhone.innerHTML="--";
        }else{
    	tdPhone.innerHTML=str.list[i].phone;
        }
    	tdEdit.appendChild(spanEdit);

        tr.appendChild(tdCheckbox);
        tr.appendChild(tdAccount);
        tr.appendChild(tdName);
        tr.appendChild(tdPhone);
        tr.appendChild(tdEdit);

        var tbody=document.getElementById('tbody-root-account');
        tbody.appendChild(tr)
    }	
})

//点击编辑
$(function() {
    $(".edit-account").click(function () {
        $(".root-edit-account").show();
        maskerShow();
    })
});


//分页
// function pagination(data){
// 	var element = $('#pagination')
// 	options ={
// 	    bootstrapMajorVersion: 3, //对应的bootstrap版本
//         currentPage: pageItem.pageIndex, //当前页数，这里是用的EL表达式，获取从后台传过来的值
//         numberOfPages: 7, //每页页数
//         totalPages: pageItem.total%pageItem.pageSize==0?pageItem.total/pageItem.pageSize:pageItem.total/pageItem.pageSize+1, //总页数，这里是用的EL表达式，获取从后台传过来的值
//         //点击事件
//         onPageClicked: function (event, originalEvent, type, page) {
//            // alert(page);
//             pageItem.pageIndex = page;
//            // userListRequest();
//         }
// 	};

// 	element.bootstrapPaginator(options)
// }

//添加账号
function  clickAddUser() {

}

//删除账号
function clickDelUser() {

}

//刷新列表（关键词搜索）
function searchUserList() {
	
}

//编辑账号
function editAccount() {
	
}
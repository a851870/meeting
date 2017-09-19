
var pageItem = {
    showAddDialog: false,
    showDelDialog: false,
    showDelFailDialog: false,
    showDelSuccess: false,
    showAccRepeat: false,
    checkAll: false,
    showEditDialog: false,
    showUnBinding: false,
    showDisable: false,
    pageIndex: 1,
    pageSize: 8,
    searchText: "",
    nickName: "",
    pwd: "",
    account: "",
    group_id: "",
    group_name: "",
    status: 0,
    showDelEnableDialog: false,
    deviceList: [],
    groupId: [],
    deviceCheckAll: false,
    isChecked: []
};

getDate();
maskerHide();

function getDate(){
	$.getJSON("./data.json",function(data){
		console.log(data);

		if (data.ret >=0){
			$("#table_list").children().remove();
			var list = data.user_list;
			for(var i=0; i<list.length; i++){
				$(
					'<tr>'+
						'<td><input type="checkbox"></td>'+
						'<td>'+list[i].account+'</td>'+
						'<td>'+list[i].nickname+'</td>'+
						'<td>'+list[i].phone+'</td>'+
						'<td>'+list[i].group_name+'</td>'+
						'<td>'+list[i].device_name+'</td>'+
						'<td><span>编辑</span></td>'+
					'</tr>').appendTo($("#table_list"));
			}
			console.log($("#table_list"));
			pagination(data)
		}else {
			console.log(data.msg);
		}

	});
}

function pagination(data) {
    var element = $('#pagination');
    options = {
        bootstrapMajorVersion: 3, //对应的bootstrap版本
        currentPage: pageItem.pageIndex, //当前页数，这里是用的EL表达式，获取从后台传过来的值
        numberOfPages: 7, //每页页数
        totalPages: data.total % pageItem.pageSize == 0 ? data.total / pageItem.pageSize : data.total / pageItem.pageSize + 1, //总页数，这里是用的EL表达式，获取从后台传过来的值
        //点击事件
        onPageClicked: function (event, originalEvent, type, page) {
            // alert(page);
            pageItem.pageIndex = page;
            userListRequest();
        }
    };

    element.bootstrapPaginator(options);

}

function maskerShow(){
    $('.whole-masker').show();
    $("body").css("overflow", "hidden");
}

function maskerHide(){
    $('.whole-masker').hide();
    $("body").css("overflow", "inherit");
}

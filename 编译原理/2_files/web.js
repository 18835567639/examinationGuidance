var ERROR="-1";
var WARN="-2";
var SUCCESS="0";
var userId;
var userAvatar;
var basePath;
var REPORTPATH = 'http://wljy.whut.edu.cn:8080/';
$(function(){
	web.initPage();
	//web.ucard();
	/*web.loadMessage();*/
})
function adjust_navbar(){
        $('#sub_nav').css('top',$('#nav_bar').height());
        $('#main-container').css('padding-top',$('#nav_bar').height()+$('#sub_nav').height()+20)
}
String.prototype.trim=function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
 };

String.prototype.endsWith = function(str){
	    return (this.match(str+"$")==str);
};
String.prototype.startsWith = function(str){
	    return (this.match("^"+str)==str);
};
web={
	webPath:'web/',
	faceData:[],
	refreshPage:function(){
		location.href=location.href;
	},logout:function(){
		web.ajax(basePath+'web/login/logout.ajax',{},true,function(r){
			location.href=location.href;
		});
	},tologout:function(){
		web.ajax(basePath+'web/login/logout.ajax',{},true,function(r){
			window.location.href = basePath+'web/index.htm';
		});
	},toAdmin:function(){
		location.href=basePath+'toIndex.do';
	},toEduUserCenter:function(){
		location.href=basePath+'web/edu/ucenter/index.jsp';
	},editUserInfo:function(){
		location.href=basePath+'web/ucenter/userInfoConfig.jsp';
	},toUserInfo:function(no){
		if(no){
			location.href=basePath+'web/ucenter/userInfo.jsp?usrNo='+no;
		}else{
			location.href=basePath+'web/ucenter/userInfo.jsp';
		}
	},toMessageCenter:function(){
		location.href=basePath+'web/ucenter/message.jsp';
	},toLogin:function(){
		location.href=basePath+'web/login.htm';
	},toIndex:function(){
		location.href=basePath+'web/index.htm';
	},toWeibo:function(){
		location.href=basePath+'web/weibo/index.jsp';
	},toBBS:function(typeId){
		if(typeId){
			location.href=basePath+'web/bbs/indexList.jsp?typeId='+typeId;
		}else{
			location.href=basePath+'web/bbs/indexList.jsp';
		}
	},toEditBBS:function(grpNo){
		if(grpNo){
			location.href=basePath+'web/bbs/edit.jsp?grpNo='+grpNo;
		}else{
			location.href=basePath+'web/bbs/edit.jsp';
		}
		
	},toBBSDetail:function(bbsId,typeId){
		var url=basePath+'web/bbsdetail.htm?typeId='+typeId+'&cId='+bbsId;
		web.openWindow(url);
	},toGroup:function(typeId){
		if(typeId){
			location.href=basePath+'web/groupindex.htm?typeId='+typeId;
		}else{
			location.href=basePath+'web/groupindex.htm';
		}
	},toGroupInfo:function(id){
		location.href=basePath+'web/groupinfo.htm?id='+id;
	},toGroupBbsDetail:function(bbsId,groupId){
		var url=basePath+'web/group/bbsDetail.jsp?groupId='+groupId+'&cId='+bbsId;
		web.openWindow(url);
	},toRegister:function(){
		location.href=basePath+'web/ucenter/register.jsp';
	},toUserFollows:function(no){
		if(no){
			location.href=basePath+'web/ucenter/follows.jsp?usrNo='+no;
		}else{
			location.href=basePath+'web/ucenter/follows.jsp';
		}
	},toUserFans:function(no){
		if(no){
			location.href=basePath+'web/ucenter/fans.jsp?usrNo='+no;
		}else{
			location.href=basePath+'web/ucenter/fans.jsp';
		}
	},toUserCollect:function(){//用户收藏
		location.href=basePath+'web/ucenter/collect_course.jsp';
	},toNews:function(){
		location.href=basePath+'web/index.htm';
	},toNewsList:function(id){
		location.href=basePath+'web/news/list.jsp?id='+id;
	},toNewsDetail:function(no){
		location.href=basePath+'web/news/detail.jsp?id='+no;
	},toMyNews:function(){
		location.href=basePath+'web/news/myNews.jsp';
	},editMyNews:function(id){
		location.href=basePath+'web/news/edit.jsp?id='+id;
	},toActivity:function(){
		location.href=basePath+'web/activity/index.jsp';
	},toActivityDetail:function(no){
		location.href=basePath+'web/activity/detail.jsp?id='+no;
	},toActivityMember:function(no){
		if(no){
			location.href=basePath+'web/activity/member.jsp?id='+no;
		}else{
			location.href=basePath+'web/activity/member.jsp';
		}
	},toActivityEdit:function(no){
		if(no){
			location.href=basePath+'web/activity/edit.jsp?id='+no;
		}else{
			location.href=basePath+'web/activity/edit.jsp';
		}
	},toELearning:function(){
		location.href=basePath+'web/edu/index.jsp';
	},toCourseDetail:function(id,kId){
		if(userId==""){
			messageDialogShow('提示',"请登录后学习！");
			return;
		}
		if(kId){
			location.href=basePath+'web/edu/detail.jsp?id='+id+"&kId="+kId;
		}else{
			location.href=basePath+'web/edu/detail.jsp?courseId='+id;
		}
	},toKpointDetail:function(id){
		location.href=basePath+'web/edu/kpointDetail.jsp?id='+id;
	},toKpointItemData:function(id,kId){
		location.href=basePath+'web/edu/kpointItemData.jsp?id='+id+'&kId='+kId;
	},toCoursePlay:function(id,kId){
		if(userId==""){
			messageDialogShow('提示',"请登录后进入大厅学习！");
			return;
		}
		location.href=basePath+'web/edu/play.jsp?id='+id+'&kId='+kId;
	},toCourseList:function(){
		location.href=basePath+'web/edu/courseList.jsp';
	},toCoursePay:function(id){
		location.href=basePath+'web/edu/pay.jsp?id='+id;
	},toTeacherDetail:function(id){
		location.href=basePath+'web/edu/teacher.jsp?id='+id;
	},toTeacherList:function(){
		location.href=basePath+'web/edu/teacherList.jsp';
	},toOnlineTest:function(){
		location.href=basePath+'web/exam/paperList.jsp';
	},toExamPaper:function(instNo,inFrame){
		if(inFrame){
			parent.location.href=basePath+'web/exam/examPaper.jsp?instNo='+instNo;
		}else{
			location.href=basePath+'web/exam/examPaper.jsp?instNo='+instNo;
		}
	},toMyExamPaper:function(){
		location.href=basePath+"web/exam/myExamList.jsp";
	},toExamReport:function(instNo){
		location.href=basePath+'web/exam/examReport.jsp?instNo='+instNo;
	},toBookList:function(){
		location.href=basePath+"web/book/indexList.jsp";
	},toBookDetail:function(id){
		location.href=basePath+"web/book/detail.jsp?id="+id;
	},toQatIndex:function(id){
		location.href=basePath+"web/index.htm";
	},toQatCourseList:function(tsId,modId,piId){
		if(tsId!=undefined){
			if(modId!=undefined){
				if(piId!=undefined){
					location.href=basePath+"web/qat/courseList.jsp?tsId="+tsId+"&modId="+modId+"&piId="+piId;
				}else{
					location.href=basePath+"web/qat/courseList.jsp?tsId="+tsId+"&modId="+modId;
				}
			}else{
				location.href=basePath+"web/qat/courseList.jsp?tsId="+tsId;
			}
		}else{
			location.href=basePath+"web/qat/courseList.jsp";
		}
		
	},toQatCourseDetail:function(no){
		location.href=basePath+'web/qat/courseDetail.jsp?id='+no;
	},toQatEvalu:function(){
		location.href=basePath+'web/qat/user/selfEvalu.jsp';
	},toQatOtherEvalu:function(){
		location.href=basePath+'web/qat/user/evaluOthers.jsp';
	},toQatStudentsForEvalu:function(id,state){
		if(userId==""){
			messageDialogShow('提示',"请登录后进入评价！");
			return;
		}
		if(state){
			location.href=basePath+'web/qat/evalu/studentsForEvalu.jsp?id='+id+"&state="+state;
		}else{
			location.href=basePath+'web/qat/evalu/studentsForEvalu.jsp?id='+id;
		}
	},toQatPaperForOther:function(id){
		if(userId==""){
			messageDialogShow('提示',"请登录后开始评价！");
			return;
		}
		location.href=basePath+'web/qat/evalu/qatPaperForOther.jsp?instNo='+id;
	},toQatPaper:function(instNo){
		location.href=basePath+'web/qat/evalu/qatPaper.jsp?instNo='+instNo;
	},toMyEvaluList:function(){
		location.href=basePath+"web/qat/user/userEvaluList.jsp";
	},toOtherEvaluList:function(){
		location.href=basePath+"web/qat/user/otherEvaluList.jsp";
	},toQatReport:function(instNo){
		location.href=basePath+'web/qat/evalu/report.jsp?instNo='+instNo;
	},toQatOtherReport:function(instNo){
		location.href=basePath+'web/qat/evalu/otherReport.jsp?instNo='+instNo;
	},toQatCourseMembers:function(id){
		location.href=basePath+'web/qat/courseMembers.jsp?id='+id;
	},toUserQat:function(id){
		location.href=basePath+'web/qat/user/userQat.jsp';
	},toUserQatReport:function(){
		var url=basePath+'web/qat/user/qatReport.jsp';
		web.openWindow(url);
	},editStudentInfo:function(){
		location.href=basePath+'web/edu/ucenter/userInfoConfig.jsp';
	},toDmsList:function(id){
		if(id){
			location.href=basePath+'web/dms/indexList.jsp?id='+id;
		}else{
			location.href=basePath+'web/dms/indexList.jsp';
		}
	},toDmsDetail:function(id){
		location.href=basePath+'web/dms/detail.jsp?id='+id;
	},showLogin:function(targetUrl){
		var url="";
		if(targetUrl){
			url=targetUrl;
		}
		layer.open({
  		  type: 2,
  		  title: '登录',
  		  shadeClose: true,
  		  shade: 0.8,
  		  area: ['580px', '320px'],
  		  content: basePath+'web/modal/Login.jsp?targetUrl='+url //iframe的url
  		}); 
	},showChangeCover:function(){
		layer.open({
	  		  type: 2,
	  		  title: '背景修改',
	  		  shadeClose: true,
	  		  shade: 0.8,
	  		  area: ['420px', '250px'],
	  		  content: basePath+'web/modal/changecover.jsp' //iframe的url
	  		}); 
		
	},showAvatarUpload:function(){
		layer.open({
	  		  type: 2,
	  		  title: '照片修改',
	  		  shadeClose: true,
	  		  shade: 0.8,
	  		  area: ['320px', '350px'],
	  		  content: basePath+'web/modal/changeAvatar.jsp' //iframe的url
	  		}); 
	},openWindow:function(url){
		var newWindow = window.open(url,"");
		var x=screen.availWidth;
		var y=screen.availHeight;
		newWindow.moveTo(0,0);
		newWindow.resizeTo(x,y-1);
	},message:function(text,type){//消息提示
		if(type=='error'){
			messageDialogShow('提示',text);
		}else{
			 new $.zui.Messager(text, {
			        icon: 'bell', // 定义消息图标
			        type: 'info',
			        placement:'bottom'
			    }).show();
		}
	},error:function(text){
		 new $.zui.Messager(text, {
		        icon: 'bell', // 定义消息图标
		        type: 'danger',
		        placement:'bottom'
		    }).show();
	},warning:function(text, title){
		 new $.zui.Messager(text, {
		        icon: 'bell', // 定义消息图标
		        type: 'warning',
		        placement:'bottom'
		    }).show();
	},confirm:function(content,callback){
		layer.confirm(content, {
			  title:"提示",
			  btn: ['确认','取消'] //按钮
			}, function(){
				if(typeof callback=='function'){
					callback(true);
				}
				layer.closeAll();
			}, function(){
				if(typeof callback=='function'){
					callback(false);
				}
			});
	},dialog:function(content,title,width,height,callback,type){
		var t=type;
		if(t==undefined){
			t=1;
		}
		var w=width;
		var h=height;
		if(w==undefined){
			w="300px";
		}
		if(h==undefined){
			h="200px";
		}
		if(title==undefined){
		  title="提示";	
		}
		layer.open({
	  		  type: t,
	  		  title: title,
	  		  shadeClose: true,
	  		  shade: 0.8,
	  		  area: [w, h],
	  		  content: content,
	  		  btn: ['确定','返回'],
	  		  btn1: function(){
					if(typeof callback=='function'){
						callback();
					}
					layer.closeAll();
		      },
		      btn2:function(){
		    	  layer.closeAll();
		      }
	  		}); 
	},showLoading: function () {
        $('body').append('<div class="big_loading"><img src="'+basePath+'web/images/big_loading.gif"/></div>');
    },hideLoading: function () {
        $('div').remove('.big_loading');
    },replace:function(original, oldString, newString){
		var i;
		while((i = original.indexOf(oldString))>-1)
		{
			original = original.substring(0,i) + newString + original.substring(i + oldString.length);
		}
		return original;
	},strInArray:function(str,array){
		for(var i=0;i<array.length;i=i+1){
			if(str==array[i]){
				return i;
			}
		}
		return -1;
	},bindGoTop:function() {//回到顶部
		goTopFun();
	},insertFace:function (obj) {
	    $('.XT_insert').css('z-index', '1000');
	    $('.XT_face').remove();
	    var html = '<div class="XT_face  XT_insert"><div class="triangle sanjiao"></div><div class="triangle_up sanjiao"></div>' +
	        '<div class="XT_face_main"><div class="XT_face_title"><span class="XT_face_bt" style="float: left">常用表情</span>' +
	        '<a onclick="web.close_face()" class="XT_face_close">X</a></div><div id="face" style="padding: 10px;"></div></div></div>';
	    obj.parents('.post_box').find('#emot_content').html(html);
	    web.getFace(obj.parents('.post_box').find('#emot_content'), 'miniblog');
	},close_face: function () {
	    $('.XT_face').remove();
	},face_chose:function (obj) {
	    var textarea = obj.parents('.post_box').find('textarea');
	    textarea.focus();
	    //textarea.val(textarea.val()+'['+obj.attr('title')+']');
	    var pos = web.getCursortPosition(textarea[0]);
	    var s = textarea.val();
	    if (obj.attr('data-type') == 'miniblog') {
	        textarea.val(s.substring(0, pos) + '[' + obj.attr('title') + ']' + s.substring(pos));
	        web.setCaretPosition(textarea[0], pos + 2 + obj.attr('title').length);
	    } else {
	        textarea.val(s.substring(0, pos) + '[' + obj.attr('title') + ':' + obj.attr('data-type') + ']' + s.substring(pos));
	        web.setCaretPosition(textarea[0], pos + 3 + obj.attr('title').length + obj.attr('data-type').length);
	    }
	},bind_face_pkg:function () {
	    $('[data-role="change_pkg"]').unbind('click');
	    $('[data-role="change_pkg"]').click(function () {
	        var $this = $(this)
	        var pkg = $this.attr('data-name');
	        web.faceData=[];
	        web.getFace($this.closest('#emot_content'), pkg);
	    })
	},getFace:function (obj, pkg) {
	    if (typeof pkg == 'undefined') {
	        pkg = 'miniblog';
	    }
	    var data=web.getFaceData(pkg);
        var expression = data.faceList;
        var tabList = data.tabList;
        var _imgHtml = '';
        if (tabList.length > 0) {
            if (tabList.length > 1) {
                _imgHtml = "<div class='face-tab'><ul>";
                for (var e in tabList) {
                    if (pkg == tabList[e].name) {
                        _imgHtml += "<li class='active' ><a data-role='change_pkg'  data-name='" + tabList[e].name + "'>" + tabList[e].title + "</a></li>";
                    } else {
                        _imgHtml += "<li><a data-role='change_pkg' data-name='" + tabList[e].name + "'>" + tabList[e].title + "</a></li>";
                    }
                }
                _imgHtml += "</ul></div>";
            }
            for (var k in expression) {
                _imgHtml += '<a href="javascript:void(0)" data-type="' + expression[k].type + '" title="' + expression[k].title + '" onclick="web.face_chose($(this))";><img src="' +basePath+ expression[k].src + '" width="24" height="24" /></a>';
            }
            _imgHtml += '<div class="c"></div>';
        } else {
            _imgHtml = '获取表情失败';
        }
        obj.find('#face').html(_imgHtml);
        web.bind_face_pkg()
	},getFaceData:function(tabName){
		if(web.faceData.length==0){
			web.faceData=web.ajax(basePath+'web/loadFaceData.ajax',{tabName:tabName},false);
		}
		return web.faceData;
	},getCursortPosition:function(ctrl) {//获取光标位置函数
	    var CaretPos = 0;	// IE Support
	    if (document.selection) {
	        ctrl.focus();
	        var Sel = document.selection.createRange();
	        Sel.moveStart('character', -ctrl.value.length);
	        CaretPos = Sel.text.length;
	    }
	    // Firefox support
	    else if (ctrl.selectionStart || ctrl.selectionStart == '0')
	        CaretPos = ctrl.selectionStart;
	    return (CaretPos);
	},setCaretPosition:function(ctrl, pos) {//设置光标位置函数
	    if (ctrl.setSelectionRange) {
	        ctrl.focus();
	        ctrl.setSelectionRange(pos, pos);
	    }
	    else if (ctrl.createTextRange) {
	        var range = ctrl.createTextRange();
	        range.collapse(true);
	        range.moveEnd('character', pos);
	        range.moveStart('character', pos);
	        range.select();
	    }
	},support:function(pkVal,table,callback){//支持，喜欢
		web.ajax(basePath+"web/support.ajax",{tableName:table,pkVal:pkVal},true,function(r){
			callback(r);
		});
	},submitComment:function(id,content,tableName,commitId,callback,score,noNameComment,timeLimit){//提交评论
		//$("#comment_content_"+id).attr("toCommit",'0');
		//obj.text('正在发表...').attr('class', 'btn btn-primary disabled');
		var sc=score;
		if(sc==undefined){
			sc=0;
		}
		var tl=timeLimit;//评价时间间隔限制0：不限制(单位：分钟)
		if(tl==undefined){
			tl=0;
		}
		var noName=noNameComment;//匿名评价
		if(noName==true){
			noName='1';
		}else{
			noName='0';
		}
		web.ajax(basePath+"web/submitCommet.ajax",{tableName:tableName,pkVal:id,content:content,commitId:commitId,score:sc,noName:noName,timeLimit:tl},true,function(r){
			web.close_face();
			callback(r);
		});
	},delComment:function(commentId,callback){//提交删除评论
		web.ajax(basePath+"web/delComment.ajax",{commentId:commentId},true,function(r){
			callback(r);
		});
	},loadCommentReport:function(id,tableName,filterCallback,loadCallback){//加载评论分析报告
		var container=$("#commentReport");
		if(container==undefined){
			return;
		}
		container.empty();
		web.ajax(basePath+"web/loadCommentsReport.ajax",{tableName:tableName,pkVal:id},true,function(r){
			var s0=parseInt(r.s0);
			var s1=parseInt(r.s1);
			var s2=parseInt(r.s2);
			var s3=parseInt(r.s3);
			var s4=parseInt(r.s4);
			var s5=parseInt(r.s5);
			var all=r.all;
			var builder=new Array();
			builder.push("<div class='comment-filter grid-row-1'> ");
		    builder.push("	<div class='comment-statistics'> <span class='statistics-num'>  "+r.goodPer+"%  </span> 好评度 </div> ");
		    builder.push("	<div class='f-rc-list filter-comment-rank js-f-rc-list'> ");
			builder.push("    	<label dataId='all' class='f-radio checked'>");
			builder.push("	    	<i class='icon-radio'></i>");
			builder.push("	    	<span class='f-rc-text'>全部评价("+all+")</span>");
			builder.push("    	</label> ");
			builder.push("    	<label dataId='5,4' class='f-radio'>");
			builder.push("	    	<i class='icon-radio'></i>");
			builder.push("	    	<span class='f-rc-text'>好评("+(s4+s5)+")</span>");
			builder.push("    	</label> ");
			builder.push("    	<label dataId='3,2' class='f-radio'>");
			builder.push("	    	<i class='icon-radio'></i>");
			builder.push("	    	<span class='f-rc-text'>中评("+(s3+s2)+")</span>");
			builder.push("    	</label> ");
			builder.push("    	<label dataId='1' class='f-radio' >");
			builder.push("	    	<i class='icon-radio'></i>");
			builder.push("	    	<span class='f-rc-text'>差评("+s1+")</span>");
			builder.push("    	</label> ");
			builder.push("    	<label dataId='0' class='f-radio' >");
			builder.push("	    	<i class='icon-radio'></i>");
			builder.push("	    	<span class='f-rc-text'>无评分("+s0+")</span>");
			builder.push("    	</label> ");
		    builder.push("	</div>");
		    builder.push("</div>");
		    container.append(builder.join(" "));
		    $(".f-radio",container).click(function(){
		    	if($(this).hasClass("checked")){
		    		return;
		    	}
		    	$(".checked",container).removeClass("checked");
		    	$(this).addClass("checked");
		    	if(typeof filterCallback=='function'){
		    		var dataId=$(this).attr("dataId");
		    		filterCallback(dataId);
		    	}
		    });
		    if(typeof loadCallback=='function'){
		    	loadCallback(r);
		    }
		});
	},ajax:function(url,param,sync,onsuccess,onerror){// ajax
		if(!url||url==""){
			return;
		}
		var result="-1";
		$.ajax({
			type: "POST",
			url: url,
			data:param,
			dataType:'json',
			async: sync,
			cache:false,
			success: function(responce){
				result = responce;
				if(typeof onsuccess=='function'){
					onsuccess(responce);
				}
			},
			error:function(json){
				result="-1";
				if(typeof onerror=='function'){
					onerror(json);
				}
			}
		});
		return result;
	},initPage:function(){
		web.bindGoTop();//回到顶部
		$(document).scroll(function () {
	        var left = '-' + $(window).scrollLeft() + 'px';
	        $('#nav_bar').css('left', left);
	        $('#sub_nav').css('left', left);
	    });
	},loadNewUserList:function(size,targetId){//加载最新加入用户
		web.ajax(basePath+'web/user/findNewUserList.ajax',{size:size},true,function(r){
			var data =r;
			var container=$("#"+targetId);
			for(var i=0;i<data.length;i++){
				var d=data[i];
				var builder=new Array();
				  builder.push("<li style='text-align: center'>");
	              builder.push("     <div>");
	              builder.push("          <div style='width: 64px;height: 64px'>");
	              builder.push("         	  <a href='javascript:web.toUserInfo("+d.usrNo+")'>");
	              builder.push("               <img src='"+basePath+d.avatar+"' ucard='"+d.userId+"' style='width: 64px;height: 64px' class='avatar-img ucard' >");
	              builder.push("             </a>");
	              builder.push("         </div>");
	              builder.push("          <div class='user-name' style='width:65px;'>");
	              builder.push("    <a style='width: 100%' class='text-more' title='"+d.nickname+"' href='javascript:web.toUserInfo("+d.usrNo+")'>"+d.nickname+"</a>");
	              builder.push("         </div>");
	              builder.push("     </div>");
	              builder.push(" </li>");
	            var li=$(builder.join(" "));
	            li.appendTo(container);
			}
		});
	},loadActiveUserList:function(size,targetId){//加载最新加入用户
		web.ajax(basePath+'web/user/findActiveUserList.ajax',{size:size},true,function(r){
			var data =r;
			var container=$("#"+targetId);
			for(var i=0;i<data.length;i++){
				var d=data[i];
				var builder=new Array();
				builder.push("<li style='text-align: center'>");
	              builder.push("     <div>");
	              builder.push("          <div style='width: 64px;height: 64px'>");
	              builder.push("         	  <a href='javascript:web.toUserInfo("+d.usrNo+")'>");
	              builder.push("               <img src='"+basePath+d.avatar+"' ucard='"+d.userId+"' style='width: 64px;height: 64px' class='avatar-img ucard' >");
	              builder.push("            </a>");
	              builder.push("         </div>");
	              builder.push("          <div class='user-name' style='width:65px;'>");
	              builder.push("    <a style='width: 100%' class='text-more' title='"+d.nickname+"' href='javascript:web.toUserInfo("+d.usrNo+")'>"+d.nickname+"</a>");
	              builder.push("         </div>");
	              builder.push("     </div>");
	              builder.push(" </li>");
	            var li=$(builder.join(" "));
	            li.appendTo(container);
			}
		});
	},doCheckin:function(){
		if(userId==""){
			messageDialogShow('提示',"请登录后签到！");
			return;
		}
	},loadCheckInRank:function(type,targetId){
		var container=$("#"+targetId);
		web.ajax(basePath+"web/loadCheckInRank.ajax",{type:type,size:5},true,function(r){
			container.empty();
			var data=r;
			if(type=='today'){
				var j=1;
				for(var i=0;i<data.length;i++){
					var d=data[i];
					var builder=new Array();
					builder.push("<li style='margin-bottom: 10px;' class='row'>");
	                builder.push("      <div style='line-height: 32px' class='paiming col-xs-2'>");
	                builder.push(j++);
	                builder.push("      </div>");
	                builder.push("       <div class='list col-xs-6'>");
	                builder.push("          <img src='"+basePath+d.avatar+"' ucard='"+d.userId+"' style='width: 32px' class='avatar-img ucard'>");
	                builder.push("          <a href='javascript:web.toUserInfo("+d.usrNo+")' style='width: 50%;vertical-align: middle' class='text-more'>");
	                builder.push(d.username);
	                builder.push("          </a>");
	                builder.push("     </div>");
	                builder.push("     <div style='line-height: 32px' class='col-xs-4 check_date'>");
	                builder.push(d.time);                   
	                builder.push("      </div>");
	                builder.push(" </li>");
	                var li=$(builder.join(" "));
	                li.appendTo(container);
				}
				
			}else if(type=='con'){
				var j=1;
				for(var i=0;i<data.length;i++){
					var d=data[i];
					var builder=new Array();
					 builder.push("<li style='margin-bottom: 10px;' class='row'>");
	                 builder.push("   <div class='col-xs-3'>");
	                 builder.push("       <a href='javascript:web.toUserInfo("+d.usrNo+")' ucard='100' data-hasqtip='276'>");
	                 builder.push("           <img src='"+basePath+d.avatar+"'  ucard='"+d.userId+"'  style='width: 48px;' class='avatar-img ucard'>");
	                 builder.push("      </a>");
	                 builder.push("  </div>");
	                 builder.push("  <div class='col-xs-5 '>");
	                 builder.push("      <div style='width: 100%' class='pull-left'>");
	                 builder.push("          <div style='width: 40%;float: left'>");
	                 builder.push("             Top"+j+" </div>");
	                 j++;
	                 builder.push("         <a href='javascript:web.toUserInfo("+d.usrNo+")' style='width: 60%;float: left' class='text-more' ucard='100' data-hasqtip='277'>");
	                 builder.push(d.username);
	                 builder.push("		    </a>");
	                 builder.push("     </div>");
	                 builder.push("      <div class='pull-left'>");
	                 builder.push("         连签"+d.con+"天");
	                 builder.push("     </div>");
	                 builder.push(" </div>");
	                 builder.push("<div class='col-xs-4'>");
	                 var follow=d.follow;
	                 if(follow=="1"){
	                	 builder.push("     <button style='width: 65px' data-follow-who='"+d.userId+"'  class='btn btn-default canfollow' type='button'>");
						 builder.push("	            已关注");
					     builder.push("	   </button>");
	                 }else{
	                	 builder.push("     <button style='width: 65px' data-follow-who='"+d.userId+"'   class='btn btn-primary follow' type='button'>");
						 builder.push("	            关注");
					     builder.push("	   </button>");
	                 }
	                 
	                 builder.push(" </div>");
	                 builder.push("</li>");
	                 var li=$(builder.join(" "));
		             li.appendTo(container);
				}
			}else if(type=='total'){
				var j=1;
				for(var i=0;i<data.length;i++){
					var d=data[i];
					var builder=new Array();
					 builder.push("<li style='margin-bottom: 10px;' class='row'>");
	                 builder.push("   <div class='col-xs-3'>");
	                 builder.push("       <a href='javascript:web.toUserInfo("+d.usrNo+")' ucard='100' data-hasqtip='276'>");
	                 builder.push("           <img src='"+basePath+d.avatar+"'  ucard='"+d.userId+"'  style='width: 48px;' class='avatar-img ucard'>");
	                 builder.push("      </a>");
	                 builder.push("  </div>");
	                 builder.push("  <div class='col-xs-5 '>");
	                 builder.push("      <div style='width: 100%' class='pull-left'>");
	                 builder.push("          <div style='width: 40%;float: left'>");
	                 builder.push("             Top"+j+" </div>");
	                 j++;
	                 builder.push("         <a href='javascript:web.toUserInfo("+d.usrNo+")' style='width: 60%;float: left' class='text-more' ucard='100' data-hasqtip='277'>");
	                 builder.push(d.username);
	                 builder.push("		    </a>");
	                 builder.push("     </div>");
	                 builder.push("      <div class='pull-left'>");
	                 builder.push("         累签"+d.total+"天");
	                 builder.push("     </div>");
	                 builder.push(" </div>");
	                 builder.push("<div class='col-xs-4'>");
	                 var follow=d.follow;
	                 if(follow=="1"){
	                	 builder.push("     <button style='width: 65px' data-follow-who='"+d.userId+"'  class='btn btn-default canfollow' type='button'>");
						 builder.push("	            已关注");
					     builder.push("	   </button>");
	                 }else{
	                	 builder.push("     <button style='width: 65px' data-follow-who='"+d.userId+"'  class='btn btn-primary follow' type='button'>");
						 builder.push("	            关注");
					     builder.push("	   </button>");
	                 }
	                 builder.push(" </div>");
	                 builder.push("</li>");
	                 var li=$(builder.join(" "));
		             li.appendTo(container);
				}
			}
			$("button",container).click(function(){
				web.followBtnOnclick(this);
			});
			web.ucard();
		});
	},ucard:function() {//绑定用户小名片
	    $('img.ucard').qtip({ // Grab some elements to apply the tooltip to
	        suppress: true,
	        content: {
	            text: function (event, api) {
	                var uid = $(this).attr('ucard');
	                //var data={usrNo:'',userId:'xum',username:'许勉',nickname:'许勉',cover:'weibo/Uploads/Picture/2015-10-02/2015100222130242593.jpg',avatar:'sns/Addons/Avatar/default_64_64.jpg',followed:'1',signature:'',follows:'3',fans:'4'};
	                web.ajax(basePath+"web/user/ucardInfo.ajax",{userId:uid},true,function(data){
	                    var builder=new Array();
	                    builder.push("		<div style='width: 350px;font-size: 13px;line-height: 23px;' class='clearfix'>");
	                    builder.push("		    <div style='padding: 1px' class='col-xs-12'>");
	                    var cover=basePath+'web/images/qtip_bg.png';
	                    if(data.cover!=""){
	                    	cover=basePath+data.cover;
	                    }
	                    builder.push("		        <img src='"+cover+"' class='img-responsive'>");
	                    builder.push("		    </div>");
	                    builder.push("		    <div style='padding: 2px;margin-top: -25px;' class='col-xs-12'>");
	                    builder.push("		        <div class='col-xs-3'>");
	                    builder.push("		            <img style='margin-top: -10px' class='avatar-img' src='"+basePath+data.avatar+"'>");
	                    builder.push("		        </div>");
	                    builder.push("		        <div style='padding-top: 25px;padding-right:10px;font-size: 12px;' class='col-xs-9'>");
	                    builder.push("		            <div style='font-size: 16px;'>");
	                    builder.push("		            	<a title='' href='javascript:web.toUserInfo("+data.usrNo+")'>"+data.nickname+"</a>");
	                   // builder.push("		                   <span style='background:#666666 !important;color:#ffffff !important;vertical-align: middle;margin-left: 3px;' title='站长' class='label label-badge rank-label'>");
	                  //  builder.push("		                       	站长");
	                   // builder.push("		                   </span>");            
	                    builder.push("		            </div>");
	                    builder.push("		            <div>");
	                    builder.push("		                <a title='我的关注' href='javascript:web.toUserFollows("+data.usrNo+")'>关注："+data.follows+"</a>&nbsp;&nbsp;&nbsp;&nbsp;");
	                    builder.push("		                <a title='我的关注' href='javascript:web.toUserFans("+data.usrNo+")'>粉丝："+data.fans+"</a>&nbsp;&nbsp;&nbsp;&nbsp;");
	                    builder.push("		            </div>");
	                    builder.push("		            <div>");
	                    builder.push("		                	个性签名：");
	                    builder.push("		                <span class='text-muted'>");
	                    var signature="还没想好O(∩_∩)O";
	                    if(data.signature!=""){
	                    	signature=data.signature;
	                    }
	                    builder.push(signature);   
	                    builder.push("		                 </span>");
	                    builder.push("		            </div>");
	                    builder.push("		            <div style='margin-bottom: 15px;color: #848484'>");
	                    builder.push("		                	个人标签：<span><a href='javascript:void(0)' style='color: #848484;'>无</a></span> ");           
	                    builder.push("		            </div>");
	                    builder.push("		        </div>");
	                    builder.push("		    </div>");
	                    builder.push("		    <div style='background: #f1f1f1;' class='col-xs-12'>	");	
	                    if(userId!=data.userId){
	                    	 builder.push("<button style='float: right;margin: 5px 0;padding: 2px 12px;margin-left: 8px;' onclick='talker.start_talk(1632)' class='btn btn-default' type='button'>");
	                         builder.push("	聊&nbsp;天");
	                         builder.push("</button>");
	                         builder.push("    &nbsp;"); 
	                         if(data.followed=='1'){
	                        	 builder.push("<button style='float: right;margin: 5px 0;padding: 2px 12px;' data-follow-who='"+data.userId+"'  onclick='web.followBtnOnclick(this)'  class='btn btn-default' type='button'>");
	 	                         builder.push("    已关注");
	 	                         builder.push("</button>");
	 	                    }else{
	 	                    	 builder.push("<button style='float: right;margin: 5px 0;padding: 2px 12px;' data-follow-who='"+data.userId+"' onclick='web.followBtnOnclick(this)'  class='btn btn-primary' type='button'>");
	 	                         builder.push("    关&nbsp;注");
	 	                         builder.push("</button>");
	 	                    }
	                    }
	                    builder.push("			</div>");
	                    builder.push("		</div>");
	                    builder.push("	</div>");
	                    builder.push("</div>");
	                    var tpl = $(builder.join(" "));
	                    api.set('content.text', tpl.html());
	                });
                    return "正在获取数据...";
	            }

	        }, position: {
	            viewport: $(window)
	        }, show: {
	        	solo: true,
	            delay: 500}, style: {
	            classes: 'qtip-bootstrap'

	        }, hide: {
	        	delay: 500, fixed: true
	        }
	    })
	},followBtnOnclick:function(obj,callback,tableName){//关注按钮点击事件
		var tname="";
		if(tableName){
			tname=tableName;
		}
		if(userId==""){
			//messageDialogShow('提示',"请登录后关注！");
			return;
		}
		var toUserId=$(obj).attr("data-follow-who");
		var obj=$(obj);
		if($(obj).hasClass("btn-primary")){
			web.ajax(basePath+"web/doFollow.ajax",{toUserId:toUserId,userId:userId,tableName:tname},true,function(r){
				if(typeof callback=='function'){
					callback(r,true);
				}else{
					if(r.state==0){
						//messageDialogShow('提示',r.msgInfo);
						$(obj).html("已关注");
						$(obj).removeClass("btn-primary").addClass("btn-default");;
					}else{
						//messageDialogShow('错误',r.msgInfo,2);
					}
				}
			});
		}else{
			web.ajax(basePath+"web/canFollow.ajax",{toUserId:toUserId,userId:userId,tableName:tname},true,function(r){
				if(typeof callback=='function'){
					callback(r,false);
				}else{
					if(r.state==0){
						//messageDialogShow('提示',r.msgInfo);
						$(obj).html("关注");
						$(obj).addClass("btn-primary").removeClass("btn-default");;
					}else{
						//messageDialogShow('错误',r.msgInfo,2);
					}
				}
			});
		}
	
	},loadMayFollowUserList:function(targetId){//加载可能关注的用户
		web.ajax(basePath+"web/user/findMayFollowUserList.ajax",{userId:userId},true,function(data){
			var container=$("#"+targetId);
			container.empty();
			for(var i=0;i<data.length;i++){
				var d=data[i];
				var builder=new Array();
				builder.push("<div data-role='user_fadeout_641' class='col-md-12'>");
			    builder.push("    <div class='col-md-4 pad0'>");
			    builder.push("        <a href='javascript:web.toUserInfo("+d.usrNo+")'>");
			    builder.push("            <img src='"+basePath+d.avatar+"' style='width: 60px;height:60px;' class='avatar-img ucard' ucard='"+d.userId+"' data-hasqtip='201' aria-describedby='qtip-124'>");
			    builder.push("        </a>");
			    builder.push("    </div>");
			    builder.push("    <div class='col-md-8 pad0'>");
			    builder.push("        <p style='margin-bottom: 0px;font-size: 16px;'>");
			    builder.push("            <a href='javascript:web.toUserInfo("+d.usrNo+")' target='_blank'>");
			    builder.push("                <span ucard='641' data-hasqtip='202'>"+d.username+"</span>");
			    builder.push("            </a>");
			    builder.push("        </p>");
			    builder.push("<button style='margin: 5px 0;padding: 2px 12px;' data-follow-who='"+d.userId+"' targetId='"+targetId+"' onclick='web.dofollowForMay(this)'   class='btn btn-primary dofollow' type='button'>");
                builder.push("    关&nbsp;注");
                builder.push("</button>");
			    builder.push("    </div>");
			    builder.push("    <div style='padding-top: 10px' class='col-md-12 pad0'>");
			    builder.push("        <p style='background-color: #f2f2f5;padding: 10px'>");
			    builder.push("             <sapn style='color: #808080'>"+d.reason+"</sapn>");            
			    builder.push("         </p>");
			    builder.push("    </div>");
				builder.push("</div>");
	            var li=$(builder.join(" "));
	            li.appendTo(container);
			}
			web.ucard();
		});
	},dofollowForMay:function(obj){
		if(userId==""){
			messageDialogShow('提示',"请登录后关注！");
			return;
		}
		var toUserId=$(obj).attr("data-follow-who");
		var targetId=$(obj).attr("targetId");
		web.ajax(basePath+"web/doFollow.ajax",{toUserId:toUserId,userId:userId},true,function(r){
			if(r.state==0){
				messageDialogShow('提示',r.msgInfo);
				web.loadMayFollowUserList(targetId);
			}else{
				messageDialogShow('错误',r.msgInfo,2);
			}
		});
	},datePicker:function(obj){
		if($(obj).hasClass("i-form-field-disabled")){
			return;
		}
		var date=$(obj).attr("date");
		var name=$(obj).attr("name");
		var fieldType=$(obj).attr('fieldType');
		var dateFmt='yyyy-MM-dd';
		if(fieldType=='datetime'){
			dateFmt='yyyy-MM-dd HH:mm';
		}
		if(fieldType=='datetimeSS'){
			dateFmt='yyyy-MM-dd HH:mm:ss';
		}
		if(date){
			var tname=name;
			if(name.indexOf(".">0)){
				tname=web.replace(name, ".", "_"); 
			}
			if(date=="min"){
				WdatePicker({maxDate:"#F{$dp.$D('s_"+tname+"_max')}",dateFmt:dateFmt});
			}else if(date=="max"){
				WdatePicker({minDate:"#F{$dp.$D('s_"+tname+"_min')}",dateFmt:dateFmt});
			}
		}else{
			WdatePicker({isShowClear:true,readOnly:false,dateFmt:dateFmt});
		}
	},createPage:function(){
		currentPage=parseInt(currentPage);
    	var builder=new Array();
    	builder.push('<a title="" href="javascript:goPageAjax(1);">首</a>');
    	if(currentPage<=1){
    		builder.push('<a title="" href="javascript:void(0)" class="undisable" id="backpage">&lt;</a>');
    	}else{
    		var preNum=currentPage-1;
    		builder.push('<a title="" href="javascript:goPageAjax('+preNum+')" class="undisable" id="backpage">&lt;</a>');
    	}
		nexNum=currentPage+1
    	builder.push('<a class="undisable" title="" href="javascript:goPageAjax('+nexNum+')" id="nextpage">&gt;</a>');
    	builder.push('<a title="" href="javascript:goPageAjax('+totalPage+');">末</a>');
    	builder.push('<div class="clear"></div>');
    	$(".paging").html(builder.join(" "));
    	showAjaxPageNumber();
	},/*loadMessage:function(){
		if(userId==""){
			return;
		}
		web.ajax(basePath+"web/loadMessage.ajax",{userId:userId},true,function(r){
			var list=r.items;
			web.buildMessagePanel(list);
		});
	},buildMessagePanel:function(data){
		var builder =new Array();
		
		builder.push("<a data-toggle='dropdown' class='dropdown-toggle text-left' id='nav_info'>");
        builder.push("    <span class='icon-bell'></span>");
		builder.push("	<span class='label label-badge label-success' id='nav_bandage_count'>"+data.length+"</span>");
        builder.push("</a>");
        builder.push("<ul class='dropdown-menu extended notification'>");
        builder.push("    <li>");
        builder.push("        <div class='clearfix header'>");
        builder.push("            <div class='col-xs-6 nav_align_left'>");
		builder.push("				<span id='nav_hint_count'>"+data.length+"</span> 条未读");
        builder.push("            </div>");
        builder.push("        </div>");
        builder.push("    </li>");
        builder.push("    <li class='info-list'>");
        builder.push("        <div class='list-wrap' >");
        builder.push("            <div class='slimScrollDiv' style='position: relative; overflow: hidden; width: auto; height: 350px;'>");
        builder.push("            <ul style='width: auto; overflow:auto; height: 350px;' class='dropdown-menu-list scroller  list-data' id='nav_message'>");
        for(var i=0;i<data.length;i++){
        	var msg=data[i];
        	 builder.push("                          <li>");
             builder.push("                            <a onclick=\"web.toMessageUrl("+msg.msgRecNo+",'"+msg.url+"')\" data-url=''>");
             builder.push("                               <h3 class='margin-top-0'> <i class='icon-bell'></i>");
             builder.push("                                "+msg.title);
             builder.push("                               </h3>");
             builder.push("                                <p> "+msg.content+"</p>");
             builder.push("                            <span class='time'>");
             builder.push("                             		"+msg.reachTimeDesc);
             builder.push("                            </span>");
             builder.push("                            </a>");
             builder.push("                        </li>");
        }
        builder.push("            </ul>");
		builder.push("			<div class='slimScrollBar' style='background: rgb(0, 0, 0) none repeat scroll 0% 0%; width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;'></div>");
		builder.push("			<div class='slimScrollRail' style='width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51) none repeat scroll 0% 0%; opacity: 0.2; z-index: 90; right: 1px;'></div>");
		builder.push("		   </div>");
        builder.push("        </div>");
        builder.push("    </li>");
        builder.push("    <li class='footer text-right'>");
        builder.push("        <div class='btn-group'>");
        builder.push("            <button class='btn btn-sm  ' onclick='web.setMessageAllRead()'>");
		builder.push("				<i class='icon-check'></i> 全部已读");
        builder.push("            </button>");
        builder.push("            <a href='javascript:web.toMessageCenter()' class='btn  btn-sm  '>");
        builder.push("               	 查看消息");
        builder.push("            </a>");
        builder.push("        </div>");
        builder.push("    </li>");
        builder.push("</ul>");
        
        $("#sys_message").empty();
        $("#sys_message").append(builder.join(" "));
	},*/setMessageAllRead:function(){
		if(userId==""){
			return;
		}
		web.confirm("确认设置消息为全部已读？",function(c){
			if(c){
				web.ajax(basePath+"web/resetMessageState.ajax",{userId:userId,ids:'all',state:'1'},true,function(r){
					web.refreshPage();
				});
			}
		});
	},setMessageRead:function(id){
		if(userId==""){
			return;
		}
		web.ajax(basePath+"web/resetMessageState.ajax",{userId:userId,ids:id,state:'1'},true,function(r){
			web.refreshPage();
		});
	},toMessageUrl:function(id,url){
		if(url==""){
			return;
		}
		web.ajax(basePath+"web/resetMessageState.ajax",{userId:userId,ids:id,state:'1'},true,function(r){
			location.href=basePath+url;
		});
	},submitCollect:function(id,tableName,callback){//提交收藏
		web.ajax(basePath+"web/submitCollect.ajax",{tableName:tableName,pkVal:id,status:"1"},true,function(r){
			callback(r);
		});
	},submitUncollect:function(id,tableName,callback){//提交收藏
		web.ajax(basePath+"web/submitCollect.ajax",{tableName:tableName,pkVal:id,status:"0"},true,function(r){
			callback(r);
		});
	},downloadAttachment:function(attach,id){
		var tmp={
				localType:'local',
				localAddress:'',
				username:'',
				password:'',
				filePath:'uploadfiles/files',
				saveName:'',
				fileName:'',
				fileType:'',
				pathType:'absolute',
				encode:'UTF-8'
			}
			tmp=$.extend(tmp,attach[0]);
			if(tmp.fileName!=''||undefined!=tmp.fileName){
				tmp.fileName=tmp.fileName.substring(0, tmp.fileName.lastIndexOf("."));
			}
			var url=basePath+"fileDownloadServlet?filepath="+encodeURI(encodeURI(tmp.filePath))+"&saveName="+tmp.saveName+"&filename="+encodeURI(encodeURI(tmp.fileName))+"&fileType="+tmp.fileType+"&pathType="+tmp.pathType+"&localType="+tmp.localType+"&localAddress="+tmp.localAddress+"&username="+tmp.username+"&password="+tmp.password+"&encode="+tmp.encode;
			web.openWindowWithPost(url,'newwindow','','');  
	},openWindowWithPost:function(url,name,keys,values){   
		var oForm = document.createElement("form");   
		oForm.id="testid";   
		oForm.method="post";   
		oForm.action=url;   
		oForm.target="_self";   
		if (keys && values && (keys.length == values.length))   
		{   
			for (var i=0; i < keys.length; i++)   
			{   
				var oInput = document.createElement("input");   
				oInput.type="text";   
				oInput.name=keys[i];   
				oInput.value=values[i];   
				oForm.appendChild(oInput);   
			}   
		}  
		document.body.appendChild(oForm);  
		oForm.submit();    
	},sendVerCode:function(phonenum){
		web.ajax(basePath+"web/vercode.ajax",{phonenum:phonenum},true,function(r){
			alert(r);
		});
	},attachmentPreview:function(d){
		var basePath1 = '';
		if (basePath.indexOf('wljy.whut.edu.cn') != -1) {
			basePath1 = REPORTPATH;
		}else{
			basePath1 = basePath;
		}
		var url = basePath1 + "aweto/ui/plugins/pdfjs/web/viewer.html?file=";
		var urlNotOffice = basePath1 + "aweto/pages/base/attachmentView.jsp";
		var fileTpye = d.fileType;
		var r = '-1';
		//var r = aweto.ajaxCrossDomain(basePath1 + 'attachmentViewServlet',{info:JSON.encode(d)},false);
		$.ajax({
			type : "GET",
			url : basePath1 + 'attachmentViewServlet',
			data : {info:JSON.stringify(d)},
			dataType : 'jsonp',
			async : false,
			cache : false,
			crossDomain: true,
			success : function(responce) {
				r = responce;
				if(r.state == '0'){
					if(fileTpye.toLowerCase() == 'pdf' || fileTpye.toLowerCase() == 'doc' || fileTpye.toLowerCase() == 'docx' || fileTpye.toLowerCase() == 'ppt' ||
						fileTpye.toLowerCase() == 'pptx' || fileTpye.toLowerCase() == 'xls' || fileTpye.toLowerCase() == 'xlsx'){
						var position = r.value.indexOf('Liems');
						var filePath = basePath1 + r.value.substring(position + 6);
						url += filePath;
						window.open(url,'_target');
					}else{
						if(fileTpye.toLowerCase() == 'jpg' || fileTpye.toLowerCase() == 'png' || fileTpye.toLowerCase() == 'bmp' || fileTpye.toLowerCase() == 'gif'){
							var position = r.value.indexOf('Liems');
							var filePath = basePath1 + r.value.substring(position + 6);
							url += filePath;
							window.open(urlNotOffice+'?flag=1&url='+filePath, '_target');
						}else if(fileTpye.toLowerCase() == 'txt'){
							window.open(urlNotOffice+'?flag=2&url='+r.value, '_target');
						}else{
							messageDialogShow('提示',"该格式不支持预览！");
							return;
						}
					}
				}else{
					messageDialogShow('提示',"文件预览失败！");
					return;
				}
			},
			error : function(json) {
				return;
			}
			
		});
	}
};


//右侧浮动 在线客服，官方微信， 返回顶部
function goTopFun() {
    var _gt = $("#goTopBtn1");
    _gt.bind("click", function() {
        $("html,body").animate({"scrollTop" : 0}, 500);
    });
    var goTop = function() {
        var sTop = $(document).scrollTop();
        (sTop > 120) ? _gt.fadeIn(50) : _gt.fadeOut(50);
    };
    $(window).bind("scroll" , goTop);
}

/*//返回互动交流
function toBBS() {
	var url=basePath+"web/bbs/indexList.jsp";
	web.openWindow(url);
}

//返回分组讨论
function toGroup() {
	var url=basePath+"web/groupindex.htm";
	web.openWindow(url);
}*/

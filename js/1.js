var tq_rand = "292137296228701";
var tq_acd = "";
var tq_adminid = "9840302";
var tq_auto_invit_delay = "";
var tq_backimage = "";
var tq_bad_click_times = "5";
var tq_bottom_img = "";
var tq_bottom_tips = "";
var tq_bottom_url = "";
var tq_click_interval = "1";
var tq_color = "";
var tq_department_id = "-1";
var tq_displaytype = "";
var tq_down_img = "";
var tq_down_url = "";
var tq_encode = "";
var tq_float_html = "";
var tq_float_layout_cfg = '';
var tq_float_right = "-10";
var tq_float_style = "";
var tq_float_type = "";
var tq_global_invite_words = "";
var tq_group_bg_img = "";
var tq_group_flag = "";
var tq_groupname = "";
var tq_id = "1604523";
var tq_infocard_url = "";
var tq_interval_time_type = "2";
var tq_invit_accept_img = "";
var tq_invit_accept_img_en = "";
var tq_invit_auto_hide_delay = "";
var tq_invit_bg_img = "";
var tq_invit_bg_img_en = "";
var tq_invit_call_img = "";
var tq_invit_call_img_en = "";
var tq_invit_close_img = "";
var tq_invit_close_img_en = "";
var tq_invit_color = "";
var tq_invit_come_times = "";
var tq_invit_domain_show_time = "10";
var tq_invit_is_hide_float = "";
var tq_invit_layout_cfg = '';
var tq_invit_mode = "";
var tq_invit_refuse_img = "";
var tq_invit_refuse_img_en = "";
var tq_invit_reshow_inteval = "";
var tq_invit_show_time = "3";
var tq_invit_sound = "";
var tq_invit_style = "";
var tq_invit_title = "";
var tq_invit_title_en = "";
var tq_is_anti_bad_click = "0";
var tq_is_fix_flash = "0";
var tq_is_fold_term = "";
var tq_is_global_invite = "";
var tq_is_mask = "";
var tq_is_message_sms = "0";
var tq_is_minimess = "1";
var tq_is_panel_float = "1";
var tq_is_parse_ip = "";
var tq_is_send_mail = "0";
var tq_is_update_online_flag = "0";
var tq_iscallback = "1";
var tq_isnoshowuser = "";
var tq_language = "1";
var tq_language_type = "";
var tq_middle_img = "";
var tq_minimess_color = "1";
var tq_minimess_custom_inputs = "";
var tq_minimess_message_tip = "";
var tq_minimess_position = "LD";
var tq_minimess_selectable_inputs = "";
var tq_minimess_style = "1";
var tq_minimess_tactic = "";
var tq_minimess_title = "";
var tq_name = "TQ\u4ee3\u7801(1)";
var tq_not_reshow = "";
var tq_offline_gif = "";
var tq_offline_icon = "";
var tq_online_gif = "";
var tq_online_icon = "";
var tq_page_templete_id = "";
var tq_prevent_style = "1";
var tq_prevent_time = "1";
var tq_prevent_tip = "";
var tq_showtime = "";
var tq_sitecount = "";
var tq_siteid = "";
var tq_sort = "0";
var tq_static_offline_img = "";
var tq_static_online_img = "";
var tq_tactic_id = "";
var tq_title = "";
var tq_title_en = "";
var tq_top = "100";
var tq_type = "2";
var tq_up_img = "";
var tq_useraccount = "0";
var tq_version = "20100501";
var tq_welcome_msg = "";
var tq_welcome_msg_en = "";
var tq_if_tryout = "1";
var tq_logoLink = '';
var tq_kefuimg_cfg = '{"ext":"png","s":"0","on":"","off":"","w":"85","h":"85","cls_w":"98","cls_h":"97","isnoshowuser":"0","isfloat":"1","isstatic":"0","close":{"disp":"0","t":"2","r":"4","h":"30","w":"30"},"mini":{"s":"1","img":"","disp":"0","expd":"0","animt":0}}';
var tq_webscreen_url = "https://vipwebscreen.agent.tq.cn";
var tq_floatserver_url = "https://floatagent.tq.cn";
var tq_verify_img_file_name = "qPHVlCua23T5SAw1fvmbOw**";
var tq_member_uins = '[{"b":"","h":"","m":[{"id":"9840318","n":"123","o":0,"t":"tq","w":"123"},{"id":"9840317","n":"123","o":0,"t":"tq","w":"123"},{"id":"9840316","n":"123","o":0,"t":"tq","w":"123"},{"id":"9840315","n":"123","o":0,"t":"tq","w":"123"}],"n":""}]';
var tq_directchat_config = '';


var TQLoadJSUtils = {
    defaultDomain: "http://sysimages.tq.cn",
    currentJsName: "all_20100501.js",
    jsToLoad: ["\/js\/vip\/tqurl_config.js", "\/js\/vip\/_all_20100501.js"],
    getJSPath: function () {
        var s = document.currentScript;
        if (typeof(s) == "undefined" || s == null) {
            if (document.scripts) {
                var ss = document.scripts;
                var l = ss.length;
                if (l > 0) {
                    for (var i = 0; i < l; i++) {
                        var o = ss[i];
                        if (o.src && o.src.indexOf(this.currentJsName) != -1) {
                            return o.src
                        }
                    }
                }
            } else {
                var ss = document.getElementsByTagName("script");
                if (ss != null && ss.length > 0) {
                    var l = ss.length;
                    for (var i = 0; i < l; i++) {
                        var o = ss[i].getAttribute("src");
                        if (o != null && o.indexOf(this.currentJsName) != -1) {
                            return o
                        }
                    }
                }
            }
        } else {
            if (s.src) return s.src
        }
        return this.defaultDomain
    },
    getDomain: function (url) {
        var l = url.split("\/\/")[1].split("\/")[0];
        return l
    },
    getHttpProtocol: function () {
        var s = "http://";
        var _href = window.location.href;
        if (_href && _href.length > 0 && _href.split("\/\/")[0] == "https:") {
            s = "https://"
        }
        return s
    },
    LoadJs: function () {
        for (var i = 0; i < this.jsToLoad.length; i++) {
            document.write('\<script language="javascript" src="' + this.getHttpProtocol() + this.getDomain(this.getJSPath()) + this.jsToLoad[i] + '"\>\<\/script\>')
        }
    }
};
TQLoadJSUtils.LoadJs();
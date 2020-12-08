(function () {
    function n() {
        var d = window;
        var dd = document;
        var tag = dd.querySelector('script[src$="/scripts/fez.js"]');
        if (!tag) {
            dd.write('<p class="error">liveRES: Cannot find script tag</p>');
            return;
        }

        var src = tag.getAttribute("src");
        if (!src) {
            dd.write('<p class="error">liveRES: Cannot find script source</p>');
            return;
        }

        var ws = src.replace('/scripts/fez.js', '/fezrez.aspx');

        var hi = d._fez_height;
        var wi = d._fez_width;
        var sc = d._fez_scrolling;
        var ref = encodeURIComponent(dd.referrer);
        var url = encodeURIComponent(dd.location);

        if (hi == '' || hi == 'undefined') hi = '300';
        if (wi == '' || wi == 'undefined') wi = '200';
        if (sc == '' || sc == 'undefined') sc = 'no';
        if (d._fez_offer == 'undefined' || d._fez_offer == null) d._fez_offer = ''
        if (d._fez_offerpopup == 'undefined' || d._fez_offerpopup == null) d._fez_offerpopup = ''
        if (d._fez_daymarketingpopup == 'undefined' || d._fez_daymarketingpopup == null) d._fez_daymarketingpopup = ''

        var opick = '', choosefull = '', opchoosefull = '', requests = '', title = '', forename = '', surname = '', tel = '', email = '', terms = '', callback = '', scriptinsert = '', mandrq = '', rqname = '', nocookie = '', enqinline = '', enqinlinecoversdesc = '', enqinlinetimedesc = '', enqpopcoversdesc = '', enqpoptimedesc = '', findnext = '', notimespopup = '', ppfx = '', facebook = '', defaultRestaurant = '';

        if (d._fez_offerpicker == '1') opick = '&opick=' + d._fez_offerpicker;
        if (d._fez_choosefullprice == '1') choosefull = '&fpo=' + d._fez_choosefullprice;
        if (d._fez_offerpopupchoosefullprice == '1') opchoosefull = '&opfp=' + d._fez_offerpopupchoosefullprice;

        if (!(typeof (d._fez_requests) == 'undefined')) requests = "&requests=" + d._fez_requests;
        if (!(typeof (d._fez_title) == 'undefined')) title = "&title=" + d._fez_title;
        if (!(typeof (d._fez_forename) == 'undefined')) forename = "&forename=" + d._fez_forename;
        if (!(typeof (d._fez_surname) == 'undefined')) surname = "&surname=" + d._fez_surname;
        if (!(typeof (d._fez_tel) == 'undefined')) tel = "&tel=" + d._fez_tel;
        if (!(typeof (d._fez_email) == 'undefined')) email = "&email=" + d._fez_email;
        if (!(typeof (d._fez_terms) == 'undefined')) terms = "&terms=" + d._fez_terms;
        if (!(typeof (d._fez_callbackurl) == 'undefined')) callback = "&callback=" + encodeURIComponent(d._fez_callbackurl);
        if (!(typeof (d._fez_scriptinsert) == 'undefined')) scriptinsert = "&scrins=" + encodeURIComponent(d._fez_scriptinsert);
        if (!(typeof (d._fez_requestsmandatory) == 'undefined')) mandrq = "&mandrq=" + encodeURIComponent(d._fez_requestsmandatory);
        if (!(typeof (d._fez_requestsname) == 'undefined')) rqname = "&rqname=" + encodeURIComponent(d._fez_requestsname);
        if (!(typeof (d._fez_nocookie) == 'undefined')) nocookie = "&nocookie=" + encodeURIComponent(d._fez_nocookie);
        if (!(typeof (d._fez_inlineenquiries) == 'undefined')) enqinline = "&enqinline=" + encodeURIComponent(d._fez_inlineenquiries);
        if (!(typeof (d._fez_inlineenqcoverstext) == 'undefined')) enqinlinecoversdesc = "&enqinlinecov=" + encodeURIComponent(d._fez_inlineenqcoverstext);
        if (!(typeof (d._fez_inlineenqtimestext) == 'undefined')) enqinlinetimedesc = "&enqinlinetime=" + encodeURIComponent(d._fez_inlineenqtimestext);
        if (!(typeof (d._fez_popenqcoverstext) == 'undefined')) enqpopcoversdesc = "&enqpopcov=" + encodeURIComponent(d._fez_popenqcoverstext);
        if (!(typeof (d._fez_popenqtimestext) == 'undefined')) enqpoptimedesc = "&enqpoptime=" + encodeURIComponent(d._fez_popenqtimestext);
        if (!(typeof (d._fez_findnext) == 'undefined')) findnext = "&fnxt=" + encodeURIComponent(d._fez_findnext);
        if (!(typeof (d._fez_notimespopup) == 'undefined')) notimespopup = "&ntpu=" + encodeURIComponent(d._fez_notimespopup);
        if (!(typeof (d._fez_showPrefix) == 'undefined')) ppfx = "&ppfx=" + encodeURIComponent(d._fez_showPrefix);
        if (!(typeof (d._fez_defaultRestaurant) == 'undefined')) defaultRestaurant = "&defaultRestaurant=" + d._fez_defaultRestaurant;

        if ((d._fez_facebook_shareon) == '1') {
            facebook = '&fbpost=1'
            if (!(typeof (d._fez_facebook_shareimage) == 'undefined')) facebook += '&fbimage=' + encodeURIComponent(d._fez_facebook_shareimage);
            if (!(typeof (d._fez_facebook_shareclick) == 'undefined')) facebook += '&fburl=' + encodeURIComponent(d._fez_facebook_shareclick);
            if (!(typeof (d._fez_facebook_sharecaption) == 'undefined')) facebook += '&fbcaption=' + encodeURIComponent(d._fez_facebook_sharecaption);
            if (!(typeof (d._fez_facebook_sharedesc) == 'undefined')) facebook += '&fbdesc=' + encodeURIComponent(d._fez_facebook_sharedesc);
        }


        // use hostpage url params to ioverride rest and offer codes
        var dmy = getVar("lrm_rest", dd.location.href)
        if (dmy != '') d._fez_rest = dmy;
        dmy = getVar("lrm_offer", dd.location.href)
        if (dmy != '') d._fez_offer = dmy;

        ws += '?ac=' + d._fez_account + '&pc=' + d._fez_partner + '&br=' + d._fez_brand + '&re=' + d._fez_rest + '&an=' + d._fez_anal + '&st=' + d._fez_stylesheet + '&mb=' + d._fez_mobile + '&ax=' + d._fez_ascript + '&hd=' + escape(d._fez_head) + '&ds=' + d._fez_desc + '&bs=' + d._fez_source + '&oc=' + d._fez_offer + '&op=' + d._fez_offerpopup + "&dmp=" + d._fez_daymarketingpopup + '&rp=' + d._fez_restaurantpicker + opick + choosefull + opchoosefull + requests + title + forename + surname + tel + email + terms + callback + scriptinsert + mandrq + rqname + nocookie + enqinline + enqinlinecoversdesc + enqinlinetimedesc + enqpopcoversdesc + enqpoptimedesc + findnext + notimespopup + ppfx + facebook + defaultRestaurant + '&url=' + url + '&ref=' + ref;

        iframe = '<iframe height="' + hi + '" frameborder="0" width="' + wi + '" scrolling="' + sc + '" allowtransparency="true" src="' + ws + '" name="_fez_"></iframe>'


        dd.write(iframe)

    }
    function getVar(name, url) {
        var ret = '';
        name += '=';
        ss = url.indexOf(name);
        if (ss > 0) {
            var ee = url.indexOf("&", ss);
            if (ee < 0) ee = url.length;
            if (ee >= ss) {
                ret = url.substr(ss + name.length, ee - ss - name.length);
            }
        }
        return ret;
    }

    n();

})()

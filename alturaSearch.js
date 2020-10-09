window.addEventListener('resize', function () {
        AdjustSHSearchResult();
    });

    function AdjustSHSearchResult() {
        if (!SmartHint.Framework.IsMobileOrTablet()) {
            if (jQuery("#smarthint-search-result").length > 0) {
                var height = (jQuery(".home-banner-extra").eq(0).height() != undefined ? jQuery(".home-banner-extra")
                        .eq(0).height() : 0) +
                    (jQuery(".header").eq(0).height() != undefined ? jQuery(".header").eq(0).height() : 0);
                var style = "#smarthint-search-result { top: " + height + "px!important; height: calc(100% - " +
                    height + "px)!important; }";

                if (jQuery("style#style-sh-search-result").length == 0) {
                    jQuery("body").prepend("<style id='style-sh-search-result'>" + style + "</style>");
                } else {
                    jQuery("style#style-sh-search-result").html(style);
                }
            }
        }
    }

    AdjustSHSearchResult();

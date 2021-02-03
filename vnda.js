    var lang = jQuery('html').attr('lang'); // linguagem da página
    
    jQuery(".smarthint p.title").each(function () {
        var title = jQuery(this).attr('value')
        var arrayTitle = title.split("|")
        if (jQuery(this).text().length == 0) {
            if (lang == "pt-BR") {
                jQuery(this).append(arrayTitle[0])
            } else {
                jQuery(this).append(arrayTitle[1])
            }
        }
    });

    if (lang == "en") {
        jQuery('.smarthint .real-to-dolar').each(function () {
            var real = jQuery(this).text();
            var dolar = real.replace('R$', '$').replace('sem juros','');
            jQuery(this).text(dolar);
        });
    };

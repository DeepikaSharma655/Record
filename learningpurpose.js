function docReady()
{
    //------header section start------//
    var header = document.createElement("header");
    header.setAttribute("id", "myHeader");
    document.body.appendChild(header);

    //create div in header//
    var logodiv = document.createElement("div");
    logodiv.setAttribute("id", "logo");
    document.getElementById("myHeader").appendChild(logodiv);

    //--add image in logo div--//
    var logoimage = document.createElement("img");
    logoimage.setAttribute("class", "mylogo");
    logoimage.setAttribute("src", "images/logo1.jpg");
    logoimage.setAttribute("alt", "The logo");
    document.getElementById("logo").appendChild(logoimage);

    //--create menu in header--//
    var menu = document.createElement("div");
    menu.setAttribute("id", "menubar");
    document.getElementById("myHeader").appendChild(menu);

    var menubar = ["About", "Services", "Work", "Case Studies", "News", "Careers", "Blog", "Contact"];

    var menulist = document.createElement("ul");
    menulist.setAttribute("id", "menubarlist");

    document.getElementById("menubar").appendChild(menulist);

    for (var i = 0; i < menubar.length; i++) {
        var itemlist = document.createElement("li");
        itemlist.setAttribute("id", "menubarlist_" + i);
        menulist.appendChild(itemlist);
        var anclink = document.createElement("a");
        anclink.text = menubar[i];
        itemlist.appendChild(anclink);
    }

    //create second div in header//
    var requestlogo = document.createElement("div");
    requestlogo.setAttribute("id", "reqstlogo");
    document.getElementById("myHeader").appendChild(requestlogo);


    //--add image in logo div--//
    var reqstlogoimage = document.createElement("img");
    reqstlogoimage.setAttribute("class", "reqstlogo");
    reqstlogoimage.setAttribute("src", "images/request-quote3.png");
    reqstlogoimage.setAttribute("alt", "The logo");
    document.getElementById("reqstlogo").appendChild(reqstlogoimage);

    //------banner section start------//
    var banner = document.getElementById("banner-carousel");
    document.body.insertBefore(header, banner);
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        center: true,
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    //------red heading div start------//
    var rheading = document.createElement("div");
    rheading.setAttribute("id", "redheading");
    document.body.appendChild(rheading);

    //create h1 in red heading//
    var heading1 = document.createElement("h1");
    heading1.setAttribute("id", "redheading1");
    var headingtextnode1 = document.createTextNode("Website Designing/Web Development Company In Noida/Delhi NCR");
    heading1.appendChild(headingtextnode1);
    document.getElementById("redheading").appendChild(heading1);

    //create h2 in red heading//
    var heading2 = document.createElement("h2");
    heading2.setAttribute("id", "redheading2");
    var headingtextnode2 = document.createTextNode("A glimpse of the Latest work we've done");
    heading2.appendChild(headingtextnode2);
    document.getElementById("redheading").appendChild(heading2);

    //------advertisement section------//
    var add = document.createElement("div");
    add.setAttribute("id", "advertisement");
    document.body.appendChild(add);

    //another div in div//
    var row1 = document.createElement("div");
    row1.setAttribute("class", "rowone");
    document.getElementById("advertisement").appendChild(row1);

    for (var i = 1; i <= 24; i++)
    {
        var row1image1 = document.createElement("img");
        row1image1.setAttribute("class", "advertisement-images");
        row1image1.setAttribute("src", "images/list"+i+".jpg");
        var abc = document.getElementsByClassName("rowone");
        abc[0].appendChild(row1image1);
    }

    //------our services section------//
    var services = document.createElement("div");
    services.setAttribute("id", "ourservices");
    document.body.appendChild(services);

    //create h2//
    var heading = document.createElement("h2");
    heading.setAttribute("id", "servicesheading");
    var headingtextnode = document.createTextNode("Our Services");
    heading.appendChild(headingtextnode);
    document.getElementById("ourservices").appendChild(heading);

    //div in services//
    var service_section = document.createElement("div");
    service_section.setAttribute("id", "serviceclass");
    document.getElementById("ourservices").appendChild(service_section);

    var servicename = ["Web Design & Development", "Mobile App Development", "School CMS", "Digital Marketing", "Hosting Solutions", "e-Commerce Solutions", "Website Maintenance Services", "Search Engine Optimization", "Social Media Optimization"];

    var service_html = "";
    for (var i = 0; i < servicename.length; i++) {
       
        service_html = service_html+ `<div class="service-item"><div class='service-image'><img src="images/service${i+1}.png"></div><div class="service-text">${servicename[i]}</div></div>`;
      
    }
    document.getElementById("serviceclass").innerHTML = service_html;

    //------create result section------//
    var companyresult = document.createElement("div");
    companyresult.setAttribute("id", "company-result");
    document.body.appendChild(companyresult);

    //create h2 in result section//
    var heading = document.createElement("h2");
    heading.setAttribute("id", "result-heading");
    var headingtextnode = document.createTextNode("Companies we have created results for:");
    heading.appendChild(headingtextnode);
    document.getElementById("company-result").appendChild(heading);

    //creating only table//
    var table = document.createElement("table");
    table.setAttribute("id", "result-section-table");
    document.getElementById("company-result").appendChild(table);
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    var company = 1;
    for(var i=0;i<6;i++)
    {
        var everytr = document.createElement("tr");
        tbody.appendChild(everytr);
        for(var j=0;j<6;j++)
        {
            var td = document.createElement("td");
            everytr.appendChild(td);
            td.innerHTML = `<img src="images/company${company}.png"></div>
              </a>`;
              company = company + 1;
        }

    }
//------create footer section------//
        var footer = document.createElement("footer");
        footer.setAttribute("id", "main-footer");
        document.body.appendChild(footer);

        var innerfooter = document.createElement("div");
        innerfooter.setAttribute("id", "inner-footer");
        document.getElementById("main-footer").appendChild(innerfooter);

        var heading = document.createElement("h2");
        heading.setAttribute("id", "footer-heading");
        var headingtextnode = document.createTextNode("Let´s Talk");
        heading.appendChild(headingtextnode);
        document.getElementById("inner-footer").appendChild(heading);

        var paragraph = document.createElement("p");
        paragraph.setAttribute("id", "footer-paragraph");
        var paragraphtextnode = document.createTextNode("Visit Us, Give us a call, write us an email or fill out the form below.");
        paragraph.appendChild(paragraphtextnode);
        document.getElementById("inner-footer").appendChild(paragraph);

        //create a div for form//
        var divform = document.createElement("div");
        divform.setAttribute("id", "div-form");
        document.getElementById("main-footer").appendChild(divform);

        var br = document.createElement("br"); 

        var form = document.createElement("form");
        form.setAttribute("id", "form-control");
        document.getElementById("div-form").appendChild(form);

        // Create an input element for Full Name //
        var FN = document.createElement("input");
        FN.setAttribute("id", "first-name"); 
        FN.setAttribute("type", "text"); 
        FN.setAttribute("name", "FullName"); 
        FN.setAttribute("placeholder", "Full Name"); 

        // Create an input element for emailID //
        var EID = document.createElement("input"); 
        EID.setAttribute("id", "email");
        EID.setAttribute("type", "text"); 
        EID.setAttribute("name", "emailID"); 
        EID.setAttribute("placeholder", "Email Address"); 

      // Create an input element for mobile //
      var MN = document.createElement("input");
      MN.setAttribute("id", "mobile-number"); 
      MN.setAttribute("type", "tel"); 
      MN.setAttribute("name", "mobile"); 
      MN.setAttribute("placeholder", "Mobile Number");

      // create a submit button 
      var s = document.createElement("input"); 
      s.setAttribute("id", "submit-button");
      s.setAttribute("type", "submit"); 
      s.setAttribute("value", "SUBMIT");

      // Append the full name input to the form 
      form.appendChild(FN);  
                  
      // Inserting a line break 
      form.appendChild(br.cloneNode());

      // Append the emailID to the form 
      form.appendChild(EID);  
      form.appendChild(br.cloneNode()); 
      
      // Append the emailID to the form 
      form.appendChild(MN);  
      form.appendChild(br.cloneNode()); 
      // Append the submit button to the form 
      form.appendChild(s);  




}


    


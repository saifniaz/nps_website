/*window.onload = function(){
    var count = 0;
    var contain = document.getElementById('list_contain');
    var ep = document.getElementById('ep');
    var p = document.createElement("p");
    
    contain.style.display = 'none';
    
    ep.onclick = function(){
        count++;
        if(count%2 == 1){
            contain.style.display='block';
            var text1 = document.createTextNode("Evaluate the property and determine an accurate rental rate.");
            var text2 = document.createTextNode("");
            var text3 = document.createTextNode("Offer recommendations on repairs and cosmetic improvements that maximize monthly Rent while providing good ROI.");
            var text4 = document.createTextNode("Evaluate the property and determine an accurate rental rate.");
            var text5 = document.createTextNode("Evaluate the property and determine an accurate rental rate.");
            contain.("<p>Evaluate the property and determine an accurate rental rate.</p>");
        }else{
            contain.style.display='none';
            count = 0;
        }
    }
    $("#list_contain").show();
            $("#list_contain").append('<p>Evaluate the property and determine an accurate rental rate.</p>');
            $("#list_contain").append('<p>Perform detailed documentation of the interior and exterior including photos.</p>');
            $("#list_contain").append('<p>Offer recommendations on repairs and cosmetic improvements that maximize monthly Rent while providing good ROI.</p>');
            $("#list_contain").append('<p>Gather data on rental rates in the area and work with owners to determine the optimal rental rate. Rent research will vary, but should include looking at the recently rented comparables according to size and type.</p>');
            $("#list_contain").append('<p>Discuss with owners the pros and cons of different policies such as accepting any modifications on structures, allowing smoking etc.
}*/

$(document).ready(function(){
    var c = 0;
    $("#ep").click(function(){
        c++;
        if(c%2 == 1){
            $(this).append('<div id="list"></div>')
            $("#list").append('<p>Evaluate the property and determine an accurate rental rate.</p>');
            $("#list").append('<p>Perform detailed documentation of the interior and exterior including photos.</p>');
            $("#list").append('<p>Offer recommendations on repairs and cosmetic improvements that maximize monthly Rent while providing good ROI.</p>');
            $("#list").append('<p>Gather data on rental rates in the area and work with owners to determine the optimal rental rate. Rent research will vary, but should include looking at the recently rented comparables according to size and type.</p>');
            $("#list").append('<p>Discuss with owners the pros and cons of different policies such as accepting any modifications on structures, allowing smoking etc.</p>');
        }else{
            $("#list").remove();
            c = 0;
        };
    });
    
    $("#mp").click(function(){
        c++;
        if(c%2 == 1){
            $(this).append('<div id="list"></div>')
            $("#list").append('<p>Market the property for rent.</p>');
            $("#list").append('<p>Prepare home for rent <span>Clean home and optimize interior appeal.</span><span>Manicure landscaping to increase curb appeal.</span></p>');
            $("#list").append('<p>Create ads tailored to the property and advertising medium. Some of the mediums commonly used are: <span>Paid and free rental listing websites in Dhaka, Bangladesh.</span><span>Print publications in various Bangladeshi National Newspapers.</span><span>Various Fliers.</span></p>');
            $("#list").append('<p>Work with other realtors and leasing agents to find a tenant.</p>');
            $("#list").append('<p>Meet prospective tenants for showings throughout the week and weekend.</p>');
            $("#list").append('<p>Provide prospective tenants with rental applications that are legally compliant with fair housing laws</p>');
        }else{
            $("#list").remove();
            c = 0;
        };
    });
    
    $("#ts").click(function(){
        c++;
        if(c%2 == 1){
            $(this).append('<div id="list"></div>')
            $("#list").append('<p>Perform a background check to verify National identity, income, background check, rental history if any, etc.</p>');
            $("#list").append('<p>Grade tenant according to pre-defined tenant criteria</p>');
            $("#list").append('<p>Inform tenants who were turned down.</p>');
        }else{
            $("#list").remove();
            c = 0;
        };
    });
    
    $("#tmi").click(function(){
        c++;
        if(c%2 == 1){
            $(this).append('<div id="list"></div>')
            $("#list").append('<p>Draw up leasing agreement.</p>');
            $("#list").append('<p>Confirm move in date and time with tenant.</p>');
            $("#list").append('<p>Review lease guidelines with tenant regarding things like rental payment terms and required property maintenance.</p>');
            $("#list").append('<p>Ensure all agreements have been properly executed.</p>');
            $("#list").append('<p>Perform detailed move in inspection with tenant and have tenants sign a report verifying the condition of the property prior to move-in.</p>');
            $("#list").append('<p>Collect two months rent as security deposit which is refundable subject to final move out condition of property report.</p>');
        }else{
            $("#list").remove();
            c = 0;
        };
    });
    $("#tmo").click(function(){
        c++;
        if(c%2 == 1){
            $(this).append('<div id="list"></div>')
            $("#list").append('<p>Inspect unit and fill out a report on the property&#39;s condition when the client moves out.</p>');
            $("#list").append('<p>Provide tenant with a copy as well as estimated damages if any.</p>');
            $("#list").append('<p>Return the balance of the security deposit to the tenant once settlement is done.</p>');
            $("#list").append('<p>Forward any portion of the owner’s portion of the tenant deposit to the owner or hold in owner reserves for repairs.</p>');
            $("#list").append('<p>Clean unit and perform and needed repairs or upgrades.</p>');
            $("#list").append('<p>Re-key the locks.</p>');
            $("#list").append('<p>Put the property back on the market for rent.</p>');
        }else{
            $("#list").remove();
            c = 0;
        };
    });
    
     $("#rc").click(function(){
        c++;
        if(c%2 == 1){
            $(this).append('<div id="list"></div>')
            $("#list").append('<p>Receiving rent.</p>');
            $("#list").append('<p>Hunting down late payments.</p>');
            $("#list").append('<p>Sending out pay or quit notices.</p>');
            $("#list").append('<p>Enforcing late fees</p>');
        }else{
            $("#list").remove();
            c = 0;
        };
    });
    
    $("#ev").click(function(){
        c++;
        if(c%2 == 1){
            $(this).append('<div id="list"></div>')
            $("#list").append('<p>Filing relevant paperwork to initiate and complete an unlawful action.</p>');
            $("#list").append('<p>Coordinating with law enforcement to remove tenant and tenants possessions from unit.</p>');
        }else{
            $("#list").remove();
            c = 0;
        };
    });
    
    $("#lg").click(function(){
        c++;
        if(c%2 == 1){
            $(this).append('<div id="list"></div>')
            $("#list").append('<p>Advise Owner in the event of a any legal dispute.</p>');
            $("#list").append('<p>Refer owner to a qualified attorney if necessary.</p>');
            $("#list").append('<p>Understand and abide by the latest local, municipal and Govt. legislation that apply to renting and maintaining rental properties.</p>');
        }else{
            $("#list").remove();
            c = 0;
        };
    });
    
    $("#ins").click(function(){
        c++;
        if(c%2 == 1){
            $(this).append('<div id="list"></div>')
            $("#list").append('<p>Perform periodic inspections (Inside and outside) on a predefined schedule looking for repair needs, safety hazards, lease violations, etc.</p>');
            $("#list").append('<p>Send owner periodic reports on the condition of the property.</p>');
        }else{
            $("#list").remove();
            c = 0;
        };
    });
    
    $("#fin").click(function(){
        c++;
        if(c%2 == 1){
            $(this).append('<div id="list"></div>')
            $("#list").append('<p>Provide accounting property management services.</p>');
            $("#list").append('<p>Make payments to Owner’s account and follow their advice. We also pay on behalf of owner all associated bills including municipal taxes and Property taxes.</p>');
            $("#list").append('<p>Detailed documentation of expenses via invoices and receipts if any.</p>');
            $("#list").append('<p>Maintain all historical records (paid invoices, leases, inspection reports, warranties, etc.)</p>');
            $("#list").append('<p>Advise owner on relevant tax deductions related to their rental property.</p>');
            $("#list").append('<p>Provide easy to read monthly cash-flow statements which offer a detailed breakdown of income and itemized expenses.</p>');
        }else{
            $("#list").remove();
            c = 0;
        };
    });
    
    $("#pm").click(function(){
        c++;
        if(c%2 == 1){
            $(this).append('<div id="list"></div>')
            $("#list").append('<p>Provide and oversee an in-house maintenance crew.</p>');
            $("#list").append('<p>Establish a preventative maintenance policy to identify and deal with repair needs.</p>');
            $("#list").append('<p>Provide an network of licensed, bonded and fully insured contractors who have been vetted for good pricing and good work.</p>');
            $("#list").append('<p>Assign jobs to different parties (in-house employees or professional contractors) based on who will do the best job for the best price.</p>');
        }else{
            $("#list").remove();
            c = 0;
        };
    });
});
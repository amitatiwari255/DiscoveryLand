window.onload=function(){
    $(document).ready(function(){
var heading_content = [
    {
    heading:"Discovery's newest property in Kaua'i North Shore Preserve",
    content: "Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua'i. North Shore Preserve, a one-of- a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings."
},
{
   heading: "James Island Discovery's Newest Property",
   content: "Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company's most exclusive community to date and Discovery's first project in Caneda,"
},
{
   heading: "CostaTerra Discovery's 23rd property",
   content: "Discovery Land Company, the world's leading developer of luxury private residential communities,clubs and resorts has announced its 23rd property and first in Europe,"
},
{
   heading: "Troubadour To Open Golf Course Fall 2019",
   content: "Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall"

}
]
 $(".title1").html(heading_content[0].heading)
$(".content").html(heading_content[0].content)
var counter=0;

$(".left-button").click (function(){
    if(counter>0){
        counter =counter-1;    
        $(".title1").html(heading_content[counter].heading)
        $(".content").html(heading_content[counter].content)
    }
    else if(counter=0){
        counter=0;
        $(".title1").html(heading_content[counter].heading)
        $(".content").html(heading_content[counter].content)
        counter=4;
    }
})
$(".right-button").click (function(){
        if(counter<heading_content.length-1){
            counter=counter+1;
            $(".title1").html(heading_content[counter].heading)
            $(".content").html(heading_content[counter].content)
        }
        else if(counter<=heading_content.length-1){
            counter=0;
            $(".title1").html(heading_content[0].heading)
            $(".content").html(heading_content[0].content)
            
        }
       
      
})
 } )}
   

$(document).ready(
    () =>{



        $('svg').on('click', ()=> {
            const value = $('input').val()
          
            const create = $(`<div> ${value}</div> `).css({backgroundColor:'#024059', color:'#fff', padding:'5px', margin:'10px', borderRadius:'5px', fontSize:'1.1rem',width:'150px',textAlign:'center',height:'30px'})
            const deleteButton = $(`<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="137px" style="enable-background:new 0 0 98 137;" version="1.1" viewBox="0 0 98 137" width="40px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
        <![CDATA[
            .st0{fill:#00ffff;}
            .st1{fill:#00ffff;}
            .st2{fill:none;}
            .st3{fill-rule:evenodd;clip-rule:evenodd;fill:#fff;}
        ]]>
        </style><defs/><path d="M75.6,44.8v73c0,3.4-2.8,6.2-6.2,6.2H21.3c-3.4,0-6.2-2.8-6.2-6.2v-73H75.6L75.6,44.8z M59.9,52.9v62.8h3.6V52.9H59.9  L59.9,52.9z M43.6,52.9v62.8h3.6V52.9H43.6L43.6,52.9z M27.3,52.9v62.8h3.6V52.9H27.3L27.3,52.9z M31.3,27.9v-5.2  c0-3.3,2.6-5.9,5.9-5.9h16.4c3.3,0,5.9,2.6,5.9,5.9v5.2h18.1c3.4,0,6.2,2.8,6.2,6.2v4.3H7V34c0-3.4,2.8-6.2,6.2-6.2H31.3L31.3,27.9z   M37.2,20.8c-1,0-1.8,0.8-1.8,1.8v5.2h20.1v-5.2c0-1-0.8-1.8-1.8-1.8H37.2L37.2,20.8z"/><rect class="st2" height="137" id="_x3C_Slice_x3E__100_" width="48"/></svg> `).addClass('delete')
        
            const newDiv = $('<div   ></div>').append(create)
            const btnDiv = $('<div class = "svg"></div>').append(deleteButton)
            const  final = $('<div class="item" ></div>').append(newDiv , btnDiv).addClass('final')
            if (value) {
                $('.main').append(final)
             
              
            }
           
            $('input').val('')
           
        
        
           
             
        }), 
        
        
    
        $(document).on('click', '.item', function() {  
            const  ekow = $(this).remove()
            console.log(ekow)
        }
        )
        
        
        
       
        


    }
)                                                                                              




 
//  $('div').html('Jquery Box') 
//  $('div').text('<strong>Jquery Box</strong>') 


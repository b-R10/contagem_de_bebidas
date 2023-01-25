jQuery('document').ready(function(){
    $table1=jQuery('#table_row_total');
    $table1.find('thead tr').append('<th>Total</th>');
    $table1.find('tbody tr').each(function(){
      var sum=0;
      jQuery(this).find('td').each(function(){
        if(!isNaN(Number(jQuery(this).text()))){
          sum=sum+Number(jQuery(this).text());
        }
      });
      jQuery(this).append('<td>'+sum+'</td>');
    });
});

$(document).ready(function(){
  var balance = 0,
      dvalue = 0,
      inputv = 0;

$('.c-dep').click(function(){
  $('.bal').text("$"+balance);
});

$('.sub-dep').click(function(){
  console.log(inputv);
});

$('.sub-with').click(function(){
  console.log(inputv);
});

$('.v1').click(function(){
  balance += 100;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
});

$('.v5').click(function(){
  balance += 200;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
});

$('.v10').click(function(){
  balance += 500;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
});

$('.v25').click(function(){
  balance += 1000;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
});

$('.v50').click(function(){
  balance += 2000;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
});


$('.w1').click(function(){
    balance -= 100;
    console.log(balance);
    $('.bal').text("$"+balance);
    $('.with-bal').text("Balance actual: RD$"+balance);
    $('.dep-bal').text("Balance actual: RD$"+balance);
});

$('.w5').click(function(){
  balance -= 200;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
});

$('.w10').click(function(){
  balance -= 500;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
});

$('.w25').click(function(){
  balance -= 1000;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
});

$('.w50').click(function(){
  balance -= 1500;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
});


$('.f5').click(function(){
  balance -= 100;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
});

$('.f10').click(function(){
  balance -= 200;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
});

$('.f20').click(function(){
  balance -= 500;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
});

$('.f30').click(function(){
  balance -= 1000;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
});

$('.f40').click(function(){
  balance -= 1500;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
});

$('.f50').click(function(){
  balance -= 2000;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
});

$('.f60').click(function(){
  balance -= 60;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
});

$('.f70').click(function(){
  balance -= 70;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
});

$('.f80').click(function(){
  balance -= 80;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
});

$('.f90').click(function(){
  balance -= 90;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
});

$('.f100').click(function(){
  balance -= 100;
  console.log(balance);
  $('.bal').text("$"+balance);
  $('.dep-bal').text("Balance actual: RD$"+balance);
  $('.with-bal').text("Balance actual: RD$"+balance);
});

$('.check').click(function(){
if (balance < 0) {
  $('.bal').text("$"+balance+" Aviso, su cuenta tiene balance negativo"),
  $('.dep-bal').text("$"+balance+" Aviso, su cuenta tiene balance negativo"),
  $('.with-bal').text("$"+balance+" aviso, su cuenta tiene balance negativo."),
  console.log("$"+balance+" Aviso, su cuenta tiene balance negativo");
}
});

});

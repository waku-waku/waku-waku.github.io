

function mOver(obj) {
  var y = obj.getElementsByTagName("p")[2];
  var x = document.getElementsByClassName("column");
  for (var i = 0; i < x.length; i++) {
    x[i].style.width = '15%';
  };
  obj.style.width = '40%';
  y.style.marginTop = '20px';
  if (x[0] == obj)  {
    y.innerHTML = "バッテリー消費を急激に抑える研究を行っております"  
  } else if (obj == x[1]) {
    y.innerHTML = "中高生を主に教育を無料で行っております"  
  } else if (obj == x[2]) {
    y.innerHTML = "新しいスマートフォンアプリを開発しております"  
  } else if (obj == x[3]) {
    y.innerHTML = "自社開発のインタラクティブなSNSを開発しております"  
  } else if (obj == x[4]) {
    y.innerHTML = "クラウドサービスを展開しております"  
  }
}

function mOut(obj) {
  var y = obj.getElementsByTagName("p")[2];
  var x = document.getElementsByClassName("column");
  for (var i = 0; i < x.length; i++) {
    x[i].style.width = '20%';
  };
  y.innerHTML = "";
}
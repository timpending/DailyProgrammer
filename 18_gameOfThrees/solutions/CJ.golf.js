l=console.log;m=[0,-1,1];g=v=>{if(v==1){l(v)}else{l(v,m[v%3]);g((v+m[v%3])/3)}}
g(100)

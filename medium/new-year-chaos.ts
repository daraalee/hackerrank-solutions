function minimumBribes(q) {

    let s = 0;
    for(let i=0;i<q.length;i++){
        let w=0;
        for(let j = i+1; j<q.length; j++){
            if(q[j]<q[i]){
                w++;
            }

            if(w>2) {console.log("Too chaotic"); return;}
            
        }
        s=s+w;
    }
    console.log(s);
}
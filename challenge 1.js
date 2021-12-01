function BonAppetite(bill,k,p){

        let sum=0;
        for ( let a of bill)
        sum+=a;
        linda= bill[k];
        Ba= sum - linda ;
        SumPerPweaon= Ba/2;
        if(SumPerPweaon==p) {
            console.log('Bon Apetite')
        }
        else{ 
            avg= sum/2;
         console.log(p-SumPerPweaon);

        }


}
BonAppetite([3, 10, 2, 9],1,12);
BonAppetite([3, 10, 2, 9],1,7);




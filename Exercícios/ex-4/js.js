/*
soma=0
for (i=0;i<100;i++)
{
    if (i%2==1)
    {
    soma=soma+i;
    document.write("\n i: " +i)
    }
}
*/

var num = 0 
while (num <=100) {
    if (num %2 ==1){
        document.write`${num} --`
    }
    ++num;
}

//Melhorando o código 
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

let hak = 5;
const rastgele = Math.round(Math.random() * 100);
console.log(rastgele);
2
do{
    const tahmin = Number(prompt("Lutfen Bir tahmin giriniz"))
    hak -=1;
    if(tahmin === rastgele){
        console.log(`Tebrikler ${5 - hak} kerede bildiniz`);
        break;
     }else if(tahmin < rastgele) {
        console.log("ARTTIR ⬆️");
    } else {
        console.log("AZALT ⬇️");
    }

}while(hak>0);

console.log("Uzgunuz oyunu kaybettiniz😔😔"1 );





// -------------------------- Boolean -------------------------- //




//1.  A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni musbat". 

function res(A) {
    if (A > 0) {
        console.log(true, "A soni musbat")
    } else {
        console.log(false, "A soni manfiy")
    }
}

res(4)
// NATIJA: true 'A soni musbat' 






//2.  A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni toq son".

function res1(A) {
    if (A % 2 === 0) {
        console.log(true, "A soni Juft son")
    } else {
        console.log(false, "A soni toq son.!")
    }
}

res1(11)
// NATIJA: false 'A soni toq son.!'






//3. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A>2 va B <=3".

function res2(A, B) {
    if (A > 2 && B <= 3) {
        console.log(true);
    } else {
        console.log(false)
    }
}

res2(12, 3)
// NATIJA: true






//4.  Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A <= B <= C"	

function res3(A, B, C) {
    if (B >= A && C >= A && C >= B) {
        console.log(true)
    } else {
        console.log(false)
    }
}

res3(11, 12, 13)
// NATIJA: true






//5.  Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarining har ikkalasi ham yoki toq son yoki juft son".

function res4(A, B) {
    if (A % 2 === 0 && B % 2 === 0) {
        console.log(true, 'A yoki B juft son yoki ikalasiham juft sonlar.!')
    } else {
        console.log(false, 'A yoki B toq son yoki ikalasiham toq sonlar.!')
    }
}

res4(12, 11)
// NATIJA: false 'A yoki B toq son yoki ikalasiham toq sonlar.!'






//6.  Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning hech bo'lmaganda bittasi musbat".

function res5(A, B, C) {
    if (A > 0 || B > 0 || C > 0) {
        console.log(true, "A, B, C sonlaridan hechbo'lmaganda bittasi musbat.!")
    } else {
        console.log(false, "A, B, C sonlarining brortasiham musbat emas.!")
    }
}

res5(-1, -12, -5)
// NATIJA:  false 'A, B, C sonlarining brortasiham musbat emas.!'






//7. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning barcha raqamlari har xil".

function res6(abc) {
    let strNum = String(abc);
    let str = strNum.split('');
    let [A, B, C] = str;

    if (strNum.length >= 3) {
        if (A != B && B != C && A != C) {
            console.log(true, 'Ushbu sonning barcha raqamlari har xil')
        } else {
            console.log(false, 'Ushbu sonning barcha raqamlari har xil emas')
        }
    } else {
        console.log('Kiritilgan raqam 3 xonali emas.!')
    }
}

// res6(12)
// NATIJA: Kiritilgan raqam 3 xonali emas.!

// res6(123);
// NATIJA: true 'Ushbu sonning barcha raqamlari xar-hil'

res6(122);
//  NATIJA: false 'Ushbu sonning barcha raqamlari xar-hil emas'






//8. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng".

function res7(A, B, C) {
    if (A === B || A === C || B === C) {
        console.log(true, "Kiritilgan ushbu uchta sondan hechbo'lmaganda iktasi bir biriga teng.!")
    } else {
        console.log(false, "Kiritilgan uchta sondan hechbiri bir biriga teng emas")
    }
}

// res7(12, 4, 11)
// NATIJA: false 'Kiritilgan uchta sondan hechbiri bir biriga teng emas'

res7(43, 21, 43)
// true "Kiritilgan ushbu uchta sondan hechbo'lmaganda iktasi bir biriga teng.!"





//9)  A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni juft son”

function res8(A) {
    if (A % 2 === 0) {
        console.log(true, "Ushbu son juft son.!")
    } else ("Ushbu son toq son.!")
}

res8(12);
// NATIJA: true 'Ushbu son juft son.!'





// 10) Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A >= 0 yoki B <-2"

function res9(A, B) {
    if (A >= 0 && B < -2) {
        console.log(true)
    } else {
        console.log(false)
    }
}

res9(0, -3)
// NATIJA: true





// 11) Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi".

function res10(A, B, C) {
    if (B > A && C > B) {
        console.log(true, "B soni A va C sonlari orasidagi son.!")
    } else {
        console.log(false, "B soni A va C sonlari orasidagi son emas.!")
    }
}

// res10(1,5,3)
// NATIJA: false 'B soni A va C sonlari orasidagi son emas.!'

res10(3, 7, 22)
// NATIJA: true 'B soni A va C sonlari orasidagi son.!'





// 12) Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".

function res11(A, B) {
    if (A % 2 !== 0 && B % 2 !== 0) {
        console.log(true, "Ushbu sonlar toq sonlar.!")
    } else {
        console.log(false, "Ushbu sonlardan biri yoki ikkalasiham toq son emas.!")
    }
}

res11(12, 13)
// NATIJA: false 'Ushbu sonlardan biri yoki ikkalasiham toq son emas.!'





// 13) Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bo'lmaganda bittasi toq son".

function res12(A, B) {
    if (A % 2 !== 0 || B % 2 !== 0) {
        console.log(true, "Sonlardan hechbo'lmaganda bittasi toq son.!")
    } else {
        console.log(true, "Sonlardan hechbiri toq son eams!")
    }
}

res12(12, 13)
// NATIJA: true "Sonlardan hechbo'lmaganda bittasi toq son.!"

res12(2, 6)
// NATIJA: true 'Sonlardan hechbiri toq son eams!'






// 14) Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning faqat bittasi toq son".

function res13(A, B) {
    if ((A % 2 === 0 && B % 2 !== 0) || (A % 2 !== 0 && B % 2 === 0)) {
        console.log(true, "Kiritilgan sonlardan biri toq son.!")
    } else {
        console.log(true, "Kiritilgan sonlardan hech-biri toq son emas.!")
    }
}

res13(13, 34);
// NATIJA: 





// 15) Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".

function res14(A, B, C) {
    if (A > 0 && B > 0 && C > 0) {
        console.log(true, "Kiritilgan sonlarning barchasi musbat.!")
    } else {
        console.log(false, "Kiritilgan sonlarning bittasi yoki birnechtasi musbat emas.!")
    }
}

res14(12, 3, -9)
// NATIJA: false 'Kiritilgan sonlarning bittasi yoki birnechtasi musbat emas.!'





// 16) Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son".

function res15(A, B, C) {
    if ((A > 0 && B < 0 && C < 0) || (A < 0 && B > 0 && C < 0) || (A < 0 && B < 0 && C > 0)) {
        console.log(true, "Sonlardan faqat bittasi musbat")
    } else {
        console.log(false)
    }
}

res15(-1, 2, -3)
// NATIJA: true 'Sonlardan faqat bittasi musbat'





// 17) Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".

function res16(A, B, C) {
    if ((A > 0 && B > 0 && C < 0) || (A > 0 && B < 0 && C > 0) || (A < 0 && B > 0 && C > 0)) {
        console.log(true, "Sonlardan iktasi musbat bittasi manfiy.!")
    } else {
        console.log(false, "Manfiy son yo'q.!")
    }
}

res16(4, 67, 3)
// NATIJA: false "Manfiy son yo'q.!"

res16(45, 34, -5)
// NATIJA: true 'Sonlardan iktasi musbat bittasi manfiy.!'





// 18) Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son". 

function res17(ab) {

    if (ab > 0 && ab % 2 === 0) {
        let strNum = String(ab)
        console.log(strNum);

        if (strNum.length > 1 && strNum.length < 3) {
            console.log(true, "Kiritilgan son ikki xonali musbat juft son.!")
        } else {
            console.log(false, "Kiritilgan son ikki xonali juft  son emas.!")
        }
    } else {
        console.log(false, "Kiritilgan son ikki xonlai son emas.!")
    }
}

res17(27)













// -------------------------- if else -------------------------- //




// Butun son berilgan. Agar berilgan son musbat bo`lsa, 1 ga oshiring, aks holda 2 ga kamaytiring. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.



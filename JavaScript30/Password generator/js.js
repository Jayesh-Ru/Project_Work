const output = document.querySelector('.screen .output');
const copy = document.getElementById('copy');
const passwordLength = document.getElementById('passlength');
const upercase = document.getElementById('upercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generate = document.getElementById('generate');

// ¨Passwords.
let symbolstr = '&_)$*%^!=-/<>(@``ç#|@\)=&';
let upercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZGDJD';
let lowercaseStr = 'abcdefghijklmnopqrstuvwxyzhgsfd';
let numbersStr = '0123456789635694378265487';

/* Every time you click on the generate btn it is going to check if the checkbox is checked 
 then it gives you the checked result */
generate.addEventListener('click', () =>{
    // All Probabilities. a lot of if statements but that's the easy way to do it.
    if(upercase.checked && lowercase.checked && symbols.checked && numbers.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = '&hA5$jL9@sB5_mP1&nV6)cR5L*gF32';
        output.value = allStr.slice(random, random + +passwordLength.value);

    }else if(upercase.checked && lowercase.checked && numbers.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = 'hA5jL9sB5mP1nV6cR5LgF32Lo5Fd18';
        output.value = allStr.slice(random, random + +passwordLength.value);

    }else if(symbols.checked && numbers.checked && lowercase.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = '&h5$j9@s5_m1&n6)c5*g32)5l@9p#0';
        output.value = allStr.slice(random, random + +passwordLength.value);

    }else if(upercase.checked && lowercase.checked && symbols.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = 'jY=Sn@Vt$&hA$jL@sB_mP&nV)cRL*gF';
        output.value = allStr.slice(random, random + +passwordLength.value);
    }
    else if(upercase.checked && lowercase.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = 'ArtLeBkPsVbRLwFxGrEsIlsvSgTdY';
        output.value = allStr.slice(random, random + +passwordLength.value);
    }

    else if(upercase.checked && numbers.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = '1A3L2B5P6V5RL6F4G5E9I9O7S5T3Y';
        output.value = allStr.slice(random, random + +passwordLength.value);
    }

    else if(numbers.checked && lowercase.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = 'h3j2s4m0n5c98g2k4v8j5g7p5c2n1';
        output.value = allStr.slice(random, random + +passwordLength.value);
    }

    else if(upercase.checked && symbols.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = '_A$L*B@P#V_RL)F&G=E=I*O=S_T*Y';
        output.value = allStr.slice(random, random + +passwordLength.value);
    }
    else if(lowercase.checked && symbols.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = '_$gh*a@e#z_kl)g&s=r=b*e=h_t*y';
        output.value = allStr.slice(random, random + +passwordLength.value);
    }
    else if(symbols.checked && numbers.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = '&5$9@5_1&6)5*32@4\8=9!5<0#3}0+';
        output.value = allStr.slice(random, random + +passwordLength.value);
    }
    else if(symbols.checked){
        let random = Math.floor(Math.random() * 5);
        output.value = symbolstr.slice(random, random + +passwordLength.value);

    }
    else if(numbers.checked){
        let random = Math.floor(Math.random() * 5);
        output.value = numbersStr.slice(random, random + +passwordLength.value);

    }else if(lowercase.checked){
        let random = Math.floor(Math.random() * 10);
        output.value = lowercaseStr.slice(random, random + +passwordLength.value);

    }else if(upercase.checked){
        let random = Math.floor(Math.random() * 10);
        output.value = upercaseStr.slice(random, random + +passwordLength.value);
    }
});

// Ability to copy the Text.
function copyText(){
    output.select();
    output.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Text has been copied to clipboard.");
}

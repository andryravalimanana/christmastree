function drawChristmasTree(n, evenAscii, oddAscii){
    for (let i = 0; i < n+1; i++) {
        process.stdout.write(" ");
    }
    process.stdout.write("X\n");
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i + 1; j++) {
            process.stdout.write(" ");
        }
        for (let k = 0; k < i*2+1 ; k++) {
            if(k%2==0) process.stdout.write(evenAscii);
            if(k%2==1) process.stdout.write(oddAscii);
        }
        process.stdout.write("\n");
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < n; j++) {
            process.stdout.write(" ");
        }
        process.stdout.write("| |\n");
    }
}

async function animateChristmasTree(timeout){
    console.clear();
    drawTitle()
    drawChristmasTree(20, "*", ".");
    await new Promise(r => setTimeout(r, timeout));
    console.clear();
    drawTitle()
    drawChristmasTree(20, ".", "*");
    await new Promise(r => setTimeout(r, timeout));
    animateChristmasTree(1000);
}

function drawTitle(){
    console.log("+------------------------------------------+");
    console.log("+              MERRY CHRISTMAS             +");
    console.log("+------------------------------------------+");
}

animateChristmasTree(1000);
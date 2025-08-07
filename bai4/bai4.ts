const handleUnionType = (input: string | number):void => {
    if(typeof input === 'string'){
        console.log(`${input.length} ký tự`);   
    } else if (typeof input === 'number') {
        if(input % 2 === 0){
            console.log('là số chẵn');
        } else {
            console.log('là số lẻ');
        }
    }
}
handleUnionType("demo123");
handleUnionType(10);
handleUnionType(9);
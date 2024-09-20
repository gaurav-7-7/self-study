function caseSwitch(val){
    let answer = '';
    switch(val){
        case 1: answer = 'alpha';
                break;
        case 2: answer = 'beta';
                break;
        case 3: answer = 'gama';
                break; // break is used to jump out of the case immediately
        case 4: answer = 'delta';
                break;
        default:
                answer = 'Enter a valid choice !';
    }
    return answer;
}
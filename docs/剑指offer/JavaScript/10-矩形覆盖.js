/**
 * 
 * @param {*} number 
 * 讲解:https://www.nowcoder.com/questionTerminal/72a5a919508a4251859fb2cfb987a0e6?toCommentId=2641660
 */

function rectCover(number)
{
    // write code here
    if(number===0) return 0;
    if(number==1)return 1;
    if(number===2) return 2;
    let a=1, b=2, sum=0;
    for(let i=3; i<= number; i++) {
        sum=a+b;
        a=b;
        b=sum;
    }
    return sum;
}
module.exports = {
    rectCover : rectCover
};

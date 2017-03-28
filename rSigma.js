// rSigma
// Write a recursive function thatt given a number returns the sum of the integers from one up to that number.
// For example:
// rSigma(5) = 1+2+3+4+5 = 15;
// rSigma(2.5) = 1+2 = 3
// rSigma(-1) = 0

//base case: rSigma(0 or neg vals) =  0
//otherwise: rSigma(n) = rSigma(n-1) + n

function rSigma(num)
{
    if(num < 1) {
        return 0;
    }
    return parseInt(num) + rSigma(num - 1)

}

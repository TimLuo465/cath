/**
 * Euclidean algorithm:
 * An efficient method for computing the greatest common divisor (GCD) of two numbers
 * ax+by = gcd(a, b) =d
 */
function gcd(p, q) {
    if (q === 0) return p;
    
    return gcd(q, p % q);
}
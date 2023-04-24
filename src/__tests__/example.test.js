import { isPrime } from "@/math/prime";

// Tests that inputting a prime number returns the number itself.  
it("test_prime_number_returns_itself", () => {
    const input = 5;
    const expectedResult = 5;
    const result = isPrime(input);
    expect(result).toBe(expectedResult);
});

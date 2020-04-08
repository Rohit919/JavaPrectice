// Take as input a number N, print "Prime" if it is prime if not Print "Not Prime".

// Input Format
// Constraints
// 2 < N <= 1000000000

// Output Format
// Sample Input
// 3
// Sample Output
// Prime
// Explanation
// The output is case specific

import java.util.*;
public class Main {
    public static void main(String args[]) {
        int i=2;
        Scanner s = new Scanner(System.in);
        int num=s.nextInt();
        while(i<num){
            if(num%i==0){
                  System.out.println("Not Prime");
                  return;
            }
            i++;
        }
         System.out.println("Prime");

    }
}

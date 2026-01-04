import java.io.*;
import java.util.*;


public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        
       Scanner sc =new Scanner(System.in);
        String s=sc.nextLine();
        
        int count=0;
		for( int i=0;i<s.length();i++){
			if(s.charAt(i )== '1'){
				count++;
			}
			else {
				count=0;
			}
		}
		System.out.println(count);
    }
}
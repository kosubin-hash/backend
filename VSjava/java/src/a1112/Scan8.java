package a1112;

import java.util.Scanner;

public class Scan8 {
    public static void main(String[] args) {
        Scanner scann = new Scanner(System.in);
        System.out.println();
        System.out.print("a 값 입력: ");
		String a = scann.next();
				
		System.out.print("b 값 입력: ");
		String b = scann.next();
        
        System.out.print(b+ " "+a);
    }   
}
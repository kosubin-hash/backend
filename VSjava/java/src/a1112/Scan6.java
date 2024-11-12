package a1112;

import java.util.Scanner;

public class Scan6 {
    public static void main(String[] args) {
        Scanner scann = new Scanner(System.in);
        System.out.println();
        System.out.print("x 값 입력: ");
		String a = scann.nextLine();
				
		System.out.print("y 값 입력: ");
		String b = scann.next();
        
        System.out.println(a);
        System.out.println(b);
    }   
}
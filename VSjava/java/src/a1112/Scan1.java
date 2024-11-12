package a1112;

import java.util.Scanner;

public class Scan1 {
    public static void main(String[] args) {
       Scanner scan = new Scanner(System.in);
       // Scanner 객체생성 System.in(콘솔)에 입력을 받음
       int num = scan.nextInt();
       System.out.println(num);
    }
}

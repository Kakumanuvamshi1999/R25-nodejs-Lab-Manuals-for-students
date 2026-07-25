package pkg;

import java.sql.*;
import java.util.Scanner;

public class InsertData {
    public static void main(String[] args) {

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/testdb",
                    "root",
                    "vamshi1234k");

            Statement s = con.createStatement();
            Scanner sc = new Scanner(System.in);

            System.out.println("Inserting Data into student table:");

            System.out.print("Enter student id: ");
            int sid = sc.nextInt();

            System.out.print("Enter student name: ");
            String sname = sc.next();

            System.out.print("Enter student address: ");
            String saddr = sc.next();

            String insertQuery = "INSERT INTO student VALUES(" +
                    sid + ", '" + sname + "', '" + saddr + "')";

            s.executeUpdate(insertQuery);

            System.out.println("Data inserted successfully into student table");

            sc.close();
            s.close();
            con.close();

        } catch (ClassNotFoundException e) {
            System.out.println("Driver not found: " + e);
        } catch (SQLException err) {
            System.out.println("ERROR: " + err);
        }
    }
}
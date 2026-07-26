package pkg;

import java.sql.*;
import java.util.Scanner;

public class UpdateData {

    public static void main(String[] args) {

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/testdb",
                    "root",
                    "vamshi1234k");

            Statement s = con.createStatement();

            Scanner sc = new Scanner(System.in);

            System.out.println("Update Data in student table:");

            System.out.print("Enter student id: ");
            int sid = sc.nextInt();

            System.out.print("Enter student name: ");
            String sname = sc.next();

            System.out.print("Enter student address: ");
            String saddr = sc.next();

            String updateQuery = "UPDATE student SET s_name='" + sname
                    + "', s_address='" + saddr
                    + "' WHERE s_id=" + sid;

            int rows = s.executeUpdate(updateQuery);

            if (rows > 0) {

                System.out.println("Data updated successfully.");
            }

            else {
                System.out.println("No record found with student id: " + sid);
            }

            // Close resources
            sc.close();
            s.close();
            con.close();

        } catch (ClassNotFoundException e) {
            System.out.println("Driver not found: " + e);
        } catch (SQLException e) {
            System.out.println("ERROR: " + e);
        }
    }
}
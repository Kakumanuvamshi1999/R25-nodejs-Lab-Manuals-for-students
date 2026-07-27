package pkg;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

public class DeleteData {

    public static void main(String[] args) {

        try {
            // Load MySQL JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Establish connection
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/testdb",
                    "root",
                    "vamshi1234k");

            // Create Statement
            Statement s = con.createStatement();

            // Create Scanner
            Scanner sc = new Scanner(System.in);

            System.out.println("Delete Data from student table:");

            System.out.print("Enter student id: ");
            int sid = sc.nextInt();

            // Delete Query
            String deleteQuery = "DELETE FROM student WHERE s_id=" + sid;

            int rows = s.executeUpdate(deleteQuery);

            if (rows > 0) {
                System.out.println("Data deleted successfully.");
            } else {
                System.out.println("No record found with student id: " + sid);
            }

            // Close resources
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
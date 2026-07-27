package pkg;

import java.sql.*;

public class DisplayData {

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

            // Execute Query
            ResultSet rs = s.executeQuery("SELECT * FROM student");

            System.out.println("SID\tSTU_NAME\tADDRESS");
            System.out.println("--------------------------------");

            while (rs.next()) {
                System.out.println(
                        rs.getInt("s_id") + "\t"
                                + rs.getString("s_name") + "\t"
                                + rs.getString("s_address"));
            }

            // Close resources
            rs.close();
            s.close();
            con.close();

        } catch (ClassNotFoundException e) {
            System.out.println("Driver not found: " + e);
        } catch (SQLException err) {
            System.out.println("ERROR: " + err);
        }
    }
}
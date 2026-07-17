<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import="java.util.List" %>
<%@ page import="java.util.Map" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Product Catalog</title>
</head>
<body>

<h2 align="center">Product Catalog</h2>

<%
List<Map<String,String>> products =
        (List<Map<String,String>>)request.getAttribute("products");
%>

<table border="1" align="center" cellpadding="10">

<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Price</th>
    <th>Image</th>
</tr>

<%
if(products != null){
    for(Map<String,String> product : products){
%>

<tr>
    <td><%= product.get("id") %></td>
    <td><%= product.get("name") %></td>
    <td><%= product.get("price") %></td>
    <td>
        <img src="<%= product.get("image_url") %>"
             width="100"
             height="100"
             alt="Product Image">
    </td>
</tr>

<%
    }
}
%>

</table>

</body>
</html>
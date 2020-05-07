# springBoot financial force 
 - this is an accounting process manager app built upon spring boot and angular
 

 
## What's inside 
This project is based on the [Spring Boot](http://projects.spring.io/spring-boot/) project and uses these packages :
- Maven
- Spring Core
- Spring Data (jpa/Hibernate & MySQL)
- Spring security
- Spring MVC (Tomcat)

## Installation 
The project is created with Maven, so you just need to import it to your IDE(Eclipse,..) and build the project to resolve the dependencies

## Database configuration 
Create a MySQL database and add the credentials to `/resources/application.properties`.  
The default ones are :

```
spring.datasource.driverClassName = com.mysql.jdbc.Driver
spring.datasource.url = jdbc:mysql://localhost/databaseName
spring.datasource.username = root
spring.datasource.password = 
```

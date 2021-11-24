FROM adoptopenjdk/openjdk11:jre-11.0.13_8-alpine
ARG JAR_FILE=target/quarkus-petclinic-rest-2.4.2-runner.jar
ARG DB_FILE=src/main/resources/db/hsqldb/initDB.sql
COPY ${JAR_FILE} app.jar
COPY ${DB_FILE} initDB.sql
ENTRYPOINT ["java","-jar","/app.jar"]
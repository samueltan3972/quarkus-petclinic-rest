FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/quarkus-app/quarkus-run.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]